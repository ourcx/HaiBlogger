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
    <n-config-provider :theme-overrides="theme">
      <Menu />
      <router-view />
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
      </ul>
    </div>
  </div>
</template>
