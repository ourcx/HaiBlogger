<template>
  <div class="fei-MD__main">
    <n-scrollbar style="height: 100vh">
      <div class="fei-MD__title">小海的笔记</div>
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
import { ref, onMounted } from "vue";
import MarkdownIt from "markdown-it";
import { NPagination,NScrollbar } from "naive-ui";
import MdList from "@/components/MD-list/MdLIst.vue";

// 定义文章类型
interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  htmlContent?: string;
}

// 1. 安全获取 Markdown 文件
const mdModules = import.meta.glob("/src/blog/**/*.md", {
  eager: true,
  query: "?raw", // 避免特殊字符问题
});
const page = ref(1);
const posts = ref<BlogPost[]>([]);

onMounted(() => {
  const mdParser = new MarkdownIt();

  try {
    posts.value = Object.entries(mdModules).map(([path, module]: any) => {
      // 安全提取文件名
      const fileName = decodeURIComponent(path.split("/").pop() || "");
      const id = fileName.replace(/\.md$/, "");

      // 获取原始内容
      const rawContent = module.default;

      // 提取 frontmatter
      const frontmatter = extractFrontmatter(rawContent);
      console.log(frontmatter);

      // 转换 Markdown 为 HTML
      const htmlContent = mdParser.render(rawContent.replace(/^---[\s\S]*?---/, ""));

      return {
        id,
        title: frontmatter.title || id,
        date: frontmatter.date || "未知日期",
        excerpt: frontmatter.excerpt || htmlContent.substring(0, 100) + "...",
        content: rawContent,
        htmlContent,
      };
    });
    console.log(posts.value);
  } catch (error) {
    console.error("处理 Markdown 文件时出错:", error);
  }
});

// 提取 frontmatter 的函数
function extractFrontmatter(content: string): Record<string, string> {
  const frontmatter: Record<string, string> = {};
  const match = content.match(/^---\s*([\s\S]*?)\s*---/);

  if (match && match[1]) {
    match[1].split("\n").forEach((line) => {
      const [key, ...valueParts] = line.split(":");
      if (key && valueParts.length > 0) {
        const value = valueParts.join(":").trim();
        frontmatter[key.trim()] = value;
      }
    });
  }

  return frontmatter;
}
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
}

// Page title
.fei-MD__title {
  flex-shrink: 0; // Prevent the title from shrinking
  margin-bottom: 2rem;
  font-weight: bold;
  text-align: center;
  font-size: 1.5rem;
}

// Container for the list of posts. This element will scroll.
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
  gap: 1.5rem;
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

.fei-MD__item{
  display: flex;
  flex-direction: column;
  height: 200px;
}
</style>
