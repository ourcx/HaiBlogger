<template>
  <div class="blog-post-item">
    <div class="post-content">
      <div class="markdown-body" v-html="post.excerpt"></div>
    </div>
    <div class="post-meta">
      <span v-if="post.date">{{ post.date }}</span>

      <template v-if="category">
        <span class="separator">•</span>
        <span>{{ category }}</span>
      </template>

      <template v-if="tags && tags.length > 0">
        <span class="separator">•</span>
        <span class="meta-tags">
          <template v-for="(tag, index) in tags" :key="tag">
            <a href="#" class="tag-link">{{ tag }}</a>
            <span v-if="index < tags.length - 1" class="tag-separator"> / </span>
          </template>
        </span>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BlogPost } from "./type";

interface Props {
  post: BlogPost;
  category?: string;
  tags?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  category: "",
  tags: () => [],
});
</script>

<style scoped lang="scss">
@use "../../style/index.scss" as *;

.blog-post-item {
  height: 200px;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.blog-post-item:hover {
  background-color: #{rgb(244, 200, 200)};
}

.post-content {
  flex: 1;
  overflow: hidden;
  color: #4b5563;
  line-height: 1.8;
  padding-bottom: 1rem;
}

.post-content :deep(img) {
  height: 1.1em;
  width: 1.1em;
  margin: 0 0.05em 0 0.1em;
  vertical-align: -0.2em;
}

.post-meta {
  font-size: 0.9rem;
  color: #6b7280;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.4em;
}

.separator {
  margin: 0 0.4em;
  color: #d1d5db;
  font-weight: 300;
}

.meta-tags {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6em;
}

.tag-separator {
  display: none;
}

.markdown-body {
  padding: 0;
}

.markdown-body ::v-deep h1 {
  font-size: 1rem !important;
  font-weight: 600;
  margin: 1.5rem 0 1rem;
  line-height: 1.3;
}

.markdown-body ::v-deep h2 {
  font-size: 1.6rem;
  margin: 1.3rem 0 0.8rem;
}

.markdown-body ::v-deep h1 {
  transition: font-size 0.3s ease;
}
.markdown-body :deep(p) {
  margin: 0.8rem 0;
  line-height: 1.6;
}

.markdown-body :deep(ul),
.markdown-body :deep(ol) {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}
</style>