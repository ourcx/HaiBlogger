<template>
  <div class="xh-links">
    <div class="xh-links__main">
      <div class="xh-links__main--title">友邻</div>
      <div class="xh-links__main--other">
        欢迎交换友链呀 ~<br />
        以下是我的友链列表，列表随机排序，信息如果有变动，可以联系我进行更改。
      </div>
      <div class="xh-links__main--friends">
        <Links v-for="value in friendLinks" :key="value.name" :src="value.src" :name="value.name" :href="value.href"
          :description="value.description" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Links from "@/components/Links/Links.vue";
import type { LinksProps } from "@/components/Links/types";

// 模拟 API 获取数据
const friendLinks = ref<LinksProps[]>([
  {
    src: "https://avatars.githubusercontent.com/u/151366823?v=4",
    name: "二次元/FE 小霏雾",
    href: "https://github.com/Purpleplanen",
    description: "PurplePlanen",
  },
  {
    src: "http://elysia.wiki:222/assets/img/Rlogo.png",
    name: "We are always devout scholars",
    href: "http://elysia.wiki:222/",
    description: "Java 大王喵~  RobinElysia",
  },
  {
    src:
      "https://avatars.githubusercontent.com/u/91131723?s=400&u=cc52bb8ae67e4a4706570ac84399dc7519cfa749&v=4",
    name: "摇摇晃晃，也能到达目的地。",
    href: "https://blog.rand777.space/",
    description: "笨笨的 Rand777",
  },
  {
    src: "https://avatars.githubusercontent.com/u/176664901?v=4",
    name: "独酌清月",
    href: "https://www.lunarain.top/",
    description: "CS learner LunaRain_079",
  },
  {
    src: "https://avatars.githubusercontent.com/u/151366823?v=4",
    name: "二次元/前端站",
    href: "https://Purpleplanen.top",
    description: "FE learner PurplePlanen",
  },
  {
    src:
      "http://icstudio.top/static/img/61a200639d3d0b566ad79b4514760dbf.eaf1125e2f81e21ab44c79e01bc584a.webp",
    name: "枫城的小站",
    href: "http://icstudio.top",
    description: "solana | nextjs | rust | blockchain",
  },
  {
    src: "https://immort.top/image/e13254c44147cea5d9f1302c5878819d.jpg",
    name: "Immortal's Blog",
    href: "https://blog.immortel.top/",
    description: "随便 Immortal's Blog",
  },
  {
    src: "https://kawayww.com/images/blog/avatar.avif",
    name: "柳上川",
    href: "http://kawayww.com/",
    description: " 啊啊你好！我是柳上川，这里是我的个人博客，请随意探索吧！",
  },
  {
    src: "https://s2.loli.net/2026/01/24/8IpK4nT6LCMFWuJ.jpg",
    name: "Seeridia 的小窝",
    href: "https://blog.seeridia.top/",
    description: "Seeridia",
  }
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
  width: min(100%, 1200px);
  min-height: calc(100dvh - 76px);
  margin: 0 auto;
  padding: clamp(16px, 3vw, 36px);
}

// 优化后的样式
.xh-links__main {
  display: flex;
  flex-direction: column;
  align-items: center; // 水平居中所有子元素
  width: 100%;
  min-width: 0;
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
  &__main {
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
        background: linear-gradient(90deg, #{$primary-color}, #35495e);
        border-radius: 2px;
      }
    }

    &--other {
      color: #5a6573;
      margin-bottom: 20px;
      padding: 10px;
      border-radius: 8px;
      border-left: 4px solid #{$primary-color};
    }

    &--friends {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 25px;
    }
  }
}

@media (max-width: 768px) {
  .xh-links {
    min-height: auto;
    padding: 16px 0;

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
