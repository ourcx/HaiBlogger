<script setup lang="ts">
import { NConfigProvider } from "naive-ui";
import { themeOverrides } from "@/style/naive-ui-theme";
import { themeOverridesDark } from "@/style/navie-dark-theme";
import Menu from "@/components/Menu/Menu.vue";
import { useDynamicStore } from './store/index';
import { computed } from "vue";

const dynamicStore = useDynamicStore();
dynamicStore.initData();

const theme = computed(() => {
  return dynamicStore.theme === 'dark' ? themeOverridesDark : themeOverrides;
})

</script>
<template>
  <div class="xh">
    <div class="xh-page-ornaments" aria-hidden="true">
      <span class="xh-page-ornament xh-page-ornament--one"></span>
      <span class="xh-page-ornament xh-page-ornament--two"></span>
      <span class="xh-page-ornament xh-page-ornament--three"></span>
    </div>
    <n-config-provider :theme-overrides="theme" class="xh-app-shell">
      <Menu />
      <main class="xh-app-content">
        <router-view v-slot="{ Component }">
          <transition name="router-transition">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </n-config-provider>
  </div>
</template>


<style scoped>
.xh-app-shell {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  width: 100%;
  min-height: 100dvh;
}

.xh-app-content {
  flex: 1 1 auto;
  min-width: 0;
}

.xh-page-ornaments {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.xh-page-ornament {
  position: absolute;
  display: block;
  border: 1px solid rgba(181, 30, 30, 0.22);
  opacity: 0.72;
  animation: page-ornament-float 9s ease-in-out infinite;
}

.xh-page-ornament--one {
  top: 14%;
  right: 5%;
  width: 16px;
  height: 16px;
  border-radius: 50%;
}

.xh-page-ornament--two {
  right: 16%;
  bottom: 12%;
  width: 28px;
  height: 28px;
  border-radius: 7px;
  transform: rotate(18deg);
  animation-delay: -3s;
}

.xh-page-ornament--three {
  bottom: 8%;
  left: 8%;
  width: 44px;
  height: 1px;
  background: rgba(181, 30, 30, 0.24);
  border: 0;
  animation-delay: -6s;
}

@keyframes page-ornament-float {
  0%,
  100% {
    translate: 0 0;
    opacity: 0.35;
  }
  50% {
    translate: 0 -12px;
    opacity: 0.82;
  }
}

.router-transition-enter-active,
.router-transition-leave-active {
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1),opacity 0.5s ease; /* 使用更自然的缓动函数 */
  position: absolute;
  width: 100%;
  backface-visibility: hidden; /* 隐藏背面，防止翻转时内容倒置 */
}

.router-transition-enter-from {
  opacity: 0;
  transform: rotateY(90deg) translateX(50%); /* 从侧面翻转进入 */
}

.router-transition-leave-to {
  opacity: 0;
  transform: rotateY(-90deg) translateX(-50%); /* 翻转离开 */
}

@media (max-width: 768px) {
  .xh-app-shell {
    display: block;
  }
}
</style>
