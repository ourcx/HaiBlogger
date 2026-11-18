<template>
  <div class="home-page">
    <section class="hero">
      <div class="hero__copy">
        <span class="eyebrow">小海的角落</span>
        <h1>你好，我是小海。<br><em>这里是我的博客。</em></h1>
        <p>前端开发者。平时写技术、做开源，也记录骑行、阅读和生活。</p>
        <div class="hero__actions">
          <n-button type="primary" size="large" @click="$router.push({ name: 'markdownIndex' })">看文章</n-button>
          <n-button secondary size="large" @click="$router.push({ name: 'explore' })">逛逛探索页</n-button>
        </div>
      </div>
      <div class="hero__orbit" aria-hidden="true">
        <div class="orbit orbit--outer"><i></i></div>
        <div class="orbit orbit--inner"><i></i></div>
        <div class="hero__avatar"><n-avatar round :size="112" src="https://s2.loli.net/2025/02/02/ELbK6urJqYvgBPj.jpg" /></div>
        <span class="hero__signal">你好，世界</span>
      </div>
    </section>

    <section class="signal-strip" aria-label="站点统计">
      <div><strong>{{ stats.articles }}</strong><span>篇文章</span></div>
      <div><strong>{{ stats.totalUv }}</strong><span>访客</span></div>
      <div><strong>{{ stats.pageViews }}</strong><span>浏览</span></div>
      <div><strong>{{ stats.comments }}</strong><span>评论</span></div>
    </section>

    <section class="latest">
      <div class="section-heading"><h2>最近写的</h2><router-link :to="{ name: 'markdownIndex' }">全部文章 →</router-link></div>
      <div class="latest__grid">
        <router-link v-for="(post, index) in recentPosts" :key="post.id" :to="{ name: 'markdown', params: { id: post.id } }" class="post-card" :class="{ 'post-card--lead': index === 0 }">
          <span>{{ post.category }} · {{ post.publishedAt }}</span>
          <h3>{{ post.title }}</h3>
          <p>{{ post.excerpt }}</p>
          <i>0{{ index + 1 }}</i>
        </router-link>
      </div>
    </section>

    <router-link :to="{ name: 'explore' }" class="cosmos-teaser">
      <div><span class="eyebrow">宇宙尺度</span><h2>旅行者一号现在离我们多远？</h2><p>还有几个把宇宙尺度换算成日常距离的小工具。</p></div>
      <div class="cosmos-teaser__arrow">↗</div>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { NAvatar, NButton } from 'naive-ui'
import { api, type SiteStats } from '@/services/api'
import { useDynamicStore } from '@/store'

const store = useDynamicStore()
const stats = ref<SiteStats>({ articles: 0, totalUv: 0, todayUv: 0, pageViews: 0, comments: 0 })
const recentPosts = computed(() => store.data.slice(0, 3))
onMounted(async () => {
  await store.initData()
  try { stats.value = await api.stats() } catch { /* 统计不影响主页阅读 */ }
})
</script>

<style scoped>
.home-page { width: min(100%, 1180px); margin: 0 auto; padding: clamp(30px, 6vw, 82px); }
.eyebrow { color: #b51e1e; font-size: 0.73rem; font-weight: 750; letter-spacing: 0.18em; }
.hero { display: grid; min-height: 58vh; grid-template-columns: minmax(0, 1.2fr) minmax(300px, 0.8fr); align-items: center; gap: clamp(30px, 7vw, 90px); }
.hero h1 { margin: 16px 0 22px; font-size: clamp(3rem, 7vw, 6.3rem); font-weight: 720; letter-spacing: -0.055em; line-height: 0.98; }
.hero h1 em { color: #b51e1e; font-family: Georgia, 'Songti SC', serif; font-weight: 500; }
.hero__copy > p { max-width: 620px; margin: 0; color: var(--text-soft); font-size: 1.05rem; line-height: 1.85; }
.hero__actions { display: flex; gap: 12px; margin-top: 30px; }
.hero__orbit { position: relative; display: grid; aspect-ratio: 1; place-items: center; }
.hero__orbit::before { content: ''; position: absolute; width: 6px; height: 6px; border-radius: 50%; background: #b51e1e; box-shadow: 86px 110px 0 rgba(181,30,30,.45), -115px -70px 0 rgba(181,30,30,.3), 128px -55px 0 rgba(181,30,30,.22); }
.orbit { position: absolute; border: 1px solid rgba(181, 30, 30, 0.2); border-radius: 50%; animation: orbit-spin 8s linear infinite; }
.orbit--outer { width: 92%; height: 66%; transform: rotate(-20deg); }
.orbit--inner { width: 66%; height: 92%; animation-direction: reverse; animation-duration: 11s; }
.orbit i { position: absolute; top: 50%; right: -5px; width: 10px; height: 10px; border-radius: 50%; background: #b51e1e; box-shadow: 0 0 18px rgba(181,30,30,.5); }
.hero__avatar { position: relative; z-index: 1; padding: 10px; border: 1px solid var(--border-soft); border-radius: 50%; background: var(--surface); box-shadow: var(--shadow-soft); }
.hero__signal { position: absolute; right: 7%; bottom: 16%; padding: 6px 9px; border: 1px solid var(--border-soft); border-radius: 3px; color: var(--text-soft); background: var(--surface); font-size: 0.72rem; }
@keyframes orbit-spin { to { rotate: 360deg; } }
.signal-strip { display: grid; grid-template-columns: repeat(4, 1fr); margin: 20px 0 90px; padding: 18px 0; border-block: 1px solid var(--border-soft); }
.signal-strip div { display: flex; align-items: baseline; justify-content: center; gap: 8px; border-right: 1px solid var(--border-soft); }
.signal-strip div:last-child { border: 0; }
.signal-strip strong { font-size: 1.55rem; }
.signal-strip span { color: var(--text-soft); font-size: 0.82rem; }
.section-heading { display: flex; align-items: end; justify-content: space-between; margin-bottom: 22px; }
.section-heading h2, .cosmos-teaser h2 { margin: 7px 0 0; font-size: clamp(2rem, 4vw, 3.1rem); }
.section-heading a { color: #b51e1e; text-decoration: none; }
.latest__grid { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 14px; }
.post-card { position: relative; display: flex; min-height: 210px; flex-direction: column; padding: 24px; overflow: hidden; border: 1px solid var(--border-soft); border-radius: 6px; color: inherit; background: color-mix(in srgb, var(--surface) 94%, transparent); text-decoration: none; transition: transform 0.16s ease, border-color 0.16s ease, box-shadow 0.16s ease; }
.post-card--lead { grid-row: span 2; min-height: 434px; justify-content: end; border-left: 3px solid #b51e1e; }
.post-card:hover { border-color: rgba(181,30,30,.38); box-shadow: var(--shadow-soft); transform: translateY(-2px); }
.post-card > span { font-size: 0.78rem; opacity: 0.7; }
.post-card h3 { margin: 14px 0 9px; font-size: clamp(1.35rem, 3vw, 2rem); }
.post-card p { display: -webkit-box; margin: 0; overflow: hidden; line-height: 1.7; opacity: 0.72; -webkit-box-orient: vertical; -webkit-line-clamp: 3; }
.post-card i { position: absolute; top: 18px; right: 22px; font-family: Georgia, serif; font-size: 2.8rem; font-style: normal; opacity: 0.08; }
.cosmos-teaser { display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 40px; margin-top: 90px; padding: clamp(28px, 5vw, 58px); border: 1px solid var(--border-soft); border-radius: 6px; color: inherit; background: color-mix(in srgb, var(--surface) 90%, transparent); text-decoration: none; }
.cosmos-teaser p { max-width: 650px; color: var(--text-soft); line-height: 1.7; }
.cosmos-teaser__arrow { display: grid; width: 56px; height: 56px; place-items: center; border: 1px solid #b51e1e; border-radius: 4px; color: #b51e1e; font-size: 1.45rem; transition: transform .16s ease; }
.cosmos-teaser:hover .cosmos-teaser__arrow { transform: translate(5px, -5px); }
@media (max-width: 760px) { .home-page { padding: 34px 8px; } .hero { min-height: auto; grid-template-columns: 1fr; } .hero__orbit { width: min(80vw, 350px); margin: 0 auto; } .signal-strip { grid-template-columns: repeat(2, 1fr); gap: 18px 0; margin-bottom: 62px; } .signal-strip div:nth-child(2) { border: 0; } .latest__grid { grid-template-columns: 1fr; } .post-card--lead { min-height: 280px; grid-row: auto; } }
</style>
