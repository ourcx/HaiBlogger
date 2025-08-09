<template>
  <div class="xh-projects">
    <div class="xh-projects__main">
      <div class="xh-projects__main--title">项目</div>
      <div class="xh-title__mini">9个分类,10个项目</div>
      <div class="xh-projects__main--projects">
        <Divider>github</Divider>
        <div class="xh-projects-class__new">
          <links
            src="https://s2.loli.net/2025/06/29/wiHWDFjzmEVYCT3.jpg"
            name="1. 测试项目"
            description="测试项目描述"
          ></links>
          <links
            src="https://s2.loli.net/2025/06/29/wiHWDFjzmEVYCT3.jpg"
            name="1. 测试项目"
            description="测试项目描述"
          ></links>
          <links
            src="https://s2.loli.net/2025/06/29/wiHWDFjzmEVYCT3.jpg"
            name="1. 测试项目"
            description="测试项目描述"
          ></links>
          <links
            src="https://s2.loli.net/2025/06/29/wiHWDFjzmEVYCT3.jpg"
            name="1. 测试项目"
            description="测试项目描述"
          ></links>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Links from "@/components/Links/Links.vue";
import Divider from "@/components/Divider/Divider.vue";
</script>

<style scoped lang="scss">
@use "../../../style/index.scss" as *;

// 根据要求，此部分样式保持不变
.xh-projects {
  display: flex;
  flex-direction: column;
  height: #{$xh-height}vh;
  width: #{$xh-location}vw;
  margin: 0 auto;
  flex: 1;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
}

// 优化后的样式
.xh-projects__main {
  display: flex;
  flex-direction: column;
  align-items: center; // 水平居中所有子元素
  width: 100%;
  height: 100%;
  padding-top: 20px; // 在容器顶部增加内边距
  gap: 10px; // 使用 gap 设置子元素之间的间距
  box-sizing: border-box;

  &--title {
    font-size: 2rem;
    color: #333;
    font-weight: bold;
    font-family: #{$xh-family};
    // text-align: center; 是多余的，因为父元素已经设置了 align-items: center
  }

  &--projects {
    width: 100%;
    flex: 1; // 让此容器占据剩余的垂直空间
    overflow-y: auto; // 当内容溢出时，显示垂直滚动条
  }
}

.xh-title__mini {
  font-family: monospace;
  font-weight: 300;
  color: #717171;
}

.xh-projects-class__new {
  display: flex;
  flex-wrap: wrap; // 允许项目卡片换行
  justify-content: center; // 水平居中项目卡片
  gap: 40px; // 设置项目卡片之间的间距
  padding-top: 20px; // 与标题之间留出空间
  width: 100%;
}
</style>
