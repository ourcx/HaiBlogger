<template>
  <Fei-Container>
 <n-result
      status="404"
      title="404 资源不存在"
      description="生命不是轨道是旷野，但是我的博客是404"
      size="huge"
    >
      <template #icon>
        <n-image
          class="custom-image"
          preview-disabled
          width="300"
          src="https://s2.loli.net/2025/02/02/ELbK6urJqYvgBPj.jpg"
        />
      </template>
      <template #footer>
        <n-button type="primary" size="large" round @click="goHome">
          返回首页
        </n-button>
      </template>
    </n-result>
  </Fei-Container>
</template>

<script setup lang="ts">
import { NResult, NButton,NImage } from "naive-ui";
import { useRouter } from "vue-router";

const router = useRouter();

const goHome = () => {
  router.push("/");
};
</script>

<style lang="scss" scoped>
.custom-image {
  max-width: 500px; 
  width: 90%; 
  height: auto; 
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.not-found-container :deep(.n-result-header__title) {
  margin-top: 2rem; 
}

.not-found-container :deep(.n-result-header__description) {
  max-width: 450px; 
  margin: 1rem auto 0; 
}

.not-found-container :deep(.n-result-footer) {
  margin-top: 2rem;
}
</style>
