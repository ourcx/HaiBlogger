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
  <div class="xh-home-layout">
    <div class="xh-home">
      <div class="xh-info-container">
        <n-scrollbar class="xh-home-scroll">
          <div class="xh-info-text">
            <header class="xh-profile">
              <div class="xh-profile__ornament" aria-hidden="true"></div>
              <div class="xh-avatar-container">
                <n-avatar
                  round
                  :size="80"
                  src="https://s2.loli.net/2025/02/02/ELbK6urJqYvgBPj.jpg"
                  class="xh-avatar"
                />
              </div>
              <div class="xh-name">小海</div>
              <div class="xh-job"><Light>前端开发者</Light>-向阳花木易为春</div>
            </header>
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
                  <div class="card" v-for="item in SocialData">
                    <Card :title="item.title" :content="item.excerpt" />
                  </div>
                </div>
              </n-scrollbar>
            </div>
          </div>
        </n-scrollbar>
      </div>
    </div>
    <div class="xh-home-timeline">
      <TimeLine />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../../style/index.scss" as *;
.xh-home-layout {
  width: min(100%, 1200px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 320px);
  gap: clamp(20px, 3vw, 40px);
  align-items: stretch;
  min-height: calc(100dvh - 56px);
  padding: clamp(16px, 3vw, 36px);
}

.xh-home {
  min-width: 0;
}

.xh-info-container {
  min-width: 0;
}

.xh-home-scroll {
  max-height: calc(100dvh - 120px);
}

.xh-profile {
  position: relative;
  display: grid;
  justify-items: center;
  text-align: center;
  padding: 28px 20px 12px;
  overflow: hidden;
}

.xh-profile__ornament {
  position: absolute;
  top: 18px;
  width: min(75%, 360px);
  height: 76px;
  border-top: 1px solid rgba(181, 30, 30, 0.24);
  border-radius: 50%;
  pointer-events: none;
}

.xh-profile__ornament::before,
.xh-profile__ornament::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: #b51e1e;
  opacity: 0.6;
  animation: profile-orbit 5s ease-in-out infinite;
}

.xh-profile__ornament::before {
  top: -4px;
  left: 12%;
  width: 7px;
  height: 7px;
}

.xh-profile__ornament::after {
  top: 24px;
  right: 8%;
  width: 5px;
  height: 5px;
  animation-delay: -2.5s;
}

.xh-avatar-container {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.xh-avatar {
  border: 3px solid #f0f0f0;
  box-shadow: 0 8px 22px rgba(181, 30, 30, 0.16);
}

@keyframes profile-orbit {
  0%,
  100% {
    transform: translateY(0);
    opacity: 0.35;
  }
  50% {
    transform: translateY(-9px);
    opacity: 0.8;
  }
}

.xh-name {
  margin-top: 12px;
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
}

.xh-job {
  text-align: center;
  font-size: 1rem;
  color: #666;
  margin-bottom: 8px;
}

.xh-tags {
  display: flex;
  flex-wrap: wrap;
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
  max-height: 360px;
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
  min-width: 0;
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
  .xh-home-layout {
    grid-template-columns: 1fr;
    padding: 16px 0;
  }

  .xh-info-container {
    width: 100%;
  }

  .xh-home-timeline {
    display: none;
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
  .xh-home-layout {
    grid-template-columns: minmax(0, 1fr) 250px;
  }
}

.xh-home-timeline {
  align-self: center;
  min-width: 0;
  width: 100%;
  max-height: calc(100dvh - 144px);
  overflow-y: auto;
  padding: 6px 0;
}

</style>
