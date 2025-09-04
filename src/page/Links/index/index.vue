<template>
  <div class="xh-links">
    <div class="xh-links__main">
      <div class="xh-links__main--title">友邻</div>
      <div class="xh-links__main--other">
        欢迎交换友链呀 ~<br>
        以下是我的友链列表，列表随机排序，信息如果有变动，可以联系我进行更改。
      </div>
      <div class="xh-links__main--friends">
        <Links v-for="value in friendLinks" :key="value.name" :src="value.src" :name="value.name" :href="value.href" :description="value.description" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Links from "@/components/Links/Links.vue";
import type { LinksProps } from "@/components/Links/types";

// 模拟API获取数据
const friendLinks = ref<LinksProps[]>([
  // {
  //   src: "https://picsum.photos/100?random=1",
  //   name: "张三的博客",
  //   href: "https://zhangsan.com",
  //   description: "前端技术分享与生活感悟"
  // },
  // {
  //   src: "https://picsum.photos/100?random=2",
  //   name: "李四的技术站",
  //   href: "https://lisi.tech",
  //   description: "专注于Vue和React前沿技术"
  // },
  // {
  //   src: "https://picsum.photos/100?random=3",
  //   name: "王五的笔记",
  //   href: "https://wangwu.dev",
  //   description: "算法与数据结构学习笔记"
  // },
  // {
  //   src: "https://picsum.photos/100?random=4",
  //   name: "前端小智",
  //   href: "https://qianduanxiao.com",
  //   description: "分享前端开发技巧和教程"
  // }
]);

// 随机排序友链
friendLinks.value = [...friendLinks.value].sort(() => Math.random() - 0.5);
</script>



<style scoped lang="scss">
@use "../../../style/index.scss" as *;

// 根据要求，此部分样式保持不变
.xh-links {
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
.xh-links__main {
  display: flex;
  flex-direction: column;
  align-items: center; // 水平居中所有子元素
  width: 100%;
  height: 100%;
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


.xh-links {
  max-width: 1200px;
  margin: 0 auto;
  padding: 25px 20px;
  
  &__main {
    background: #fff;
    border-radius: 12px;
    
    &--title {
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 20px;
      position: relative;
      
      &::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 60px;
        height: 4px;
        background: linear-gradient(90deg,#{$primary-color}, #35495e);
        border-radius: 2px;
      }
    }
    
    &--other {
      color: #5a6573;
      margin-bottom: 20px;
      background: #f8f9fa;
      padding: 10px;
      border-radius: 8px;
      border-left: 4px solid #{$primary-color};
    }
    
    &--friends {
      display: grid;
      width: calc(100% - 40px);
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 25px;
    }
  }
}

@media (max-width: 768px) {
  .xh-links {
    padding: 20px 15px;
    
    &__main {
      padding: 25px 15px;
      
      &--title {
        font-size: 2rem;
      }
      
      &--friends {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>
