import { createHash, randomUUID } from 'node:crypto'
import { mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { DatabaseSync } from 'node:sqlite'

const databasePath = resolve(process.env.DATABASE_PATH || 'server/data/blog.sqlite')
mkdirSync(dirname(databasePath), { recursive: true })

export const db = new DatabaseSync(databasePath)
db.exec('PRAGMA foreign_keys = ON; PRAGMA journal_mode = WAL;')

db.exec(`
  CREATE TABLE IF NOT EXISTS articles (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT '',
    published_at TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    source_path TEXT NOT NULL UNIQUE,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    article_id TEXT NOT NULL REFERENCES articles(id) ON DELETE CASCADE,
    nickname TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    status TEXT NOT NULL DEFAULT 'published'
  );

  CREATE TABLE IF NOT EXISTS visitors (
    visitor_id TEXT PRIMARY KEY,
    fingerprint_hash TEXT NOT NULL,
    first_seen TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_seen TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS page_views (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    visitor_id TEXT NOT NULL REFERENCES visitors(visitor_id) ON DELETE CASCADE,
    path TEXT NOT NULL,
    viewed_on TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS daily_unique_visits (
    visitor_id TEXT NOT NULL REFERENCES visitors(visitor_id) ON DELETE CASCADE,
    viewed_on TEXT NOT NULL,
    PRIMARY KEY (visitor_id, viewed_on)
  );

  CREATE INDEX IF NOT EXISTS idx_comments_article ON comments(article_id, created_at DESC);
  CREATE INDEX IF NOT EXISTS idx_page_views_date ON page_views(viewed_on);
`)

export function createVisitorId() {
  return randomUUID()
}

export function visitorFingerprint(request) {
  const forwarded = request.headers['x-forwarded-for']
  const remoteAddress = request.socket.remoteAddress || ''
  const ip = typeof forwarded === 'string' ? forwarded.split(',')[0].trim() : remoteAddress
  const userAgent = request.headers['user-agent'] || ''
  const salt = process.env.VISITOR_SALT || 'hai-blog-local-salt'
  // 只保存不可逆摘要，用于排查重复访客，不落明文 IP。
  return createHash('sha256').update(`${salt}:${ip}:${userAgent}`).digest('hex')
}
