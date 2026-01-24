import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' 
import VueDevTools from 'vite-plugin-vue-devtools';

// https://vitejs.dev/config/
export default defineConfig({
  // **重要**：添加 'base' 选项以指定你的 GitHub 仓库名称。
  // 请将 '/your-repo-name/' 替换为你的实际仓库名，例如 '/xh-blog/'.
  base: '/HaiBlogger/', 
  plugins: [vue(),VueDevTools()],
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
