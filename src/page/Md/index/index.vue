<template>
  <section class="archive-page">
    <header class="archive-header">
      <div><h1>文章归档</h1><p>技术笔记，也有一些生活记录。</p></div>
      <n-input v-model:value="query" clearable placeholder="搜索标题、分类或内容摘要" aria-label="搜索文章">
        <template #prefix><n-icon :component="SearchOutline" /></template>
      </n-input>
    </header>

    <div class="archive-filters" aria-label="文章分类">
      <button v-for="item in categories" :key="item" :class="{ active: category === item }" @click="category = item">{{ item }}</button>
    </div>

    <n-spin :show="store.loading">
      <div v-if="visiblePosts.length" class="article-grid">
        <router-link v-for="post in visiblePosts" :key="post.id" :to="{ name: 'markdown', params: { id: post.id } }" class="article-card">
          <div class="article-card__top"><span>{{ post.category }}</span><time>{{ post.publishedAt }}</time></div>
          <h2>{{ post.title }}</h2>
          <p>{{ post.excerpt }}</p>
          <span class="article-card__link">继续阅读 <span>↗</span></span>
        </router-link>
      </div>
      <n-empty v-else-if="!store.loading" :description="store.error || '没有找到匹配的文章'" />
    </n-spin>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { NEmpty, NIcon, NInput, NSpin } from 'naive-ui'
import { SearchOutline } from '@vicons/ionicons5'
import { useDynamicStore } from '@/store'

const store = useDynamicStore()
const query = ref('')
const category = ref('全部')
store.initData()
const categories = computed(() => ['全部', ...new Set(store.data.map((item) => item.category))])
const visiblePosts = computed(() => {
  const keyword = query.value.trim().toLowerCase()
  return store.data.filter((post) => {
    const inCategory = category.value === '全部' || post.category === category.value
    const text = `${post.title} ${post.category} ${post.excerpt}`.toLowerCase()
    return inCategory && (!keyword || text.includes(keyword))
  })
})
</script>

<style scoped>
.archive-page { width: min(100%, 1120px); min-height: 100dvh; margin: 0 auto; padding: clamp(28px, 5vw, 72px); }
.archive-header { display: grid; grid-template-columns: 1fr minmax(260px, 360px); align-items: end; gap: 40px; margin-bottom: 30px; }
.eyebrow { color: #b51e1e; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.17em; }
.archive-header h1 { margin: 8px 0 10px; font-size: clamp(2.4rem, 6vw, 4.5rem); line-height: 1; }
.archive-header p { max-width: 600px; margin: 0; color: var(--text-soft); font-size: 1rem; line-height: 1.7; }
.archive-filters { display: flex; gap: 8px; margin-bottom: 26px; overflow-x: auto; }
.archive-filters button { padding: 7px 14px; border: 1px solid var(--border-soft); border-radius: 3px; color: var(--text-soft); background: var(--surface); cursor: pointer; white-space: nowrap; transition: color .14s ease, border-color .14s ease, background .14s ease; }
.archive-filters button.active { border-color: #b51e1e; color: white; background: #b51e1e; }
.article-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
.article-card { display: flex; min-height: 260px; flex-direction: column; padding: 24px; border: 1px solid var(--border-soft); border-radius: 6px; color: inherit; background: color-mix(in srgb, var(--surface) 94%, transparent); text-decoration: none; transition: transform 0.16s ease, border-color 0.16s ease, box-shadow 0.16s ease; }
.article-card:hover { border-color: rgba(181, 30, 30, 0.38); box-shadow: var(--shadow-soft); transform: translateY(-2px); }
.article-card__top { display: flex; justify-content: space-between; color: var(--text-soft); font-size: 0.78rem; }
.article-card__top span { color: #b51e1e; }
.article-card h2 { margin: 24px 0 12px; font-size: 1.4rem; line-height: 1.35; }
.article-card p { display: -webkit-box; margin: 0; overflow: hidden; color: var(--text-soft); line-height: 1.7; -webkit-box-orient: vertical; -webkit-line-clamp: 3; }
.article-card__link { margin-top: auto; padding-top: 20px; color: #b51e1e; font-size: 0.9rem; }
.article-card__link span { display: inline-block; transition: transform 0.2s ease; }
.article-card:hover .article-card__link span { transform: translate(3px, -3px); }
@media (max-width: 720px) { .archive-page { padding: 28px 8px; } .archive-header { grid-template-columns: 1fr; gap: 22px; } .article-grid { grid-template-columns: 1fr; } }
</style>
