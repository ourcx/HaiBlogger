<template>
  <article class="fei-markdown-body" v-html="renderMarkdown"></article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import MarkdownIt from 'markdown-it'
import type { MarkdownProps } from './types'

const props = withDefaults(defineProps<MarkdownProps>(), { content: '' })
const md = new MarkdownIt({ html: true, linkify: true, typographer: true })
const renderMarkdown = computed(() => md.render(props.content || ''))
</script>

<style scoped>
.fei-markdown-body { color: var(--text-main); font-family: var(--fei-font-family); font-size: 1rem; line-height: 1.85; overflow-wrap: anywhere; }
.fei-markdown-body :deep(h1), .fei-markdown-body :deep(h2), .fei-markdown-body :deep(h3), .fei-markdown-body :deep(h4) { margin: 1.8em 0 0.75em; color: var(--text-main); line-height: 1.3; }
.fei-markdown-body :deep(h1) { font-size: 2rem; }
.fei-markdown-body :deep(h2) { padding-bottom: 0.35em; border-bottom: 1px solid var(--border-soft); font-size: 1.55rem; }
.fei-markdown-body :deep(h3) { font-size: 1.25rem; }
.fei-markdown-body :deep(p) { margin: 0 0 1.1em; }
.fei-markdown-body :deep(a) { color: #b51e1e; text-underline-offset: 3px; }
.fei-markdown-body :deep(ul), .fei-markdown-body :deep(ol) { margin: 0 0 1.2em; padding-left: 1.6em; }
.fei-markdown-body :deep(li) { margin: 0.35em 0; }
.fei-markdown-body :deep(blockquote) { margin: 1.3em 0; padding: 0.9em 1.1em; border-left: 3px solid #b51e1e; border-radius: 0 4px 4px 0; color: var(--text-soft); background: var(--surface-soft); }
.fei-markdown-body :deep(code) { padding: 0.18em 0.38em; border-radius: 5px; color: #9c3c3c; background: rgba(181, 30, 30, 0.08); font-family: 'SFMono-Regular', Consolas, monospace; }
.fei-markdown-body :deep(pre) { margin: 1.2em 0; padding: 1.1em; overflow-x: auto; border: 1px solid var(--border-soft); border-radius: 5px; background: #171318; }
.fei-markdown-body :deep(pre code) { padding: 0; color: #f2e8eb; background: transparent; }
.fei-markdown-body :deep(img) { display: block; max-width: 100%; height: auto; margin: 1.4em auto; border-radius: 4px; box-shadow: var(--shadow-soft); }
.fei-markdown-body :deep(table) { display: block; width: 100%; overflow-x: auto; border-collapse: collapse; }
.fei-markdown-body :deep(th), .fei-markdown-body :deep(td) { padding: 0.65em; border: 1px solid var(--border-soft); }
</style>
