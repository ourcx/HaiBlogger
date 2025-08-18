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
  height: #{$xh-height}vh;
  width: #{$xh-width}vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  padding: 2% 20%;
}

.xh-info-container {
  flex-grow: 1;
  display: flex;
  gap: 8px;
  max-height: 25%;
}

@media (max-width: 768px) {
  .xh-home {
    flex-direction: column;
    padding: 0 15px;
    width: calc(100% - 70px);
    left: 70px;
    height:80vh !important
  }

  .xh-info-container {
    width: 100% !important;
    padding-right: 0 !important;
  }

}


/* 中等屏幕 (768px-992px) */
@media (min-width: 768px) and (max-width: 992px) {
  .xh-info-container {
    width: calc(100%) !important;
  }
}


</style>
