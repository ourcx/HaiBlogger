<template>
  <div class="blog-post-item">
    <h2 class="post-title">
      <a href="#" class="title-link">{{ post.title }}</a>
    </h2>
    <p class="post-excerpt" v-html="post.excerpt"></p>
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
// --- 类型定义 ---
import { BlogPost } from "./type";

// 组件的 Props 接口
interface Props {
  post: BlogPost;
  category?: string; // 分类是可选的独立 prop
  tags?: string[]; // 标签是可选的独立 prop
}

// --- 组件 Props ---
const props = withDefaults(defineProps<Props>(), {
  // post 是必须的，category和tags有默认值
  category: "",
  tags: () => [],
});
</script>

<style scoped lang="scss">
@use "../../style/index.scss" as *;

// --- 整体卡片化设计 ---
.blog-post-item {
  border-radius: 12px; // 圆角设计，更显柔和与现代
  transition: all 0.3s ease-in-out; // 平滑过渡所有效果
  background-color: #fff; // 默认白色背景
  width: 100%;
  height: 50%;
  padding: 20px;
}

.blog-post-item:hover {
  background-color: #{rgb(244, 200, 200)}; // 悬浮时一个非常淡的背景色
  //she
}


// --- 标题与交互下划线 ---
.post-title {
  margin: 0 0 1rem 0;
  font-size: 1.75rem; // 稍微增大标题字号，增强视觉层级
  font-weight: 700;
  color: #1f2937; // 使用更深邃的炭灰色
  line-height: 1.3;
}

.title-link {
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  // 添加渐变色下划线的效果
  background-image: linear-gradient(to right, #4f46e5, #4f46e5);
  background-repeat: no-repeat;
  background-size: 0% 2px;
  background-position: 0 100%;
}

.title-link:hover {
  color: #4f46e5; // 悬停时变为主题色
  background-size: 100% 2px; // 悬浮时下划线展开
}


// --- 摘要与元数据区域 ---
.post-excerpt {
  margin: 0 0 1.5rem 0;
  color: #4b5563; // 适度加深，提高可读性
  line-height: 1.8;
}

.post-excerpt :deep(img) {
  height: 1.1em;
  width: 1.1em;
  margin: 0 0.05em 0 0.1em;
  vertical-align: -0.2em;
}

.post-meta {
  font-size: 0.9rem;
  color: #6b7280; // 元信息使用中性灰色，避免喧宾夺主
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5em; // 使用 gap 属性优雅地控制各部分间距
}

.separator {
  margin: 0 0.4em;
  color: #d1d5db; // 分隔符颜色更浅
  font-weight: 300;
}


// --- 标签胶囊化设计 ---
.meta-tags {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6em; // 使用 gap 控制标签之间的间距
}

.tag-link {
  display: inline-block;
  padding: 4px 14px;
  border-radius: 9999px; // 超大圆角形成胶囊形状
  font-size: 0.8rem;
  font-weight: 500;
  text-decoration: none;
  background-color: rgba(#4f46e5, 0.08); // 使用主题色的淡色填充
  color: #4338ca; // 使用更深一点的主题色作为文字颜色
  transition: all 0.2s ease;
}

.tag-link:hover {
  background-color: rgba(#4f46e5, 0.15); // 悬浮时加深背景
  color: #3730a3;
  transform: scale(1.05); // 轻微放大
  text-decoration: none; // 确保悬浮时不会出现默认下划线
}

// 隐藏模板中原有的标签文本分隔符，因为已改用 gap
.tag-separator {
  display: none;
}
</style>
