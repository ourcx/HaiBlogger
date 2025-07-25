import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/page/Home/Home.vue'
import Markdown from '@/page/Md/index/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/markdown',
    name: 'markdown',
    component: Markdown
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router