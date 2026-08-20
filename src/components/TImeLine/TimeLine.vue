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
      <n-timeline-item type="info" title="本博客" content="使用这段时间所学去写" time="2025-07-19" />
      <n-timeline-item type="info" title="实习"  content="前端马喽"  time="2025-12-01"/>
      <!-- 现在 -->
      <n-timeline-item type="primary" title="现在"  content="葡萄成熟时" />
    </n-timeline>
  </div>
</template>

<script setup>
import { NTimeline, NTimelineItem } from "naive-ui";
// 如果需要逻辑可以在这里添加
</script>

<style scoped lang="scss">
.timeline-container {
  position: relative;
  padding: 22px 18px;
  border: 1px solid rgba(181, 30, 30, 0.16);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.72);
  box-shadow: 0 12px 32px rgba(80, 32, 32, 0.08);

  .timeline {
    min-height: 100%;
  }
}

.timeline-container::before {
  content: "成长记录";
  position: absolute;
  top: -10px;
  left: 18px;
  padding: 0 8px;
  color: #b51e1e;
  font-size: 12px;
  letter-spacing: 0.12em;
  background: #fff;
}
</style>
