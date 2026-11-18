<script setup lang="ts">
import { NConfigProvider } from "naive-ui";
import { themeOverrides } from "@/style/naive-ui-theme";
import { themeOverridesDark } from "@/style/navie-dark-theme";
import Menu from "@/components/Menu/Menu.vue";
import { useDynamicStore } from './store/index';
import { computed, watch } from "vue";
import { useRoute } from "vue-router";
import { api } from '@/services/api';

const dynamicStore = useDynamicStore();
dynamicStore.initData();
document.documentElement.dataset.theme = dynamicStore.theme;
const route = useRoute();
watch(
  () => route.fullPath,
  (path) => api.visit(path).catch(() => undefined),
  { immediate: true }
);

const theme = computed(() => {
  return dynamicStore.theme === 'dark' ? themeOverridesDark : themeOverrides;
})

</script>
<template>
  <div class="xh">
    <n-config-provider :theme-overrides="theme" class="xh-app-shell">
      <Menu />
      <main class="xh-app-content">
        <router-view v-slot="{ Component }">
          <transition name="router-transition" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </n-config-provider>
    <div class="area" aria-hidden="true">
      <ul class="circles"><li v-for="item in 15" :key="item"></li></ul>
    </div>
  </div>
</template>


<style scoped>
.xh-app-shell {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  width: 100%;
  min-height: 100%;
}

.xh-app-content {
  flex: 1 1 auto;
  min-width: 0;
}

.router-transition-enter-active,
.router-transition-leave-active {
  transition: transform 0.18s ease, opacity 0.14s ease;
}

.router-transition-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.router-transition-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

@media (max-width: 768px) {
  .xh-app-shell {
    display: block;
  }

  .xh-app-content {
    padding-bottom: 70px;
  }
}
</style>
