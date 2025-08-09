<template>
  <a class="fei-link" target="_blank" rel="nofollow noopener" :href="href">
    <span class="fei-link__image-wrapper">
      <span class="fei-link__image-aspect"></span>
      <Image
        :src="src"
        mode="aspectFill"
        shape="circle"
        :screen="false"
        width="50px"
        height="50px"
      />
    </span>
    <span class="fei-link__text">
      <span class="fei-link__title">{{ name }}</span>
      <span class="fei-link__description" v-if="description">{{ description }}</span>
      <span class="fei-link__separator" v-if="description">-</span>
    </span>
  </a>
</template>

<script setup lang="ts">
import type { LinksProps } from "./types";
import Image from "@/components/Image/Image.vue";
defineOptions({
  name: "FeiLinks",
});

const props = withDefaults(defineProps<LinksProps>(), {
  name: "空白",
  description: "无描述",
  src: "https://picsum.photos/200/300",
});
</script>
<style scoped>
/* 友链卡片容器 */
.fei-link {
  display: flex; /* 使用 flex 布局 */
  align-items: center; /* 垂直居中对齐 */
  padding: 16px;
  text-decoration: none; /* 移除默认的下划线 */
  background-color: var(--fei-bg-color-overlay); /* 卡片背景色 */
}

.fei-link:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}


.fei-link__image-wrapper {
  margin-right: 16px;
  flex-shrink: 0;
  transition: transform 0.6s var(--fei-transition-timing-function);
}

.fei-link__image-aspect {
  display: none;
}

/* 文字内容区域 */
.fei-link__text {
  display: flex;
  flex-direction: column; /* 标题和描述垂直排列 */
  justify-content: center; /* 垂直方向居中 */
  overflow: hidden; /* 防止内容溢出 */
}

/* 网站标题 */
.fei-link__title {
  font-size: var(--fei-font-size-medium); /* 字体稍大 */
  font-weight: var(--fei-font-weight-primary);
  color: var(--fei-text-color-primary);
  white-space: nowrap; /* 防止标题换行 */
  overflow: hidden; /* 溢出部分隐藏 */
  text-overflow: ellipsis; /* 显示省略号 */
  transition: color var(--fei-transition-duration-fast);
}

/* 鼠标悬停时标题变色 */
.fei-link:hover .fei-link__title {
  color: var(--fei-color-primary);
}

/* 网站描述 */
.fei-link__description {
  font-size: var(--fei-font-size-small);
  color: var(--fei-text-color-secondary); /* 使用次要文字颜色 */
  margin-top: 4px; /* 与标题的间距 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 分隔符 - 在此设计中，标题和描述垂直排列，不再需要横向分隔符 */
.fei-link__separator {
  display: none;
}
</style>
