<template>
  <Fei-Container>
    <div class="about-page">
      <div class="about-title">
        <n-gradient-text :gradient="{ from: 'rgb(181, 30, 30)', to: 'rgb(202, 94, 94)' }">
          自述 - 关于我
        </n-gradient-text>
      </div>
        <n-card class="intro-card" hoverable>
          <div class="intro-content">
            <n-avatar
              round
              :size="100"
              src="https://s2.loli.net/2025/02/02/ELbK6urJqYvgBPj.jpg"
              object-fit="cover"
            />
            <div class="intro-text">
              <n-h3>hello，我是小海</n-h3>
              <n-p>
                其实还可以叫我褚喧,刀子zhen好吃...这些都是社交平台上的名字
                <br />
                欢迎来到我的数字花园,希望你在这里能有所发现
              </n-p>
            </div>
          </div>
        </n-card>

        <n-card title="名字由来" hoverable>
          <n-p>
            小海这个名字是来源于孤独摇滚里面的一首歌,[小小的海],这是一首很让我意外的音乐
          </n-p>
          <n-blockquote class="lyric-container">
            <div class="lyric-line">
              いつまで待っても 僕は 僕なんだよ
              <div class="translation">无论等待多久 我都不会改变</div>
            </div>
            <div class="lyric-line">
              変わらないのも 僕の 僕のせい
              <div class="translation">同样许多错误 也不会被改变</div>
            </div>
            <div class="lyric-line">
              それでも何か ちょっと ちょっとでいい
              <div class="translation">即便如此 有些东西也在一点一点</div>
            </div>
            <div class="lyric-line">
              僕の光になって 行き先を照らしてくれよ
              <div class="translation">化作为我照亮前路的光</div>
            </div>
          </n-blockquote>
        </n-card>

        <n-card title="在这里找到我" hoverable>
          <div class="social-links">
            <n-button
              v-for="link in socialLinks"
              :key="link.name"
              strong
              secondary
              circle
              :type="link.type"
              tag="a"
              :href="link.url"
              target="_blank"
            >
              <template #icon>
                <n-icon :component="link.icon" />
              </template>
            </n-button>
          </div>
        </n-card>
    </div>
  </Fei-Container>
</template>

<script setup lang="ts">
import {
  NGradientText,
  NCard,
  NAvatar,
  NH3,
  NP,
  NTag,
  NButton,
  NIcon,
  NBlockquote,
} from "naive-ui";
import type { Component } from "vue";
import { LogoGithub, LogoEdge, MailOutline } from "@vicons/ionicons5";


const socialLinks: {
  name: string;
  url: string;
  icon: Component;
  type: "primary" | "success" | "info";
}[] = [
  {
    name: "GitHub",
    url: "https://github.com/ourcx",
    icon: LogoGithub,
    type: "primary",
  },
  {
    name: "Bilibili",
    url: "https://space.bilibili.com/515482775",
    icon: LogoEdge,
    type: "success",
  },
  {
    name: "Email",
    url: "mailto:3277975910@qq.com",
    icon: MailOutline,
    type: "info",
  },
];
</script>

<style lang="scss" scoped>
// 确保导入了你的全局样式变量文件
@use "../../style/index.scss" as *;

.about-page {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.about-title {
  text-align: center;

  .n-gradient-text {
    font-size: 30px;
    font-weight: bold;
    font-family: var(--fei-font-family);
  }
}

:deep(.n-card) {
  background-color: var(--fei-bg-color-overlay);
  border-radius: var(--fei-border-radius-round);
  border: 1px solid var(--fei-border-color-light);
  transition: all var(--fei-transition-duration) var(--fei-transition-timing-function);

  &:hover {
    box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.08);
    border-color: var(--fei-color-primary-light-7);
  }
}

:deep(.n-card__header) {
  font-size: var(--fei-font-size-large);
  font-weight: var(--fei-font-weight-primary);
  color: var(--fei-text-color-primary);
}

:deep(.n-p) {
  font-size: var(--fei-font-size-base);
  color: var(--fei-text-color-regular);
  line-height: 1.8;
}

.intro-card .intro-content {
  display: flex;
  align-items: center;
  gap: 20px;
}

.intro-text {
  flex: 1;
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.social-links .n-button {
  width: 50px;
  height: 50px;
}

.lyric-box {
  margin-top: 16px;
  padding: 16px;
  border-left: 3px solid #d0e6a5;
  background: #fafbfc;
}

.lyric {
  font-size: 0.95em;
  letter-spacing: 0.5px;
}

.translation {
  font-size: 0.9em;
  line-height: 1.7;
}
</style>
