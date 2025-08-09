<script setup lang="ts">
import { NConfigProvider } from "naive-ui";
import { themeOverrides } from "@/style/naive-ui-theme";
import Menu from "@/components/Menu/Menu.vue";
import { useDynamicStore } from './store/index';

const dynamicStore = useDynamicStore();
dynamicStore.initData();
</script>

<template>
  <div class="xh">
    <n-config-provider :theme-overrides="themeOverrides">
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
