<template>
  <n-layout has-sider class="xh-menu__container">
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :collapsed="collapsed"
      show-trigger
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <n-menu
        :collapsed="collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
        key-field="whateverKey"
        label-field="whateverLabel"
        children-field="whateverChildren"
      />
    </n-layout-sider>
    <n-layout />
  </n-layout>
</template>

<script setup lang="ts">
import { ref, h } from "vue";
import { NLayout, NLayoutSider, NMenu, NIcon } from "naive-ui";
import type { MenuOption } from "naive-ui";
import type { Component } from "vue";
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
} from "@vicons/ionicons5";

// 响应式状态
const collapsed = ref(true);

// 图标渲染函数
const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) });
};

// 菜单配置
const menuOptions: MenuOption[] = [
  {
    whateverLabel: "且听风吟",
    whateverKey: "hear-the-wind-sing",
    icon: renderIcon(BookIcon),
  },
  {
    whateverLabel: "1973年的弹珠玩具",
    whateverKey: "pinball-1973",
    icon: renderIcon(BookIcon),
    disabled: true,
    whateverChildren: [
      {
        whateverLabel: "鼠",
        whateverKey: "rat",
      },
    ],
  },
  {
    whateverLabel: "寻羊冒险记",
    whateverKey: "a-wild-sheep-chase",
    disabled: true,
    icon: renderIcon(BookIcon),
  },
  {
    whateverLabel: "舞，舞，舞",
    whateverKey: "dance-dance-dance",
    icon: renderIcon(BookIcon),
    whateverChildren: [
      {
        type: "group",
        whateverLabel: "人物",
        whateverKey: "people",
        whateverChildren: [
          {
            whateverLabel: "叙事者",
            whateverKey: "narrator",
            icon: renderIcon(PersonIcon),
          },
          {
            whateverLabel: "羊男",
            whateverKey: "sheep-man",
            icon: renderIcon(PersonIcon),
          },
        ],
      },
      {
        whateverLabel: "饮品",
        whateverKey: "beverage",
        icon: renderIcon(WineIcon),
        whateverChildren: [
          {
            whateverLabel: "威士忌",
            whateverKey: "whisky",
          },
        ],
      },
      {
        whateverLabel: "食物",
        whateverKey: "food",
        whateverChildren: [
          {
            whateverLabel: "三明治",
            whateverKey: "sandwich",
          },
        ],
      },
      {
        whateverLabel: "过去增多，未来减少",
        whateverKey: "the-past-increases-the-future-recedes",
      },
    ],
  },
];
</script>

<style scoped lang="scss">
@use "../../style/index.scss" as *;

.xh-menu__container {
  height: #{$xh-height}vh; // 直接使用变量
  width: auto;
  margin-right: -250px;
}
</style>
