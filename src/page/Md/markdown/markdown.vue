<template>
  <div class="xh-markdown-container">
    <div class="xh-markdown-wrapper">
      <div class="xh-markdown-header">
        <div class="xh-markdown-title">
          {{ title }}
          <div class="xh-markdown-date">{{ currentDate }}</div>
        </div>
      </div>
      <n-scrollbar style="height: 100%; text-align: left" trigger="hover">
        <div class="xh-markdown-body">
          <Fei-Markdown
            src="../../../../blog/第三章.md"
            :theme="theme"
            :height="mdHeight"
            :width="mdWidth"
          ></Fei-Markdown>
        </div>
      </n-scrollbar>
      <div class="xh-markdown-footer">
        <n-button quaternary>上一张</n-button>
        <n-button quaternary type="primary">下一张</n-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { NScrollbar, NButton } from "naive-ui";

const theme = ref<"github-dark-dimmed" | "dark">("github-dark-dimmed");
const mdHeight = ref("auto"); 
const mdWidth = ref("100%");

const currentDate = ref(
  new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
);

const title = computed(() => {
  const fileName = "../../../blog/第三章.md";
  return fileName.split("/").pop()?.replace(".md", "") || "Markdown Document";
});
</script>

<style scoped lang="scss">
@use "../../../style/index.scss" as *;

.xh-markdown-container {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: #{$xh-height}vh;
  background-color: var(--background-main);
  position: fixed;
}

.xh-markdown-wrapper {
  width: 100%;
  max-width: 900px;
  height: calc(100vh - 4rem);
  background: var(--background-soft);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  overflow: hidden; 
}

.xh-markdown-header {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  flex-shrink: 0;
}

.xh-markdown-title {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.2;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.xh-markdown-date {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-soft);
}

.n-scrollbar {
  flex-grow: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
}

.xh-markdown-body {
  flex-grow: 1;
}

.xh-markdown-footer {
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;
  margin-top: 1.5rem;
  border-top: 1px solid var(--border-color);
  flex-shrink: 0;
}

:deep(.markdown-body) {
  padding-right: 1rem; 
  color: var(--text-primary);
  h1,
  h2,
  h3 {
    color: var(--primary-color);
    border-bottom: none;
  }
}

@media (max-width: 768px) {
  .xh-markdown-container {
    padding: 1rem;
    width: 85%;
    left: 15%;
  }

  .xh-markdown-wrapper {
    height: calc(100vh - 2rem);
    padding: 1.5rem;
  }

  .xh-markdown-title {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .xh-markdown-date {
    align-self: flex-start;
  }
}

@media (max-width: 480px) {
  .xh-markdown-container {
    padding: 0;
  }

  .xh-markdown-wrapper {
    height: 100vh;
    border-radius: 0;
    padding: 1rem;
  }

  .xh-markdown-title {
    font-size: 1.8rem;
  }

  .xh-markdown-footer {
    padding-top: 1rem;
    margin-top: 1rem;
  }
}
</style>
