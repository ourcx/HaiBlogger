import { ref, h, computed, onMounted } from "vue";
import { NLayout, NLayoutSider, NMenu, NIcon } from "naive-ui";
import { RouterLink, useRouter } from "vue-router";
import { BookOutline as BookIcon, WineOutline as WineIcon, HomeOutline as HomeIcon, BriefcaseOutline as ProjectIcon, LinkOutline as LinkIcon, InformationCircleOutline as AboutIcon, SettingsOutline as SettingIcon } from "@vicons/ionicons5";
import { useDynamicStore } from '../../store/index';
const articlesChildren = ref([]);
const router = useRouter();
const collapsed = ref(true);
const DynamicStore = useDynamicStore();
const renderIcon = (icon) => {
    return () => h(NIcon, null, { default: () => h(icon) });
};
const menuOptions = computed(() => [
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
    {
        whateverLabel: "归档",
        whateverKey: "markdown",
        icon: renderIcon(WineIcon),
        route: "markdownIndex",
    },
    {
        whateverLabel: "时间线",
        whateverKey: "timeline",
        icon: renderIcon(SettingIcon),
        route: "time"
    }
]);
onMounted(() => {
    const articles = [];
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
    }).filter(Boolean); // 过滤掉null值并断言类型
    articlesChildren.value.push(...articles);
    console.log(articlesChildren.value);
});
// 处理菜单选项，添加路由跳转功能
const processedMenuOptions = computed(() => {
    const processOptions = (options) => {
        return options.map(option => {
            // 创建新选项对象，保留原始属性
            const newOption = { ...option };
            // 添加路由跳转功能
            if (newOption.route) {
                // 保存原始标签
                if (!newOption.whateverChildren) {
                    const originalLabel = newOption.whateverLabel;
                    // 创建路由链接组件
                    newOption.whateverLabel = () => h(RouterLink, {
                        to: newOption.params
                            ? {
                                name: newOption.route,
                                params: newOption.params
                            }
                            : { name: newOption.route }
                    }, { default: () => originalLabel });
                    // 添加点击事件处理
                    newOption.onClick = () => {
                        if (newOption.params) {
                            router.push({
                                name: newOption.route,
                                params: newOption.params
                            });
                        }
                        else {
                            router.push({ name: newOption.route });
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
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.NLayout;
/** @type {[typeof __VLS_components.NLayout, typeof __VLS_components.nLayout, typeof __VLS_components.NLayout, typeof __VLS_components.nLayout, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    hasSider: true,
    ...{ class: "xh-menu__container" },
}));
const __VLS_2 = __VLS_1({
    hasSider: true,
    ...{ class: "xh-menu__container" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
const __VLS_5 = {}.NLayoutSider;
/** @type {[typeof __VLS_components.NLayoutSider, typeof __VLS_components.nLayoutSider, typeof __VLS_components.NLayoutSider, typeof __VLS_components.nLayoutSider, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    ...{ 'onCollapse': {} },
    ...{ 'onExpand': {} },
    bordered: true,
    collapseMode: "width",
    collapsedWidth: (64),
    width: (240),
    collapsed: (__VLS_ctx.collapsed),
    showTrigger: true,
}));
const __VLS_7 = __VLS_6({
    ...{ 'onCollapse': {} },
    ...{ 'onExpand': {} },
    bordered: true,
    collapseMode: "width",
    collapsedWidth: (64),
    width: (240),
    collapsed: (__VLS_ctx.collapsed),
    showTrigger: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
let __VLS_9;
let __VLS_10;
let __VLS_11;
const __VLS_12 = {
    onCollapse: (...[$event]) => {
        __VLS_ctx.collapsed = true;
    }
};
const __VLS_13 = {
    onExpand: (...[$event]) => {
        __VLS_ctx.collapsed = false;
    }
};
__VLS_8.slots.default;
const __VLS_14 = {}.NMenu;
/** @type {[typeof __VLS_components.NMenu, typeof __VLS_components.nMenu, ]} */ ;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({
    collapsed: (__VLS_ctx.collapsed),
    collapsedWidth: (64),
    collapsedIconSize: (22),
    options: (__VLS_ctx.processedMenuOptions),
    keyField: "whateverKey",
    labelField: "whateverLabel",
    childrenField: "whateverChildren",
}));
const __VLS_16 = __VLS_15({
    collapsed: (__VLS_ctx.collapsed),
    collapsedWidth: (64),
    collapsedIconSize: (22),
    options: (__VLS_ctx.processedMenuOptions),
    keyField: "whateverKey",
    labelField: "whateverLabel",
    childrenField: "whateverChildren",
}, ...__VLS_functionalComponentArgsRest(__VLS_15));
var __VLS_8;
const __VLS_18 = {}.NLayout;
/** @type {[typeof __VLS_components.NLayout, typeof __VLS_components.nLayout, ]} */ ;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['xh-menu__container']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            NLayout: NLayout,
            NLayoutSider: NLayoutSider,
            NMenu: NMenu,
            collapsed: collapsed,
            processedMenuOptions: processedMenuOptions,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Menu.vue.js.map