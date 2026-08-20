<template>
  <div class="fei-MD__main">
    <n-scrollbar class="fei-MD__scroll">
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
          <div
            class="fei-MD__item"
            v-for="item in posts"
            :key="item.id"
            v-if="posts.length > 0"
          >
            <md-list :post="item" :loading="false" />
          </div>
          <div v-else class="fei-MD__empty">
            <n-result status="info" title="这一页还没有文章" :description="emptyDescription">
              <template #footer>
                <n-button @click="page = 1">回到第一页</n-button>
              </template>
            </n-result>
          </div>
        </div>
      </div>
      <div class="fei-MD__footer">
        <n-pagination
          v-if="pageCount > 1"
          v-model:page="page"
          :page-count="pageCount"
          :page-slot="5"
        />
        <span v-else class="fei-MD__footer-note">目前共 {{ DynamicStore.data.length }} 篇文章</span>
      </div
    ></n-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { NPagination, NScrollbar, NResult, NButton } from "naive-ui";
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
const pageCount = computed(() => Math.max(1, Math.ceil(DynamicStore.data.length / base)));
const posts = computed<BlogPost[]>(() => {
  return DynamicStore.data.slice((page.value - 1) * base, page.value * base);
});
const emptyDescription = computed(() => {
  return DynamicStore.data.length
    ? `当前只有 ${pageCount.value} 页文章，换一页看看吧。`
    : "文章正在整理中，晚点再来看看。";
});
</script>

<style scoped lang="scss">
@use "../../../style/index.scss" as *;

// Main container for the entire view
.fei-MD__main {
  display: flex;
  flex-direction: column;
  width: min(100%, 1100px);
  min-height: calc(100dvh - 76px);
  margin: 0 auto;
  padding: clamp(16px, 3vw, 36px);
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

.fei-MD__scroll {
  max-height: calc(100dvh - 76px);
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

.fei-MD__footer-note {
  color: #909399;
  font-size: 0.85rem;
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
    min-height: auto;
    padding: 16px 0;
  }

  .fei-MD__title {
    font-size: 1.8rem;
    padding-bottom: 10px;
    margin: 1rem 0;
  }

  .fei-MD__scroll {
    max-height: none;
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
    padding: 12px 0;
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
