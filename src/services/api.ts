export interface ArticleSummary {
  id: string
  title: string
  category: string
  publishedAt: string
  excerpt: string
}

export interface Article extends ArticleSummary {
  content: string
}

export interface CommentItem {
  id: number
  nickname: string
  content: string
  createdAt: string
}

export interface SiteStats {
  articles: number
  totalUv: number
  todayUv: number
  pageViews: number
  comments: number
}

async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    credentials: 'same-origin',
    headers: { 'content-type': 'application/json', ...options?.headers },
    ...options,
  })
  const result = await response.json()
  if (!response.ok) throw new Error(result.message || '请求失败')
  return result as T
}

export const api = {
  async articles(query = '') {
    const result = await request<{ articles: ArticleSummary[] }>(`/api/articles?q=${encodeURIComponent(query)}`)
    return result.articles
  },
  async article(id: string) {
    const result = await request<{ article: Article }>(`/api/articles/${encodeURIComponent(id)}`)
    return result.article
  },
  async comments(articleId: string) {
    const result = await request<{ comments: CommentItem[] }>(
      `/api/articles/${encodeURIComponent(articleId)}/comments`
    )
    return result.comments
  },
  async addComment(articleId: string, payload: { nickname: string; content: string; website?: string }) {
    const result = await request<{ comment: CommentItem }>(
      `/api/articles/${encodeURIComponent(articleId)}/comments`,
      { method: 'POST', body: JSON.stringify(payload) }
    )
    return result.comment
  },
  async stats() {
    const result = await request<{ stats: SiteStats }>('/api/stats')
    return result.stats
  },
  visit(path: string) {
    return request<{ ok: true }>('/api/visits', { method: 'POST', body: JSON.stringify({ path }) })
  },
}
