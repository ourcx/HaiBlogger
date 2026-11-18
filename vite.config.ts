import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' 
import VueDevTools from 'vite-plugin-vue-devtools';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [vue(),VueDevTools()],
  resolve: {
    alias: {
      // 👇 设置别名，告诉 Vite @ 指向什么
      '@': path.resolve(__dirname, 'src')
    }
  },
  optimizeDeps: {
    include: ['naive-ui']
  },
  server: {
    proxy: {
      '/api': 'http://localhost:8787'
    }
  }
})
