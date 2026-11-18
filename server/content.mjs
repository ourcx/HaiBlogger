import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { basename, dirname, extname, join, relative, resolve, sep } from 'node:path'

export const contentRoot = resolve('server/content')

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = join(directory, entry.name)
    return entry.isDirectory() ? walk(fullPath) : [fullPath]
  })
}

function parseFrontmatter(source) {
  const match = source.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/)
  if (!match) return { body: source, metadata: {} }

  const metadata = Object.fromEntries(
    match[1]
      .split('\n')
      .map((line) => line.match(/^([\w-]+):\s*["']?(.*?)["']?\s*$/))
      .filter(Boolean)
      .map((item) => [item[1], item[2]])
  )
  return { body: source.slice(match[0].length), metadata }
}

function plainText(markdown) {
  return markdown
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/[`*_>#\[\]~-]/g, ' ')
    .replace(/\([^)]*\)/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

export function listArticleSources() {
  if (!existsSync(contentRoot)) return []

  return walk(contentRoot)
    .filter((file) => extname(file).toLowerCase() === '.md' && !basename(file).startsWith('._'))
    .map((file) => {
      const source = readFileSync(file, 'utf8')
      const { body, metadata } = parseFrontmatter(source)
      const sourcePath = relative(contentRoot, file).split(sep).join('/')
      const id = sourcePath.replace(/\.md$/i, '')
      const heading = body.match(/^#\s+(.+)$/m)?.[1]?.trim()
      const title = metadata.title || heading || basename(file, '.md')
      const category = dirname(sourcePath) === '.' ? '随笔' : dirname(sourcePath).split('/')[0]
      const excerpt = metadata.excerpt || plainText(body).slice(0, 150)
      const publishedAt = metadata.date || statSync(file).mtime.toISOString().slice(0, 10)
      return { id, title, category, publishedAt, excerpt, content: body, sourcePath }
    })
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
}

export function resolveAsset(relativePath) {
  const decoded = decodeURIComponent(relativePath)
  const target = resolve(contentRoot, decoded)
  if (target !== contentRoot && target.startsWith(`${contentRoot}${sep}`) && existsSync(target)) {
    return target
  }
  return null
}

export function normalizeAssetUrls(markdown, sourcePath) {
  const articleDirectory = dirname(sourcePath)
  const assetsDirectory = `${basename(sourcePath, '.md')}.assets`

  return markdown.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (full, alt, rawTarget) => {
    const target = rawTarget.trim().replace(/^['"]|['"]$/g, '')
    if (/^(https?:|data:|\/api\/assets\/)/i.test(target)) return full

    const fileName = basename(target.replaceAll('\\', '/'))
    const candidates = [
      join(articleDirectory, assetsDirectory, fileName),
      join(articleDirectory, target.replaceAll('\\', '/')),
    ]
    const matched = candidates.find((candidate) => existsSync(join(contentRoot, candidate)))
    if (!matched) return full

    const url = matched.split(sep).map(encodeURIComponent).join('/')
    return `![${alt}](/api/assets/${url})`
  })
}
