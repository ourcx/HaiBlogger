<template>
  <section class="comments" aria-labelledby="comments-title">
    <div class="comments__heading">
      <h2 id="comments-title">评论 {{ comments.length ? `· ${comments.length}` : '' }}</h2>
      <span class="comments__hint">友善交流就好</span>
    </div>
    <form class="comments__form" @submit.prevent="submit">
      <n-input v-model:value="nickname" maxlength="24" placeholder="你的称呼" aria-label="你的称呼" />
      <n-input v-model:value="content" type="textarea" maxlength="500" show-count placeholder="写下想说的话……" aria-label="评论内容" />
      <input v-model="website" class="comments__trap" tabindex="-1" autocomplete="off" aria-hidden="true" />
      <div class="comments__form-footer"><span>{{ error }}</span><n-button type="primary" attr-type="submit" :loading="submitting">发布评论</n-button></div>
    </form>
    <n-spin :show="loading">
      <div v-if="comments.length" class="comments__list">
        <article v-for="item in comments" :key="item.id" class="comment-card">
          <div class="comment-card__avatar">{{ item.nickname.slice(0, 1).toUpperCase() }}</div>
          <div><div class="comment-card__meta"><strong>{{ item.nickname }}</strong><time>{{ formatDate(item.createdAt) }}</time></div><p>{{ item.content }}</p></div>
        </article>
      </div>
      <n-empty v-else-if="!loading" description="还没有评论" />
    </n-spin>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { NButton, NEmpty, NInput, NSpin } from 'naive-ui'
import { api, type CommentItem } from '@/services/api'

const props = defineProps<{ articleId: string }>()
const comments = ref<CommentItem[]>([])
const nickname = ref(localStorage.getItem('hai-comment-name') || '')
const content = ref('')
const website = ref('')
const loading = ref(true)
const submitting = ref(false)
const error = ref('')

onMounted(async () => {
  try { comments.value = await api.comments(props.articleId) }
  catch { error.value = '评论暂时没有加载出来' }
  finally { loading.value = false }
})

async function submit() {
  error.value = ''
  submitting.value = true
  try {
    const comment = await api.addComment(props.articleId, { nickname: nickname.value, content: content.value, website: website.value })
    if (comment) comments.value.unshift(comment)
    localStorage.setItem('hai-comment-name', nickname.value)
    content.value = ''
  } catch (requestError) {
    error.value = requestError instanceof Error ? requestError.message : '发送失败，请稍后重试'
  } finally { submitting.value = false }
}

function formatDate(value: string) {
  return new Date(`${value.replace(' ', 'T')}Z`).toLocaleString('zh-CN', { hour12: false })
}
</script>

<style scoped>
.comments { margin-top: 48px; padding-top: 32px; border-top: 1px solid var(--border-soft); }
.comments__heading { display: flex; align-items: end; justify-content: space-between; gap: 16px; margin-bottom: 20px; }
.comments__heading h2 { margin: 4px 0 0; font-size: 1.45rem; }
.eyebrow { color: #b51e1e; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.16em; }
.comments__hint { color: var(--text-soft); font-size: 0.85rem; }
.comments__form { display: grid; gap: 12px; padding: 18px; border: 1px solid var(--border-soft); border-radius: 4px; background: color-mix(in srgb, var(--surface) 90%, transparent); }
.comments__trap { position: absolute; left: -9999px; opacity: 0; }
.comments__form-footer { display: flex; min-height: 34px; align-items: center; justify-content: space-between; gap: 12px; color: #b51e1e; font-size: 0.84rem; }
.comments__list { display: grid; gap: 12px; margin-top: 22px; }
.comment-card { display: grid; grid-template-columns: 38px 1fr; gap: 12px; padding: 15px; border: 1px solid var(--border-soft); border-radius: 4px; background: var(--surface); }
.comment-card__avatar { display: grid; width: 38px; height: 38px; place-items: center; border-radius: 50%; color: #fff; background: #b51e1e; }
.comment-card__meta { display: flex; justify-content: space-between; gap: 12px; }
.comment-card__meta time { color: var(--text-soft); font-size: 0.78rem; }
.comment-card p { margin: 6px 0 0; line-height: 1.7; white-space: pre-wrap; }
@media (max-width: 560px) { .comments__heading { align-items: flex-start; flex-direction: column; } .comments__hint { display: none; } }
</style>
