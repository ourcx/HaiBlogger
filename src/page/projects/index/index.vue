<template>
  <div class="xh-projects">
    <div class="xh-projects__main">
      <div class="xh-projects__main--title">项目</div>
      <div class="xh-title__mini">好像我还没什么大项目啊啊</div>
      <div class="xh-projects__main--projects">
        <Divider>github</Divider>
        <div class="xh-projects-class__new">
          <links
            v-for="project in projects"
            :key="project.name"
            :src="project.src"
            :name="project.name"
            :description="project.description"
            :href="project.url"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Links from "@/components/Links/Links.vue";
import Divider from "@/components/Divider/Divider.vue";

const projects = [
  {
    src: "https://s2.loli.net/2025/08/19/GP4Lma8gVe5ItlE.jpg",
    name: "xiaohaiyunGo",
    description: "后端",
    url: "https://github.com/ourcx/xiaohaiyunGo",
  },
  {
    src: "https://s2.loli.net/2025/06/13/SP6wneV4Zh52rKm.jpg",
    name: "xiaohaiyunHTML",
    description: "基于 Vue 3 的网页网盘",
    url: "https://github.com/ourcx/xioahaiyunHTML",
  },
  {
    src: "https://s2.loli.net/2025/05/29/HSaD38fFVYmiWIo.png",
    name: "feiUI",
    description: "仿 Element Plus 的组件库，并在此基础上扩展。",
    url: "https://github.com/ourcx/feiUI",
  },
  {
    src: "https://s2.loli.net/2025/02/02/ELbK6urJqYvgBPj.jpg",
    name: "cherry-markdown",
    description: "参与的第一个开源项目，一个 Markdown 编辑器。",
    url: "https://github.com/ourcx/cherry-markdown",
  },
  {
    src: "https://s2.loli.net/2025/03/04/tQzyHhxs76Y1EU9.jpg",
    name: "timetable",
    description: "一个校园课表小程序。",
    url: "https://github.com/ourcx/timetable",
  },
  {
    src: "https://s2.loli.net/2025/03/04/tQzyHhxs76Y1EU9.jpg",
    name: "xiaohaiyunAdmin",
    description: "小海云网盘后台管理系统，使用 Next.js 和 TypeScript。",
    url: "https://github.com/ourcx/xiaohaiyunAdmin",
  },
  {
    src: "https://s2.loli.net/2025/09/07/D5hwT7Pen4fHF9N.jpg",
    name: "qk",
    description: "庆快校园。",
    url: "/",
  },
  {
    src: "https://s2.loli.net/2025/02/02/ELbK6urJqYvgBPj.jpg",
    name: "codewiz",
    description: "面向设计到代码工作流的工具实验与实现。",
    url: "https://github.com/ourcx/codewiz",
  },
  {
    src: "https://s2.loli.net/2025/06/13/SP6wneV4Zh52rKm.jpg",
    name: "autowriting",
    description: "使用 AI 自动生成公众号文章并发布到草稿箱的工作流工具。",
    url: "https://github.com/ourcx/autowriting",
  },
  {
    src: "https://s2.loli.net/2025/08/19/GP4Lma8gVe5ItlE.jpg",
    name: "wyy-backend",
    description: "用 Go 编写的仿网易云后端，配套 React 前端。",
    url: "https://github.com/ourcx/wyy-backend",
  },
];
</script>

<style scoped lang="scss">
@use "../../../style/index.scss" as *;

// 根据要求，此部分样式保持不变
.xh-projects {
  display: flex;
  flex-direction: column;
  width: min(100%, 1200px);
  min-height: calc(100dvh - 76px);
  margin: 0 auto;
  padding: clamp(16px, 3vw, 36px);
}

// 优化后的样式
.xh-projects__main {
  display: flex;
  flex-direction: column;
  align-items: center; // 水平居中所有子元素
  width: 100%;
  min-width: 0;
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: clamp(16px, 3vw, 32px);
  padding-top: 20px; // 与标题之间留出空间
  width: 100%;
}

@media (max-width: 768px) {
  .xh-projects {
    min-height: auto;
    padding: 16px 0;
  }
}
</style>
