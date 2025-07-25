<template>
  <div class="timeline-container">
    <n-timeline item-placement="right" class="timeline" >
      <n-timeline-item content="初次接触前端" time="2024-10-09"/>
      <n-timeline-item
        type="success"
        title="纯三件套"
        content="自己的第一个博客"
        time="2024-12-03"
      />
      <n-timeline-item type="error" content="学习ing"/>
      <n-timeline-item
        type="warning"
        title="一个文档"
        content="使用vitepress弄了一个博客"
        time="2025-04-03"
      />
      <n-timeline-item type="info" title="本博客" content="使用这段时间所学去写" time="2025-07-09" />
    </n-timeline>
  </div>
</template>

<script setup>
import { NTimeline, NTimelineItem } from "naive-ui";
// 如果需要逻辑可以在这里添加
</script>

<style scoped lang="scss">
.timeline-container {
  overflow-y: auto;
  padding: 20px;

  .timeline {
    min-height: 100%;
  }
}
</style>
