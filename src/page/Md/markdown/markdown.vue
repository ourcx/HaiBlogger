<template>
  <div class="article-page">
    <n-spin :show="loading">
      <article v-if="article" class="article-shell">
        <router-link :to="{ name: 'markdownIndex' }" class="article-back">← 返回全部文章</router-link>
        <header class="article-header">
          <span class="article-category">{{ article.category }}</span>
          <h1>{{ article.title }}</h1>
          <div class="article-meta"><time>{{ article.publishedAt }}</time><span>·</span><span>小海</span></div>
        </header>
        <Fei-Markdown :content="article.content" src="" />
        <nav class="article-nav" aria-label="文章翻页">
          <n-button quaternary :disabled="!previous" @click="open(previous?.id)">← 上一篇</n-button>
          <n-button quaternary type="primary" :disabled="!next" @click="open(next?.id)">下一篇 →</n-button>
        </nav>
        <CommentSection :key="article.id" :article-id="article.id" />
      </article>
      <n-result v-else-if="error" status="error" title="文章没有加载出来" :description="error">
        <template #footer><n-button @click="load">重新加载</n-button></template>
      </n-result>
    </n-spin>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { NButton, NResult, NSpin } from 'naive-ui'
import CommentSection from '@/components/Comment/CommentSection.vue'
import type { Article } from '@/services/api'
import { useDynamicStore } from '@/store'

const route = useRoute()
const router = useRouter()
const store = useDynamicStore()
const article = ref<Article | null>(null)
const loading = ref(true)
const error = ref('')
const index = computed(() => store.data.findIndex((item) => item.id === article.value?.id))
const previous = computed(() => index.value > 0 ? store.data[index.value - 1] : undefined)
const next = computed(() => index.value >= 0 ? store.data[index.value + 1] : undefined)

async function load() {
  loading.value = true
  error.value = ''
  try {
    await store.initData()
    article.value = await store.getArticle(String(route.params.id))
  } catch (requestError) {
    article.value = null
    error.value = requestError instanceof Error ? requestError.message : '请稍后再试'
  } finally { loading.value = false }
}

function open(id?: string) {
  if (id) router.push({ name: 'markdown', params: { id } })
}

watch(() => route.params.id, load, { immediate: true })
</script>

<style scoped>
.article-page { width: min(100%, 1060px); min-height: 100dvh; margin: 0 auto; padding: clamp(24px, 5vw, 68px); }
.article-shell { padding: clamp(24px, 5vw, 58px); border: 1px solid var(--border-soft); border-radius: 6px; background: color-mix(in srgb, var(--surface) 94%, transparent); box-shadow: var(--shadow-soft); }
.article-back { color: var(--text-soft); font-size: 0.9rem; text-decoration: none; }
.article-back:hover { color: #b51e1e; }
.article-header { margin: 40px 0 44px; text-align: center; }
.article-category { display: inline-flex; padding: 4px 10px; border: 1px solid rgba(181, 30, 30, 0.24); border-radius: 3px; color: #b51e1e; font-size: 0.78rem; }
.article-header h1 { max-width: 720px; margin: 14px auto; font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.14; }
.article-meta { display: flex; justify-content: center; gap: 10px; color: var(--text-soft); font-size: 0.88rem; }
.article-nav { display: flex; justify-content: space-between; margin-top: 44px; padding-top: 22px; border-top: 1px solid var(--border-soft); }
@media (max-width: 600px) { .article-page { padding: 10px 0; } .article-shell { padding: 24px 18px; border-radius: 0; } .article-header { margin: 32px 0; } }
</style>
