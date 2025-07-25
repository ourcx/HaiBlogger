import { defineStore } from 'pinia'
type DataItem = {
  title: string
  content: string
  links: string
}

type DataArray = DataItem[]
// 示例 store
export const useDynamicStore = defineStore('Dynamic', {
  state: (): { data: DataArray } => ({
    data: [
      { title: '为什么写博客', content: '博客是我们在互联网上的一块天地，相比于微博，小红书等，我们更希望是一个开放、分享、交流学习的地方。可以构建自己喜欢的事物和风格，创建自己的小世界。也能去分享心得，创造价值。', links: '' },
      { title: '为什么写博客', content: 'content', links: '' }
    ]
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {}
})
