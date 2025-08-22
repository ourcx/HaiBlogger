<template>
  <div class="fei-MD__main">
    <n-scrollbar style="height: 100vh">
      <div class="fei-MD__title">
        {{ title }}
      </div>
      <div class="fei-MD__title--subtitle">
        <div class="fei-MD__time">{{ time }}</div>
        <div class="fei-MD__time--separator">|</div>
        <div class="fei-MD__time--author">小海</div>
        <div class="fei-MD__time--separator">|</div>
        <div class="fei-MD__time--tag">生活日常</div>
      </div>
      <div class="fei-MD__body">
        <div class="fei-MD__list">
          <div class="fei-MD__item" v-for="item in posts" :key="item.id">
            <md-list :post="item" :loading="false" />
          </div>
        </div>
      </div>
      <div class="fei-MD__footer">
        <n-pagination v-model:page="page" :page-count="100" /></div
    ></n-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import MarkdownIt from "markdown-it";
import { NPagination, NScrollbar } from "naive-ui";
import MdList from "@/components/MD-list/MdLIst.vue";
import type { IndexMDProps } from "./type";
import { useDynamicStore } from "@/store";
import { extractFrontmatter } from "@/utils/extractFrontmatter";

const DynamicStore = useDynamicStore();
const props = withDefaults(defineProps<IndexMDProps>(), {
  title: "小海的笔记项目",
  time: new Date().toLocaleDateString(),
});

// 定义文章类型
interface BlogPost {
  id?: string;
  title: string;
  date?: string;
  excerpt?: string;
  content: string;
  htmlContent?: string;
  links?: string;
}

const page = ref(1);
const base = 5;
const posts = computed<BlogPost[]>(() => {
  return DynamicStore.data.slice((page.value - 1) * base, page.value * base);
});
</script>

<style scoped lang="scss">
@use "../../../style/index.scss" as *;

// Main container for the entire view
.fei-MD__main {
  display: flex;
  flex-direction: column;
  height: #{$xh-height}vh; // Assuming this is 100vh or similar
  width: #{$xh-location}vw;
  margin: 0 auto; // Center the container
  flex: 1;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
}

// Page title
.fei-MD__title {
  flex-shrink: 0; // Prevent the title from shrinking
  font-weight: bold;
  text-align: center;
  font-size: 40px;
  color: #{$primary-color};
}

.fei-MD__body {
  flex: 1; // Allows this element to grow and fill available space
  overflow-y: auto; // Crucial for making the list scrollable
  padding: 0 1rem; // Adds some horizontal space for the scrollbar
}

// The list itself
.fei-MD__list {
  display: flex;
  flex-direction: column;
  // Use 'gap' here to create space BETWEEN items
}

// Footer for pagination
.fei-MD__footer {
  flex-shrink: 0; // Prevent the footer from shrinking
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  margin-top: 1rem;
  border-top: 1px solid #e5e7eb;
}

.fei-MD__item {
  display: flex;
  flex-direction: column;
  height: auto;
}

.fei-MD__title--subtitle {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  font-size: 16px;
  color: #6b7280; // 中性灰色
  margin-top: 10px;
  gap: 10px; // 使用 gap 控制间距
}

@media (max-width: 1200px) {
  .fei-MD__list {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
}

@media (max-width: 992px) {
  .fei-MD__title {
    font-size: 2.2rem;
  }

  .fei-MD__list {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .fei-MD__main {
    padding-left: 20%;
    width: 80%;
  }

  .fei-MD__title {
    font-size: 1.8rem;
    padding-bottom: 10px;
    margin: 1rem 0;
  }

  .fei-MD__title::after {
    width: 60px;
    height: 2px;
  }

  .fei-MD__list {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .fei-MD__footer {
    padding: 20px 0;
  }
}

@media (max-width: 480px) {
  .fei-MD__main {
    padding-left: 10%;
    width: 85%;
  }

  .fei-MD__title {
    font-size: 1.6rem;
  }

  .fei-MD__item {
    margin: 0 -10px;
  }

  .fei-MD__footer {
    overflow-x: auto;
    padding: 15px 5px;
  }

  .fei-MD__footer .n-pagination {
    transform: scale(0.9);
  }
}
</style>
