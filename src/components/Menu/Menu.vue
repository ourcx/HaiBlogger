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
        :options="processedMenuOptions"
        key-field="whateverKey"
        label-field="whateverLabel"
        children-field="whateverChildren"
      />
    </n-layout-sider>
    <n-layout />
  </n-layout>
</template>

<script setup lang="ts">
import { ref, h, computed,onMounted,reactive } from "vue";
import { NLayout, NLayoutSider, NMenu, NIcon } from "naive-ui";
import type { MenuOption } from "naive-ui";
import type { Component } from "vue";
import { RouterLink, useRouter } from "vue-router";
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
  HomeOutline as HomeIcon,
  BriefcaseOutline as ProjectIcon,
  LinkOutline as LinkIcon,
  InformationCircleOutline as AboutIcon
} from "@vicons/ionicons5";
import {type RouteParamsRaw } from "vue-router";
import type { VNodeChild } from "vue";
import { useDynamicStore } from '../../store/index';


type RouteConfig = {
  whateverLabel: string;
  whateverKey: string;
  route: "markdown";
  params: {
    id: string;
  };
  whateverChildren?: RouteConfig[];
};
const articlesChildren = ref<RouteConfig[]>([])
const router = useRouter();
const collapsed = ref(true);
const DynamicStore = useDynamicStore();
const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) });
};

const menuOptions=computed<MenuOption[]>(() => [
  {
    whateverLabel: "首页",
    whateverKey: "home",
    icon: renderIcon(HomeIcon),
    route: "home"
  },
  {
    whateverLabel: "项目",
    whateverKey: "projects",
    icon: renderIcon(ProjectIcon),
    route: "projects"
  },
  {
    whateverLabel: "友链",
    whateverKey: "links",
    icon: renderIcon(LinkIcon),
    route: "links"
  },
  {
    whateverLabel: "关于",
    whateverKey: "about",
    icon: renderIcon(AboutIcon),
    route: "about"
  },
  {
    whateverLabel: "文章",
    whateverKey: "articles",
    icon: renderIcon(BookIcon),
    whateverChildren: articlesChildren.value
  },
]);

onMounted(() => {
  const articles: any[] = [];

  articlesChildren.value = DynamicStore.data.map(item => {
    if (item.id?.includes("/")) {
      const [prev, next] = item.id.split("/");
      let found = false;

      for (let i = 0; i < articles.length; i++) {
        if (articles[i].whateverLabel === prev) {
          articles[i].whateverChildren?.push({
            whateverLabel: next,
            whateverKey: item.id,
            route: "markdown",
            params: { id: item.id }
          });
          found = true;
          break;
        }
      }

      if (!found) {
        articles.push({
          whateverLabel: prev,
          whateverKey: prev,
          route: "markdown",
          params: { id: prev },
          whateverChildren: [{
            whateverLabel: next,
            whateverKey: item.id,
            route: "markdown",
            params: { id: item.id }
          }]
        });
      }

      return null; // 有斜杠的文章不直接显示在主列表
    }

    return {
      whateverLabel: item.title,
      whateverKey: item.id,
      route: "markdown",
      params: { id: item.id }
    };
  }).filter(Boolean) as RouteConfig[]; // 过滤掉null值并断言类型

  articlesChildren.value.push(...articles);
  console.log(articlesChildren.value);
});

// 处理菜单选项，添加路由跳转功能
const processedMenuOptions = computed<MenuOption[]>(() => {
  const processOptions = (options: MenuOption[]): MenuOption[] => {
    return options.map(option => {
      // 创建新选项对象，保留原始属性
      const newOption: MenuOption = { ...option };

      // 添加路由跳转功能
      if (newOption.route) {
        // 保存原始标签
        if(!newOption.whateverChildren){
const originalLabel = newOption.whateverLabel;

        // 创建路由链接组件
        newOption.whateverLabel = () => h(
          RouterLink,
          {
            to: newOption.params
              ? {
                  name: newOption.route as string,
                  params: newOption.params as RouteParamsRaw
                }
              : { name: newOption.route as string }
          },
          { default: () => originalLabel as string }
        );

        // 添加点击事件处理
        newOption.onClick = () => {
          if (newOption.params) {
            router.push({
              name: newOption.route as string,
              params: newOption.params as RouteParamsRaw
            });
          } else {
            router.push({ name: newOption.route as string });
          }
        };
      }
        }
      // 递归处理子菜单
      if (Array.isArray(newOption.whateverChildren)) {
        newOption.whateverChildren = processOptions(newOption.whateverChildren);
      }

      return newOption;
    });
  };

  return processOptions(menuOptions.value);
});
</script>

<style scoped lang="scss">
@use "../../style/index.scss" as *;

.xh-menu__container {
  height: #{$xh-height}vh; // 直接使用变量
  width: auto;
  margin-right: -250px;
}
</style>
