<template>
  <div class="timeline-container">
    <h1>文章发布记录</h1>
    <div class="timeline-title">文章都在掘金上面</div>
    <n-scrollbar class="timeline-scroll">
      <div class="timeline">
        <div
          v-for="(item, index) in articles"
          :key="item.date"
          :class="['timeline-item', index % 2 === 0 ? 'left' : 'right']"
        >
          <n-card class="timeline-content">
            <h2>{{ item.title }}</h2>
            <p class="timeline-date">{{ item.date }}</p>
            <p>{{ item.description }}</p>
          </n-card>
        </div>
      </div>
    </n-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { NScrollbar } from "naive-ui";
import { NCard } from "naive-ui";

const articles = [
  {
    title: "uniapp在微信小程序中实现SSE进行通信",
    date: "2025年8月29日",
    description:
      "最近帮忙做一个项目的前端，遇到了一种通信方式就是SSE，这种也算是我的薄弱点，以前...",
  },
  {
    title: "我的组件库设计思想",
    date: "2025年8月15日",
    description:
      "设计思想 分层 rc-xxx, 提供基础组件, unstyled component, 只具备功能交互而不具备U...",
  },
  {
    title: "自己实现一个聊天模块",
    date: "2025年6月7日",
    description:
      "大致的实现效果 群聊和私聊 联系人 这个是我独立写完的一个模块，以前并没有怎么了解...",
  },
  {
    title: "uniapp的双token",
    date: "2025年9月25日",
    description:
      "在小程序实现双token增强安全性和优化用户的体验",
  },
];
</script>

<style lang="scss" scoped>
$primary-color: #b51e1e;
$secondary-color: #7b2a2a;
$background-color: #fcf6f6;
$border-color: #efdada;
$text-color: #3d3434;
$heading-color: #741616;

.timeline-container {
  font-family: "Helvetica Neue", Arial, sans-serif;
  width: min(100%, 900px);
  margin: 0 auto;
  padding: clamp(16px, 3vw, 36px);
  color: $text-color;

  h1 {
    text-align: center;
    font-size: 2.5rem;
    color: $heading-color;
  }
}

.timeline-scroll {
  max-height: calc(100dvh - 190px);
}

.timeline {
  position: relative;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    width: 4px;
    background-color: $primary-color;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -2px;
    border-radius: 2px;
  }
}

.timeline-item {
  padding: 10px 40px;
  position: relative;
  width: 50%;

  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: white;
    border: 4px solid $primary-color;
    top: 20px;
    border-radius: 50%;
    z-index: 1;
  }
}

.left {
  left: 0;
  padding-right: 70px;

  &::after {
    right: -12px;
  }
}

.right {
  left: 50%;
  padding-left: 70px;

  &::after {
    left: -12px;
  }
}

.timeline-content {
  padding: 20px 30px;
  background-color: $background-color;
  position: relative;
  border-radius: 8px;
  border: 1px solid $border-color;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: visible;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }

  h2 {
    margin-top: 0;
    color: $primary-color;
    font-size: 1.5rem;
  }

  .timeline-date {
    font-weight: bold;
    color: $secondary-color;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 0;
    line-height: 1.6;
  }

  &::before {
    content: "";
    position: absolute;
    top: 22px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
  }
}

.left .timeline-content::before {
  right: -20px;
  border-left-color: $border-color;
}

.right .timeline-content::before {
  left: -20px;
  border-right-color: $border-color;
}

@media screen and (max-width: 768px) {
  .timeline-container {
    padding: 16px 0;
  }

  .timeline-scroll {
    max-height: none;
  }

  .timeline::after {
    left: 31px;
  }

  .timeline-item {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  .left,
  .right {
    left: 0;
  }

  .left::after,
  .right::after {
    left: 21px;
  }

  .left .timeline-content::before,
  .right .timeline-content::before {
    left: -20px;
    border-right-color: $border-color;
    border-left-color: transparent;
  }
}

.timeline-title {
  text-align: center;
  font-size: 0.7rem;
  color: $secondary-color;
  margin-bottom: 10px;
  margin-top: 10px;
}
</style>
