import { defineStore } from 'pinia'
import { ref } from 'vue'
import { extractFrontmatter } from '@/utils/extractFrontmatter'
import MarkdownIt from 'markdown-it'
import { cleanMarkdown } from '@/utils/cleanMarkdown'
type DataItem = {
  id?: string
  title: string
  date?: string
  excerpt?: string
  content: string
  htmlContent?: string
  links?: string
}

type DataArray = DataItem[]
// 示例 store
export const useDynamicStore = defineStore('Dynamic', {
  state: (): { data: DataArray } => ({
    data: [
      {
        title: '为什么写博客',
        content:
          '博客是我们在互联网上的一块天地，相比于微博，小红书等，我们更希望是一个开放、分享、交流学习的地方。可以构建自己喜欢的事物和风格，创建自己的小世界。也能去分享心得，创造价值。',
        links: ''
      }
    ]
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    initData () {
      const mdParser = new MarkdownIt()
      const posts = ref<DataArray>([])
      const mdModules = import.meta.glob('/src/blog/**/*.md', {
        eager: true,
        query: '?raw' // 避免特殊字符问题
      })
      posts.value = Object.entries(mdModules).map(([path, module]: any) => {
        const fileName = decodeURIComponent(path.split('/').pop() || '')
        const id = fileName.replace(/\.md$/, '')
        const rawContent = cleanMarkdown(module.default)
        const frontmatter = extractFrontmatter(rawContent)
        const htmlContent = mdParser.render(
          rawContent.replace(/^---[\s\S]*?---/, '')
        )

        return {
          id,
          title: frontmatter.title || id,
          date: frontmatter.date || '未知日期',
          excerpt: frontmatter.excerpt || htmlContent.substring(0, 100) + '...',
          content: module.default,
        }
      })
      this.data = posts.value.sort((a, b) => a.title.localeCompare(b.title))
      console.log(posts.value)
    }
  }
})
