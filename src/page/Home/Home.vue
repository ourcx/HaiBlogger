<script setup lang="ts">
// 明确导入需要使用的组件
import { NAvatar, NDivider, NHighlight, NScrollbar } from "naive-ui";
import { GitBranch, LogoTwitter, MailOutline } from "@vicons/ionicons5";
import { ref, computed } from "vue";
import { useThemeVars } from "naive-ui";
import Card from "@/components/Card/Card.vue";
import { useDynamicStore } from "@/store";
import TimeLine from "@/components/TImeLine/TimeLine.vue";


const dynamicStore = useDynamicStore();
const themeVars = useThemeVars();
const text = ref("近期动态");
const patterns = ref(["近期动态", "随笔"]);
const Nstyle = ref({
  padding: "0 6px",
  borderRadius: themeVars.value.borderRadius,
  display: "inline-block",
  color: themeVars.value.baseColor,
  background: themeVars.value.primaryColor,
  transition: "all .3s ease-in-out",
  cursor: "pointer",
});

const SocialIndex = ref<1 | 2 | 3 | 4 | 5>(1);
const SocialData = computed(() => {
  if (SocialIndex.value === 1) {
    return dynamicStore.data;
  } else if (SocialIndex.value === 2) {
    return [{ title: "为什么写博客", content: "content", links: "" }];
  }
});
const SocialClick = () => {
  SocialIndex.value++;
  text.value = patterns.value[SocialIndex.value - 1];
  if (SocialIndex.value > 5) {
    SocialIndex.value = 1;
  }
};

const SocialMove = () => {
  Nstyle.value.background = themeVars.value.primaryColorSuppl;
};
const SocialLeave = () => {
  Nstyle.value.background = themeVars.value.primaryColor;
};
</script>

<template>
  <div class="xh-home">
    <div class="xh-info-container">
      <n-scrollbar style="height: 100vh">
        <div class="xh-avatar-container">
          <n-avatar
            round
            :size="80"
            src="https://s2.loli.net/2025/02/02/ELbK6urJqYvgBPj.jpg"
            class="xh-avatar"
          />
        </div>
        <div class="xh-info-text">
          <div class="xh-name">小海</div>
          <div class="xh-job"><Light>前端开发者</Light>-向阳花木易为春</div>
          <div class="xh-tags">
            <span class="xh-tag">Vue</span>
            <span class="xh-tag">React</span>
            <span class="xh-tag">jest</span>
            <span class="xh-tag">Typescript</span>
            <span class="xh-tag">Javascript</span>
            <span class="xh-tag">CSS</span>
            <span class="xh-tag">HTML</span>
            <span class="xh-tag">Node</span>
            <span class="xh-tag">Git</span>
            <span class="xh-tag">Golang</span>
          </div>
          <div class="xh-bio">
            hi,<Light>我是小海,也可以称我为褚喧</Light>,欢迎来到我的博客.
            我是一个喜欢学习、喜欢生活、喜欢分享的<Light>Web前端开发者</Light>,现在的企划只有写前端,学习音乐做一首自己的歌,想要参加开源项目,正在犀牛鸟活动中摸索,希望在未来能够参与更多开源活动,也专注
            在一些线下的公益活动,<Light>为世界更美好贡献自己的一份力量</Light>,和很多人一样,相信技术改变世界
          </div>
          <div class="xh-bio">
            除此以外,我也喜欢二次元,阅读(虽然这段时间的阅读也越来越少),散步,喜欢骑行的风,写文章等,爱好很少,但是可以让我一个人非常充实的活着
          </div>
          <n-divider>
            <transition name="flip" mode="out-in">
              <n-highlight
                :key="text"
                :text="text"
                :patterns="patterns"
                :highlight-style="Nstyle"
                @click="SocialClick"
                @mouseenter="SocialMove"
                @mouseleave="SocialLeave"
              />
            </transition>
          </n-divider>
          <div class="xh-social-container">
            <n-scrollbar style="height: 100%">
              <div class="xh-social">
                <!-- 普通卡片 -->
                <div class="card" v-for="item in SocialData">
                  <Card :title="item.title" :content="item.content" />
                </div>
                <!-- <div class="card double-row">
                  <Card />
                </div> -->
              </div>
            </n-scrollbar>
          </div>
        </div>
      </n-scrollbar>
    </div>
  </div>
  <!-- 右边的东西 -->
  <div class="xh-home-right">
  <TimeLine/>
  </div>
</template>

<style scoped lang="scss">
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

  .xh-avatar-container {
    flex-shrink: 0;
    height: auto;
    // 居中
    display: flex;
    align-items: center;
    justify-content: center;

    .xh-avatar {
      border: 3px solid #f0f0f0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  }
}

.xh-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
}

.xh-job {
  font-size: 1rem;
  color: #666;
  margin-bottom: 8px;
}

.xh-tags {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  justify-content: center;

  .xh-tag {
    padding: 4px 10px;
    background: #f5f5f5;
    border-radius: 20px;
    font-size: 0.8rem;
    color: #555;
  }

  .xh-tag:hover {
    color: #{$primary-color};
  }
}

.xh-bio {
  font-size: 0.95rem;
  line-height: 1.5;
  color: #444;
  margin-bottom: 16px;
  padding: 10px 0;
}
/* 外层固定高度容器 */
.xh-social-container {
  height: 300px; /* 你想要的高度 */
  width: 100%;
}

/* 网格布局容器 */
.xh-social {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  padding: 5px; /* 可选，增加内边距 */
  padding-right: 8px;
}

/* 跨两行的卡片 */
.double-row {
  grid-row: span 2;
}

/* 卡片样式 */
.card {
  background: #fff;
  border-radius: 4px;
  padding: 12px;
}

/* 3D翻转效果 */
.flip-enter-active {
  animation: flip-in 0.5s ease-out;
}

.flip-leave-active {
  animation: flip-out 0.5s ease-in;
}

@keyframes flip-in {
  0% {
    transform: rotateY(90deg);
    opacity: 0;
  }
  100% {
    transform: rotateY(0deg);
    opacity: 1;
  }
}

@keyframes flip-out {
  0% {
    transform: rotateY(0deg);
    opacity: 1;
  }
  100% {
    transform: rotateY(-90deg);
    opacity: 0;
  }
}

/* 基础样式保持不变，添加以下响应式样式 */

/* 小屏幕 (小于768px) */
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

  .xh-home-right {
    position: static !important;
    width: 100% !important;
    height: auto !important;
    margin-top: 20px;
    box-shadow: none !important;
  }

  .xh-tags {
    justify-content: center !important;
    flex-wrap: wrap;
    gap: 8px;
  }

  .xh-tag {
    font-size: 12px !important;
    padding: 4px 8px !important;
  }

  .xh-social {
    grid-template-columns: 1fr !important;
    gap: 12px !important;
  }

  .xh-avatar-container {
    margin: 0 auto 20px !important;
  }

  .xh-name {
    font-size: 24px !important;
    text-align: center !important;
  }

  .xh-job {
    font-size: 14px !important;
    text-align: center !important;
    margin-bottom: 15px !important;
  }

  .xh-bio {
    font-size: 14px !important;
    line-height: 1.6 !important;
    margin-bottom: 15px !important;
  }
}

/* 超小屏幕 (小于480px) */
@media (max-width: 480px) {
  .xh-tags {
    justify-content: center !important;
  }

  .xh-social {
    justify-content: center !important;
    grid-template-columns: 1fr !important;
  }

  .xh-name {
    font-size: 22px !important;
  }

  .xh-job {
    font-size: 13px !important;
  }

  .xh-bio {
    font-size: 13px !important;
  }

  n-divider {
    margin: 15px 0 !important;
  }
}

/* 中等屏幕 (768px-992px) */
@media (min-width: 768px) and (max-width: 992px) {
  .xh-home-right {
    width: 250px !important;
  }

  .xh-info-container {
    width: calc(100% - 270px) !important;
  }
}

/* 大屏幕 (大于1200px) */
@media (min-width: 1200px) {
  .xh-home {
    max-width: 1400px;
    margin: 0 auto;
  }
}

.xh-home-right {
  position: fixed;
  right: 0;
  top: 0;
  width: 300px; // 增加宽度，100px可能太小
  height: 100vh; // 使用100vh而不是变量
  z-index: 100; // 确保在顶层
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 768px) {
  .xh-home-right {
    display: none; // 小屏幕隐藏
  }
}

</style>
