import { defineStore } from 'pinia'

// 示例 store
export const useMainStore = defineStore('main', {
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})