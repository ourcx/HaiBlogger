import { defineStore } from 'pinia'
import { api, type Article, type ArticleSummary } from '@/services/api'

export const useDynamicStore = defineStore('Dynamic', {
  state: (): {
    data: ArticleSummary[]
    articleCache: Record<string, Article>
    loading: boolean
    error: string
    theme: 'light' | 'dark'
  } => ({
    data: [],
    articleCache: {},
    loading: false,
    error: '',
    theme: (localStorage.getItem('hai-theme') as 'light' | 'dark') || 'light',
  }),
  actions: {
    async initData() {
      if (this.data.length || this.loading) return
      this.loading = true
      this.error = ''
      try {
        this.data = await api.articles()
      } catch (error) {
        this.error = error instanceof Error ? error.message : '文章加载失败'
      } finally {
        this.loading = false
      }
    },
    async getArticle(id: string) {
      if (!this.articleCache[id]) this.articleCache[id] = await api.article(id)
      return this.articleCache[id]
    },
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
      localStorage.setItem('hai-theme', this.theme)
      document.documentElement.dataset.theme = this.theme
    },
  },
})
