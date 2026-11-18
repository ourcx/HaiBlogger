<template>
  <aside class="site-nav" :class="{ 'site-nav--open': !collapsed }">
    <div class="site-nav__brand">
      <span class="site-nav__mark">海</span>
      <span v-if="!collapsed" class="site-nav__name">小海的角落</span>
    </div>

    <nav class="site-nav__links" aria-label="主导航">
      <router-link
        v-for="item in navItems"
        :key="item.route"
        :to="{ name: item.route }"
        class="site-nav__link"
        :title="item.label"
      >
        <n-icon :component="item.icon" />
        <span v-if="!collapsed">{{ item.label }}</span>
      </router-link>
    </nav>

    <div class="site-nav__footer">
      <n-button quaternary circle :aria-label="themeLabel" :title="themeLabel" @click="store.toggleTheme">
        <template #icon><n-icon :component="store.theme === 'light' ? MoonOutline : SunnyOutline" /></template>
      </n-button>
      <n-button quaternary circle :aria-label="collapsed ? '展开导航' : '收起导航'" @click="collapsed = !collapsed">
        <template #icon><n-icon :component="collapsed ? ChevronForward : ChevronBack" /></template>
      </n-button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { NButton, NIcon } from 'naive-ui'
import {
  BookOutline,
  BriefcaseOutline,
  ChevronBack,
  ChevronForward,
  CompassOutline,
  HomeOutline,
  InformationCircleOutline,
  LinkOutline,
  MoonOutline,
  SunnyOutline,
  TimeOutline,
} from '@vicons/ionicons5'
import { useDynamicStore } from '@/store'

const collapsed = ref(true)
const store = useDynamicStore()
const themeLabel = computed(() => store.theme === 'light' ? '切换到深色模式' : '切换到浅色模式')
const navItems = [
  { label: '首页', route: 'home', icon: HomeOutline },
  { label: '文章', route: 'markdownIndex', icon: BookOutline },
  { label: '探索', route: 'explore', icon: CompassOutline },
  { label: '项目', route: 'projects', icon: BriefcaseOutline },
  { label: '时间线', route: 'time', icon: TimeOutline },
  { label: '友链', route: 'links', icon: LinkOutline },
  { label: '关于', route: 'about', icon: InformationCircleOutline },
]
</script>

<style scoped lang="scss">
.site-nav {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  flex: 0 0 72px;
  flex-direction: column;
  width: 72px;
  height: 100dvh;
  padding: 18px 10px;
  border-right: 1px solid rgba(181, 30, 30, 0.14);
  background: color-mix(in srgb, var(--surface) 88%, transparent);
  backdrop-filter: blur(18px);
  transition: width 0.16s ease, flex-basis 0.16s ease;
}

.site-nav--open { width: 220px; flex-basis: 220px; }
.site-nav__brand { display: flex; min-height: 48px; align-items: center; gap: 12px; padding: 0 8px 18px; white-space: nowrap; }
.site-nav__mark { display: grid; width: 38px; height: 38px; flex: 0 0 38px; place-items: center; border-radius: 4px; color: white; font-weight: 700; background: #b51e1e; box-shadow: 0 5px 14px rgba(181, 30, 30, 0.18); }
.site-nav__name { font-size: 1rem; font-weight: 650; color: var(--text-main); }
.site-nav__links { display: flex; flex: 1; flex-direction: column; gap: 6px; }
.site-nav__link { display: flex; min-height: 46px; align-items: center; gap: 13px; padding: 0 14px; border-radius: 4px; color: var(--text-soft); font-size: 0.95rem; text-decoration: none; white-space: nowrap; transition: color 0.14s ease, background 0.14s ease, transform 0.14s ease; }
.site-nav__link .n-icon { flex: 0 0 auto; font-size: 21px; }
.site-nav__link:hover { color: #b51e1e; background: rgba(181, 30, 30, 0.07); transform: translateX(2px); }
.site-nav__link.router-link-active { color: #b51e1e; background: rgba(181, 30, 30, 0.1); }
.site-nav__footer { display: flex; justify-content: center; gap: 4px; padding-top: 12px; border-top: 1px solid var(--border-soft); }

@media (max-width: 768px) {
  .site-nav, .site-nav--open { position: fixed; inset: auto 10px 10px; z-index: 50; width: auto; height: 62px; padding: 7px; flex-direction: row; border: 1px solid var(--border-soft); border-radius: 6px; box-shadow: 0 8px 24px rgba(22, 22, 24, 0.14); }
  .site-nav__brand, .site-nav__footer { display: none; }
  .site-nav__links { flex-direction: row; justify-content: space-around; overflow-x: auto; }
  .site-nav__link { min-width: 44px; min-height: 46px; justify-content: center; padding: 0 11px; }
  .site-nav__link span { display: none; }
}
</style>
