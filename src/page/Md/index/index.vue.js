import { ref, computed } from "vue";
import { NPagination, NScrollbar, NResult, NButton } from "naive-ui";
import MdList from "@/components/MD-list/MdLIst.vue";
import { useDynamicStore } from "@/store";
const DynamicStore = useDynamicStore();
const props = withDefaults(defineProps(), {
    title: "小海的笔记项目",
    time: new Date().toLocaleDateString(),
});
const page = ref(1);
const base = 5;
const posts = computed(() => {
    return DynamicStore.data.slice((page.value - 1) * base, page.value * base);
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    title: "小海的笔记项目",
    time: new Date().toLocaleDateString(),
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['fei-MD__list']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-MD__title']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-MD__list']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-MD__main']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-MD__title']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-MD__title']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-MD__list']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-MD__footer']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-MD__main']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-MD__title']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-MD__item']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-MD__footer']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-MD__footer']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "fei-MD__main" },
});
const __VLS_0 = {}.NScrollbar;
/** @type {[typeof __VLS_components.NScrollbar, typeof __VLS_components.nScrollbar, typeof __VLS_components.NScrollbar, typeof __VLS_components.nScrollbar, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ style: {} },
}));
const __VLS_2 = __VLS_1({
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "fei-MD__title" },
});
(__VLS_ctx.title);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "fei-MD__title--subtitle" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "fei-MD__time" },
});
(__VLS_ctx.time);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "fei-MD__time--separator" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "fei-MD__time--author" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "fei-MD__time--separator" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "fei-MD__time--tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "fei-MD__body" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "fei-MD__list" },
});
if (__VLS_ctx.posts.length > 0) {
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.posts))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "fei-MD__item" },
            key: (item.id),
        });
        /** @type {[typeof MdList, ]} */ ;
        // @ts-ignore
        const __VLS_4 = __VLS_asFunctionalComponent(MdList, new MdList({
            post: (item),
            loading: (false),
        }));
        const __VLS_5 = __VLS_4({
            post: (item),
            loading: (false),
        }, ...__VLS_functionalComponentArgsRest(__VLS_4));
    }
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_7 = {}.NResult;
    /** @type {[typeof __VLS_components.NResult, typeof __VLS_components.nResult, typeof __VLS_components.NResult, typeof __VLS_components.nResult, ]} */ ;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
        status: "418",
        title: "418 我是个杯具",
        description: "一切尽在不言中",
    }));
    const __VLS_9 = __VLS_8({
        status: "418",
        title: "418 我是个杯具",
        description: "一切尽在不言中",
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    __VLS_10.slots.default;
    {
        const { footer: __VLS_thisSlot } = __VLS_10.slots;
        const __VLS_11 = {}.NButton;
        /** @type {[typeof __VLS_components.NButton, typeof __VLS_components.nButton, typeof __VLS_components.NButton, typeof __VLS_components.nButton, ]} */ ;
        // @ts-ignore
        const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({}));
        const __VLS_13 = __VLS_12({}, ...__VLS_functionalComponentArgsRest(__VLS_12));
        __VLS_14.slots.default;
        var __VLS_14;
    }
    var __VLS_10;
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "fei-MD__footer" },
});
const __VLS_15 = {}.NPagination;
/** @type {[typeof __VLS_components.NPagination, typeof __VLS_components.nPagination, ]} */ ;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
    page: (__VLS_ctx.page),
    pageCount: (100),
}));
const __VLS_17 = __VLS_16({
    page: (__VLS_ctx.page),
    pageCount: (100),
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['fei-MD__main']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-MD__title']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-MD__title--subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-MD__time']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-MD__time--separator']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-MD__time--author']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-MD__time--separator']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-MD__time--tag']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-MD__body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-MD__list']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-MD__item']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-MD__footer']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            NPagination: NPagination,
            NScrollbar: NScrollbar,
            NResult: NResult,
            NButton: NButton,
            MdList: MdList,
            page: page,
            posts: posts,
        };
    },
    __typeProps: {},
    props: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    props: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=index.vue.js.map