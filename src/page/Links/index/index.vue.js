import { ref } from 'vue';
import Links from "@/components/Links/Links.vue";
// 模拟API获取数据
const friendLinks = ref([
// {
//   src: "https://picsum.photos/100?random=1",
//   name: "张三的博客",
//   href: "https://zhangsan.com",
//   description: "前端技术分享与生活感悟"
// },
// {
//   src: "https://picsum.photos/100?random=2",
//   name: "李四的技术站",
//   href: "https://lisi.tech",
//   description: "专注于Vue和React前沿技术"
// },
// {
//   src: "https://picsum.photos/100?random=3",
//   name: "王五的笔记",
//   href: "https://wangwu.dev",
//   description: "算法与数据结构学习笔记"
// },
// {
//   src: "https://picsum.photos/100?random=4",
//   name: "前端小智",
//   href: "https://qianduanxiao.com",
//   description: "分享前端开发技巧和教程"
// }
]);
// 随机排序友链
friendLinks.value = [...friendLinks.value].sort(() => Math.random() - 0.5);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['xh-links']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-links']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "xh-links" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "xh-links__main" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "xh-links__main--title" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "xh-links__main--other" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "xh-links__main--friends" },
});
for (const [value] of __VLS_getVForSourceType((__VLS_ctx.friendLinks))) {
    /** @type {[typeof Links, ]} */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Links, new Links({
        key: (value.name),
        src: (value.src),
        name: (value.name),
        href: (value.href),
        description: (value.description),
    }));
    const __VLS_1 = __VLS_0({
        key: (value.name),
        src: (value.src),
        name: (value.name),
        href: (value.href),
        description: (value.description),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
}
/** @type {__VLS_StyleScopedClasses['xh-links']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-links__main']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-links__main--title']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-links__main--other']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-links__main--friends']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Links: Links,
            friendLinks: friendLinks,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=index.vue.js.map