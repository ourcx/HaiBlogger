import { ref } from "vue";
import Links from "@/components/Links/Links.vue";
// 模拟 API 获取数据
const friendLinks = ref([
    {
        src: "https://avatars.githubusercontent.com/u/151366823?v=4",
        name: "二次元/FE 小霏雾",
        href: "https://github.com/Purpleplanen",
        description: "PurplePlanen",
    },
    {
        src: "http://elysia.wiki:222/assets/img/Rlogo.png",
        name: "We are always devout scholars",
        href: "http://elysia.wiki:222/",
        description: "Java 大王喵~  RobinElysia",
    },
    {
        src: "https://avatars.githubusercontent.com/u/91131723?s=400&u=cc52bb8ae67e4a4706570ac84399dc7519cfa749&v=4",
        name: "摇摇晃晃，也能到达目的地。",
        href: "https://blog.rand777.space/",
        description: "笨笨的 Rand777",
    },
    {
        src: "https://avatars.githubusercontent.com/u/176664901?v=4",
        name: "独酌清月",
        href: "https://www.lunarain.top/",
        description: "CS learner LunaRain_079",
    },
    {
        src: "https://avatars.githubusercontent.com/u/151366823?v=4",
        name: "二次元/前端站",
        href: "https://Purpleplanen.top",
        description: "FE learner PurplePlanen",
    },
    {
        src: "http://icstudio.top/static/img/61a200639d3d0b566ad79b4514760dbf.eaf1125e2f81e21ab44c79e01bc584a.webp",
        name: "枫城的小站",
        href: "http://icstudio.top",
        description: "solana | nextjs | rust | blockchain",
    },
    {
        src: "https://immort.top/image/e13254c44147cea5d9f1302c5878819d.jpg",
        name: "Immortal's Blog",
        href: "https://blog.immortel.top/",
        description: "随便 Immortal's Blog",
    },
    {
        src: "https://kawayww.com/images/blog/avatar.avif",
        name: "柳上川",
        href: "http://kawayww.com/",
        description: " 啊啊你好！我是柳上川，这里是我的个人博客，请随意探索吧！",
    },
    {
        src: "https://s2.loli.net/2026/01/24/8IpK4nT6LCMFWuJ.jpg",
        name: "Seeridia 的小窝",
        href: "https://blog.seeridia.top/",
        description: "Seeridia",
    }
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.br)({});
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