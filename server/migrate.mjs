import { db } from './database.mjs'
import { listArticleSources } from './content.mjs'

const upsert = db.prepare(`
  INSERT INTO articles (id, title, category, published_at, excerpt, content, source_path)
  VALUES (?, ?, ?, ?, ?, ?, ?)
  ON CONFLICT(id) DO UPDATE SET
    title = excluded.title,
    category = excluded.category,
    published_at = excluded.published_at,
    excerpt = excluded.excerpt,
    content = excluded.content,
    source_path = excluded.source_path,
    updated_at = CURRENT_TIMESTAMP
`)

const articles = listArticleSources()
db.exec('BEGIN')
try {
  for (const article of articles) {
    upsert.run(
      article.id,
      article.title,
      article.category,
      article.publishedAt,
      article.excerpt,
      article.content,
      article.sourcePath
    )
  }
  db.exec('COMMIT')
} catch (error) {
  db.exec('ROLLBACK')
  throw error
}

console.log(`已迁移 ${articles.length} 篇文章到 SQLite。`)
