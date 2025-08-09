<template>
  <n-card
    :title="props.title"
    embedded
    :bordered="false"
    v-html="props.content"
    class="markdown-renderer"
  >
  </n-card>
</template>

<script setup lang="ts">
import { NCard } from "naive-ui";
const props = defineProps({
  title: {
    type: String,
    default: "为什么写博客",
  },
  content: {
    type: String,
    default: "",
  },
});
</script>
<style scoped lang="scss">
.n-card {
  max-width: 300px;
}
.markdown-renderer :deep(h1) {
  font-size: 1.8rem;
  font-weight: 600;
  margin: 1.5rem 0 1rem;
}

.markdown-renderer :deep(h2) {
  font-size: 1.6rem;
  font-weight: 600;
  margin: 1.3rem 0 0.9rem;
}

.markdown-renderer :deep(h3) {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 1.1rem 0 0.8rem;
}

.markdown-renderer :deep(h4) {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1rem 0 0.7rem;
}

.markdown-renderer :deep(h5) {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0.9rem 0 0.6rem;
}

.markdown-renderer :deep(h6) {
  font-size: 1rem;
  font-weight: 600;
  margin: 0.8rem 0 0.5rem;
}

/* 其他元素样式 */
.markdown-renderer :deep(p) {
  line-height: 1.6;
  margin: 0.8rem 0;
  list-style: none;
}

.markdown-renderer :deep(ul),
.markdown-renderer :deep(ol) {
  padding-left: 1.5rem;
  margin: 0.8rem 0;
  list-style: none;
}

.markdown-renderer :deep(li) {
  margin: 0.4rem 0;
  list-style: none;
}
</style>
