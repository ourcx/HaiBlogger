<template>
  <div class="xh-home">
    <div class="xh-info-container">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
@use "../../style/index.scss" as *;
.xh-home {
  width: min(100%, 1200px);
  min-height: calc(100dvh - 76px);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: clamp(16px, 3vw, 36px);
}

.xh-info-container {
  width: 100%;
  min-width: 0;
}

@media (max-width: 768px) {
  .xh-home {
    min-height: auto;
    padding: 16px 0;
  }
}


</style>
