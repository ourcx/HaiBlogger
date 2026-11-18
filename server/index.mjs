import { createReadStream, existsSync, statSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, join, resolve } from 'node:path'
import { createVisitorId, db, visitorFingerprint } from './database.mjs'
import { normalizeAssetUrls, resolveAsset } from './content.mjs'
import './migrate.mjs'

const port = Number(process.env.PORT || 8787)
const distRoot = resolve('dist')
const rateLimit = new Map()

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
}

function json(response, status, body, headers = {}) {
  response.writeHead(status, { 'content-type': 'application/json; charset=utf-8', ...headers })
  response.end(JSON.stringify(body))
}

function parseCookies(request) {
  return Object.fromEntries(
    (request.headers.cookie || '')
      .split(';')
      .map((part) => part.trim().split('='))
      .filter(([key, value]) => key && value)
      .map(([key, value]) => [key, decodeURIComponent(value)])
  )
}

async function readJson(request) {
  let raw = ''
  for await (const chunk of request) {
    raw += chunk
    if (raw.length > 20_000) throw new Error('请求内容过大')
  }
  return raw ? JSON.parse(raw) : {}
}

function isRateLimited(key) {
  const now = Date.now()
  const previous = rateLimit.get(key) || 0
  if (now - previous < 30_000) return true
  rateLimit.set(key, now)
  return false
}

function getArticle(id) {
  const article = db.prepare(`
    SELECT id, title, category, published_at AS publishedAt, excerpt, content, source_path AS sourcePath
    FROM articles WHERE id = ?
  `).get(id)
  if (!article) return null
  return { ...article, content: normalizeAssetUrls(article.content, article.sourcePath) }
}

function visitorIdFor(request) {
  const existing = parseCookies(request).hai_visitor
  return existing && /^[0-9a-f-]{36}$/i.test(existing) ? existing : createVisitorId()
}

async function handleApi(request, response, url) {
  if (request.method === 'GET' && url.pathname === '/api/health') {
    return json(response, 200, { ok: true })
  }

  if (request.method === 'GET' && url.pathname === '/api/articles') {
    const query = url.searchParams.get('q')?.trim() || ''
    const rows = db.prepare(`
      SELECT id, title, category, published_at AS publishedAt, excerpt
      FROM articles
      WHERE title LIKE ? OR excerpt LIKE ? OR category LIKE ?
      ORDER BY published_at DESC, title ASC
    `).all(`%${query}%`, `%${query}%`, `%${query}%`)
    return json(response, 200, { articles: rows })
  }

  if (request.method === 'GET' && url.pathname.startsWith('/api/assets/')) {
    const asset = resolveAsset(url.pathname.slice('/api/assets/'.length))
    if (!asset) return json(response, 404, { message: '资源不存在' })
    response.writeHead(200, {
      'content-type': mimeTypes[extname(asset).toLowerCase()] || 'application/octet-stream',
      'cache-control': 'public, max-age=86400',
    })
    return createReadStream(asset).pipe(response)
  }

  const commentMatch = url.pathname.match(/^\/api\/articles\/(.+)\/comments$/)
  if (commentMatch) {
    const articleId = decodeURIComponent(commentMatch[1])
    if (!getArticle(articleId)) return json(response, 404, { message: '文章不存在' })

    if (request.method === 'GET') {
      const comments = db.prepare(`
        SELECT id, nickname, content, created_at AS createdAt
        FROM comments WHERE article_id = ? AND status = 'published'
        ORDER BY created_at DESC
      `).all(articleId)
      return json(response, 200, { comments })
    }

    if (request.method === 'POST') {
      const visitorId = visitorIdFor(request)
      if (isRateLimited(`comment:${visitorId}`)) {
        return json(response, 429, { message: '留言太快了，请稍后再试' })
      }
      const body = await readJson(request)
      if (body.website) return json(response, 201, { ok: true })
      const nickname = String(body.nickname || '').trim()
      const content = String(body.content || '').trim()
      if (nickname.length < 1 || nickname.length > 24 || content.length < 2 || content.length > 500) {
        return json(response, 400, { message: '昵称需 1–24 字，评论需 2–500 字' })
      }
      const result = db.prepare(
        'INSERT INTO comments (article_id, nickname, content) VALUES (?, ?, ?)'
      ).run(articleId, nickname, content)
      const comment = db.prepare(`
        SELECT id, nickname, content, created_at AS createdAt FROM comments WHERE id = ?
      `).get(result.lastInsertRowid)
      return json(response, 201, { comment })
    }
  }

  const articleMatch = url.pathname.match(/^\/api\/articles\/(.+)$/)
  if (request.method === 'GET' && articleMatch) {
    const article = getArticle(decodeURIComponent(articleMatch[1]))
    return article ? json(response, 200, { article }) : json(response, 404, { message: '文章不存在' })
  }

  if (request.method === 'POST' && url.pathname === '/api/visits') {
    const body = await readJson(request)
    const path = String(body.path || '/').slice(0, 240)
    const visitorId = visitorIdFor(request)
    const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Shanghai' }).format(new Date())
    db.prepare(`
      INSERT INTO visitors (visitor_id, fingerprint_hash) VALUES (?, ?)
      ON CONFLICT(visitor_id) DO UPDATE SET last_seen = CURRENT_TIMESTAMP
    `).run(visitorId, visitorFingerprint(request))
    db.prepare('INSERT INTO page_views (visitor_id, path, viewed_on) VALUES (?, ?, ?)').run(visitorId, path, today)
    db.prepare('INSERT OR IGNORE INTO daily_unique_visits (visitor_id, viewed_on) VALUES (?, ?)').run(visitorId, today)
    return json(response, 201, { ok: true }, {
      'set-cookie': `hai_visitor=${encodeURIComponent(visitorId)}; Path=/; Max-Age=31536000; HttpOnly; SameSite=Lax`,
    })
  }

  if (request.method === 'GET' && url.pathname === '/api/stats') {
    const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Shanghai' }).format(new Date())
    const stats = db.prepare(`
      SELECT
        (SELECT COUNT(*) FROM articles) AS articles,
        (SELECT COUNT(*) FROM visitors) AS totalUv,
        (SELECT COUNT(*) FROM daily_unique_visits WHERE viewed_on = ?) AS todayUv,
        (SELECT COUNT(*) FROM page_views) AS pageViews,
        (SELECT COUNT(*) FROM comments WHERE status = 'published') AS comments
    `).get(today)
    return json(response, 200, { stats })
  }

  if (request.method === 'GET' && url.pathname === '/api/exploration/voyager') {
    const referenceTime = Date.parse('2026-09-14T00:00:00Z')
    const referenceKm = 171.70724579 * 149_597_870.7
    const speedKmPerSecond = 16.92
    const distanceKm = referenceKm + Math.max(0, Date.now() - referenceTime) / 1000 * speedKmPerSecond
    return json(response, 200, {
      name: '旅行者一号',
      distanceKm: Math.round(distanceKm),
      astronomicalUnits: distanceKm / 149_597_870.7,
      lightHours: distanceKm / 299_792.458 / 3600,
      speedKmPerSecond,
      updatedAt: new Date().toISOString(),
      source: 'NASA Voyager Mission Status',
      sourceUrl: 'https://science.nasa.gov/specials/apps/voyager-vital-signs/table/',
      estimated: true,
    })
  }

  return json(response, 404, { message: '接口不存在' })
}

function serveFrontend(_request, response, url) {
  if (!existsSync(distRoot)) return json(response, 503, { message: '前端尚未构建，请先运行 npm run build' })
  const pathname = decodeURIComponent(url.pathname)
  const requested = resolve(distRoot, `.${pathname}`)
  const file = requested.startsWith(distRoot) && existsSync(requested) && statSync(requested).isFile()
    ? requested
    : join(distRoot, 'index.html')
  response.writeHead(200, { 'content-type': mimeTypes[extname(file).toLowerCase()] || 'application/octet-stream' })
  createReadStream(file).pipe(response)
}

const server = createServer(async (request, response) => {
  const url = new URL(request.url || '/', `http://${request.headers.host || 'localhost'}`)
  try {
    if (url.pathname.startsWith('/api/')) await handleApi(request, response, url)
    else serveFrontend(request, response, url)
  } catch (error) {
    console.error(error)
    json(response, 500, { message: '服务器暂时开小差了' })
  }
})

server.listen(port, () => console.log(`小海博客服务已启动：http://localhost:${port}`))

export default server
