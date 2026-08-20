<template>
  <div class="xh-projects">
    <div class="xh-projects__main">
      <div class="xh-projects__main--title">项目</div>
      <div class="xh-title__mini">好像我还没什么大项目啊啊</div>
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
            description="A Markdown Editor，这是我参与的第一个开源项目"
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
          <links
            src="https://s2.loli.net/2025/09/07/D5hwT7Pen4fHF9N.jpg"
            name="qk"
            description="庆快校园"
            onclick="window.location.href='/'"
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
