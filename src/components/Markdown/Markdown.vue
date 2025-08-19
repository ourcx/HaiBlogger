<template>
  <div
    class="fei-markdown"
    :style="
      `${props.width ? `width:${props.width}px;` : ''}` +
      `${props.height ? `height:${props.height}px;` : ''}`
    "
  >
    <div v-if="renderMarkdown" class="fei-markdown-body" v-html="renderMarkdown"></div>
    <div v-else>
      <p>正在渲染...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MarkdownProps } from "./types";
import { computed, ref, watchEffect, onMounted } from "vue";
import MarkdownIt from "markdown-it";
import { useDynamicStore } from "@/store";

const dynamicStore = useDynamicStore();

const props = withDefaults(defineProps<MarkdownProps>(), {
  theme: "github-dark-dimmed",
  src: "",
  content: "",
  height: "auto",
  width: "auto",
});

const mdContent = ref("");
const renderMarkdown = ref("");
const error = ref(null);

onMounted(async () => {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight: (code, lang) => {
      return code;
    },
  });

  watchEffect(async () => {
    console.log("props.src", props.src);
    if (props.src) {
      try {
        mdContent.value = dynamicStore.data.filter((item) => item.title === props.src)[0].content;
        renderMarkdown.value = md.render(mdContent.value);
        error.value = null;
      } catch (e) {
        error.value = e as null;
        const err = `# Error加载失败\n\n**错误**${error.value}`;
        renderMarkdown.value = md.render(err);
        console.error(e);
      }
    } else if (props.content) {
      try {
        renderMarkdown.value = md.render(props.content);
        error.value = null;
      } catch (e) {
        error.value = e as null;
        const err = `# Error加载失败\n\n**错误**${error.value}`;
        renderMarkdown.value = md.render(err);
        console.error(e);
      }
    }
  });
});

</script>

<style scoped>
/*
 * 使用 :deep() 伪类来穿透 CSS 作用域，
 * 确保样式能成功应用到 v-html 动态渲染的 Markdown 内容上。
 */
.fei-markdown-body{
  padding: 0px 20px;
  height: 100%;
}



.fei-markdown-body :deep(h1),
.fei-markdown-body :deep(h2),
.fei-markdown-body :deep(h3),
.fei-markdown-body :deep(h4),
.fei-markdown-body :deep(h5),
.fei-markdown-body :deep(h6) {
  color: var(--fei-text-color-primary);
  font-weight: var(--fei-font-weight-primary);
  margin-top: 24px;
  margin-bottom: 16px;
  line-height: 1.4;
}

.fei-markdown-body :deep(h1) {
  font-size: 2em; /* ~28px */
  padding-bottom: 0.3em;
  border-bottom: var(--fei-border-width) var(--fei-border-style) var(--fei-border-color-lighter);
}

.fei-markdown-body :deep(h2) {
  font-size: 1.75em; /* ~24.5px */
  padding-bottom: 0.3em;
  border-bottom: var(--fei-border-width) var(--fei-border-style) var(--fei-border-color-lighter);
}

.fei-markdown-body :deep(h3) {
  font-size: 1.5em; /* ~21px */
}

.fei-markdown-body :deep(h4) {
  font-size: 1.25em; /* ~17.5px */
}

.fei-markdown-body :deep(h5) {
  font-size: 1em; /* ~14px */
}

.fei-markdown-body :deep(h6) {
  font-size: 0.9em; /* ~12.6px */
  color: var(--fei-text-color-secondary);
}

.fei-markdown-body :deep(p) {
  margin-bottom: 16px;
}

.fei-markdown-body :deep(a) {
  color: var(--fei-color-primary);
  text-decoration: none;
  transition: color var(--fei-transition-duration-fast) var(--fei-transition-timing-function);
}

.fei-markdown-body :deep(a:hover) {
  color: var(--fei-color-primary-light-3);
  text-decoration: underline;
}

.fei-markdown-body :deep(ul),
.fei-markdown-body :deep(ol) {
  padding-left: 2em;
  margin-bottom: 16px;
}

.fei-markdown-body :deep(li) {
  margin-bottom: 8px;
}

.fei-markdown-body :deep(li > p) {
  margin-bottom: 8px;
}

.fei-markdown-body :deep(blockquote) {
  margin: 0 0 16px 0;
  padding: 10px 16px;
  font-size: var(--fei-font-size-base);
  color: var(--fei-text-color-secondary);
  background-color: var(--fei-fill-color-light);
  border-left: 4px solid var(--fei-border-color-light);
  border-radius: var(--fei-border-radius-base);
}

.fei-markdown-body :deep(blockquote p) {
  margin-bottom: 0;
}

/* 内联代码 */
.fei-markdown-body :deep(code) {
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  background-color: var(--fei-fill-color);
  color: var(--fei-color-primary-dark-2);
  padding: 0.2em 0.4em;
  margin: 0 2px;
  font-size: 90%;
  border-radius: var(--fei-border-radius-small);
}

/* 代码块 */
.fei-markdown-body :deep(pre) {
  background-color: var(--fei-fill-color-light);
  border: var(--fei-border-width) var(--fei-border-style) var(--fei-border-color-light);
  border-radius: var(--fei-border-radius-base);
  padding: 16px;
  overflow: auto;
  margin-bottom: 16px;
  line-height: 1.45;
}

.fei-markdown-body :deep(pre code) {
  padding: 0;
  margin: 0;
  font-size: 100%;
  color: inherit;
  background-color: transparent;
  border-radius: 0;
}

.fei-markdown-body :deep(table) {
  width: 100%;
  margin-bottom: 16px;
  border-collapse: collapse;
  border-spacing: 0;
  display: block;
  overflow: auto;
}

.fei-markdown-body :deep(th),
.fei-markdown-body :deep(td) {
  padding: 10px 14px;
  border: var(--fei-border);
}

.fei-markdown-body :deep(th) {
  font-weight: var(--fei-font-weight-primary);
  background-color: var(--fei-fill-color-lighter);
  color: var(--fei-text-color-primary);
}

.fei-markdown-body :deep(tr:nth-of-type(even)) {
  background-color: var(--fei-fill-color-light);
}

.fei-markdown-body :deep(hr) {
  height: var(--fei-border-width);
  border: 0;
  background-color: var(--fei-border-color-lighter);
  margin: 24px 0;
}

.fei-markdown-body :deep(img) {
  max-width: 50%;
  /* 居中 */
  height: auto;
  border-radius: var(--fei-border-radius-base);
}

.fei-markdown-body :deep(strong) {
  font-weight: 600; /* Bolder than primary weight */
}

.fei-markdown-body :deep(em) {
  font-style: italic;
}

/*
  由于 :deep() 已经应用在每个选择器上，
  我们为 .fei-markdown-body 本身设置基础样式
*/
.fei-markdown-body {
  font-family: var(--fei-font-family);
  font-size: var(--fei-font-size-base);
  color: var(--fei-text-color-regular);
  line-height: 1.7;
  word-wrap: break-word;
}
</style>