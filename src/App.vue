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
    <div class="line-background"></div> <n-config-provider :theme-overrides="theme">
      <Menu />
      <router-view v-slot="{ Component }">
        <transition name="router-transition">
          <component :is="Component" />
        </transition>
      </router-view>
    </n-config-provider>
    <div class="area">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
         <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>


<style scoped>
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
</style>