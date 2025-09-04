import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/page/Home/Home.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/markdown',
    name: 'markdownIndex',
    component:()=>import('@/page/Md/index/index.vue')
  },
  {
    path: '/markdown/:id', // 添加动态参数
    name: 'markdown',
    component: () => import('@/page/Md/markdown/markdown.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('@/page/projects/index/index.vue')
  },
  {
    path: '/links',
    name: 'links',
    component: () => import('@/page/Links/index/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/page/About/index.vue')
  },
  {
    path: '/time',
    name: 'time',
    component: () => import('@/page/TimeLine/index.vue')
  },
  // 确保所有菜单项都有对应的路由
  {
    path: '/:pathMatch(.*)*', // 添加404路由
    name: 'not-found',
    component: () => import('@/page/NotFound/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
