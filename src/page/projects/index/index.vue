<template>
  <div class="xh-projects">
    <div class="xh-projects__main">
      <div class="xh-projects__main--title">项目</div>
      <div class="xh-title__mini">9个分类,10个项目</div>
      <div class="xh-projects__main--projects">
        <Divider>github</Divider>
        <div class="xh-projects-class__new">
          <links
            src="https://s2.loli.net/2025/08/19/GP4Lma8gVe5ItlE.jpg"
            name="xiaohaiyunGo"
            description="后端"
            onclick="window.location.href='https://github.com/ourcx/xiaohaiyunGo'"
            style="cursor: pointer"
          ></links>
          <links
            src="https://s2.loli.net/2025/06/13/SP6wneV4Zh52rKm.jpg"
            name="xiaohaiyunHTML"
            description="基于Vue3的网页简盘"
            onclick="window.location.href='https://github.com/ourcx/xiaohaiyunHTML'"
            style="cursor: pointer"
          ></links>
          <links
            src="https://s2.loli.net/2025/05/29/HSaD38fFVYmiWIo.png"
            name="feiUI"
            description="feiUI组件库，是一个仿element-plus的组件库，以其为基础进行进一步的扩展"
            onclick="window.location.href='https://github.com/ourcx/feiUI'"
            style="cursor: pointer"
          ></links>
          <links
            src="https://s2.loli.net/2025/02/02/ELbK6urJqYvgBPj.jpg"
            name="cherry-markdown"
            description="A Markdown Editor"
            onclick="window.location.href='https://github.com/ourcx/cherry-markdown'"
            style="cursor: pointer"
          ></links>
          <links
            src="https://s2.loli.net/2025/03/04/tQzyHhxs76Y1EU9.jpg"
            name="timetable"
            description="一个校园课表小程序"
            onclick="window.location.href='https://github.com/ourcx/timetable'"
            style="cursor: pointer"
          ></links>
          <links
            src="https://s2.loli.net/2025/03/04/tQzyHhxs76Y1EU9.jpg"
            name="xiaohaiyunAdmin"
            description="小海云网盘的后台管理系统，使用nextjs和ts等技术栈"
            onclick="window.location.href='https://github.com/ourcx/xiaohaiyunAdmin'"
            style="cursor: pointer"
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
  gap: 70px; // 设置项目卡片之间的间距
  padding-top: 20px; // 与标题之间留出空间
  width: 100%;
}
</style>
