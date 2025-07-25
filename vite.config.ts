import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 👈 引入 Node.js 的 path 模块

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 👇 设置别名，告诉 Vite @ 指向什么
      '@': path.resolve(__dirname, 'src')
    }
  },
   optimizeDeps: {
    include: ['naive-ui']
  }
})