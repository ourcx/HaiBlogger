import { NScrollbar } from "naive-ui";
import { NCard } from "naive-ui";
import Container from "@/components/Container/index.vue";
const articles = [
    {
        title: "uniapp在微信小程序中实现SSE进行通信",
        date: "2025年8月29日",
        description: "最近帮忙做一个项目的前端，遇到了一种通信方式就是SSE，这种也算是我的薄弱点，以前...",
    },
    {
        title: "我的组件库设计思想",
        date: "2025年8月15日",
        description: "设计思想 分层 rc-xxx, 提供基础组件, unstyled component, 只具备功能交互而不具备U...",
    },
    {
        title: "自己实现一个聊天模块",
        date: "2025年6月7日",
        description: "大致的实现效果 群聊和私聊 联系人 这个是我独立写完的一个模块，以前并没有怎么了解...",
    },
    {
        title: "uniapp的双token",
        date: "2025年9月25日",
        description: "在小程序实现双token增强安全性和优化用户的体验",
    },
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['left']} */ ;
/** @type {__VLS_StyleScopedClasses['timeline-content']} */ ;
/** @type {__VLS_StyleScopedClasses['right']} */ ;
/** @type {__VLS_StyleScopedClasses['timeline-content']} */ ;
/** @type {__VLS_StyleScopedClasses['timeline']} */ ;
/** @type {__VLS_StyleScopedClasses['timeline-item']} */ ;
/** @type {__VLS_StyleScopedClasses['left']} */ ;
/** @type {__VLS_StyleScopedClasses['right']} */ ;
/** @type {__VLS_StyleScopedClasses['left']} */ ;
/** @type {__VLS_StyleScopedClasses['right']} */ ;
/** @type {__VLS_StyleScopedClasses['left']} */ ;
/** @type {__VLS_StyleScopedClasses['timeline-content']} */ ;
/** @type {__VLS_StyleScopedClasses['right']} */ ;
/** @type {__VLS_StyleScopedClasses['timeline-content']} */ ;
// CSS variable injection 
// CSS variable injection end 
/** @type {[typeof Container, typeof Container, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Container, new Container({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
var __VLS_3 = {};
__VLS_2.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "timeline-container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "timeline-title" },
});
const __VLS_4 = {}.NScrollbar;
/** @type {[typeof __VLS_components.NScrollbar, typeof __VLS_components.nScrollbar, typeof __VLS_components.NScrollbar, typeof __VLS_components.nScrollbar, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    ...{ style: {} },
}));
const __VLS_6 = __VLS_5({
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_7.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "timeline" },
});
for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.articles))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: (item.date),
        ...{ class: (['timeline-item', index % 2 === 0 ? 'left' : 'right']) },
    });
    const __VLS_8 = {}.NCard;
    /** @type {[typeof __VLS_components.NCard, typeof __VLS_components.nCard, typeof __VLS_components.NCard, typeof __VLS_components.nCard, ]} */ ;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
        ...{ class: "timeline-content" },
    }));
    const __VLS_10 = __VLS_9({
        ...{ class: "timeline-content" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    __VLS_11.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    (item.title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "timeline-date" },
    });
    (item.date);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (item.description);
    var __VLS_11;
}
var __VLS_7;
var __VLS_2;
/** @type {__VLS_StyleScopedClasses['timeline-container']} */ ;
/** @type {__VLS_StyleScopedClasses['timeline-title']} */ ;
/** @type {__VLS_StyleScopedClasses['timeline']} */ ;
/** @type {__VLS_StyleScopedClasses['timeline-item']} */ ;
/** @type {__VLS_StyleScopedClasses['timeline-content']} */ ;
/** @type {__VLS_StyleScopedClasses['timeline-date']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            NScrollbar: NScrollbar,
            NCard: NCard,
            Container: Container,
            articles: articles,
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