import { ref, computed } from "vue";
import { NScrollbar, NButton } from "naive-ui";
import { useRouter } from "vue-router";
import { useDynamicStore } from "@/store";
const DynamicStore = useDynamicStore();
const router = useRouter();
const theme = ref("github-dark-dimmed");
const mdHeight = ref("auto");
const mdWidth = ref("100%");
const Id = computed(() => router.currentRoute.value.params.id);
const currentDate = ref(new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
}));
const list = DynamicStore.data.map(item => {
    if (item.title.includes("/")) {
        return item.title.replace("/", "%2F");
    }
    return item.title;
});
const listIndex = computed(() => {
    const fileName = Id.value;
    return list.indexOf(fileName.replace("/", "%2F"));
});
const title = computed(() => {
    const fileName = Id.value;
    return fileName.split("/").pop()?.replace(".md", "") || "Markdown Document";
});
//跳转
const nextND = () => {
    if (listIndex.value === list.length - 1)
        return;
    router.push({
        path: `/markdown/${list[listIndex.value + 1]}`,
    });
};
const prevND = () => {
    if (listIndex.value === 0)
        return;
    router.push({
        path: `/markdown/${list[listIndex.value - 1]}`
    });
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['xh-markdown-container']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-markdown-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-markdown-title']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-markdown-date']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-markdown-container']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-markdown-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-markdown-title']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-markdown-footer']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "xh-markdown-container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "xh-markdown-wrapper" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "xh-markdown-header" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "xh-markdown-title" },
});
(__VLS_ctx.title);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "xh-markdown-date" },
});
(__VLS_ctx.currentDate);
const __VLS_0 = {}.NScrollbar;
/** @type {[typeof __VLS_components.NScrollbar, typeof __VLS_components.nScrollbar, typeof __VLS_components.NScrollbar, typeof __VLS_components.nScrollbar, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ style: {} },
    trigger: "hover",
}));
const __VLS_2 = __VLS_1({
    ...{ style: {} },
    trigger: "hover",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "xh-markdown-body" },
});
const __VLS_4 = {}.FeiMarkdown;
/** @type {[typeof __VLS_components.FeiMarkdown, typeof __VLS_components.FeiMarkdown, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    src: (__VLS_ctx.Id),
    theme: (__VLS_ctx.theme),
    height: (__VLS_ctx.mdHeight),
    width: (__VLS_ctx.mdWidth),
}));
const __VLS_6 = __VLS_5({
    src: (__VLS_ctx.Id),
    theme: (__VLS_ctx.theme),
    height: (__VLS_ctx.mdHeight),
    width: (__VLS_ctx.mdWidth),
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "xh-markdown-footer" },
});
const __VLS_8 = {}.NButton;
/** @type {[typeof __VLS_components.NButton, typeof __VLS_components.nButton, typeof __VLS_components.NButton, typeof __VLS_components.nButton, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    ...{ 'onClick': {} },
    quaternary: true,
}));
const __VLS_10 = __VLS_9({
    ...{ 'onClick': {} },
    quaternary: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
let __VLS_12;
let __VLS_13;
let __VLS_14;
const __VLS_15 = {
    onClick: (__VLS_ctx.prevND)
};
__VLS_11.slots.default;
var __VLS_11;
const __VLS_16 = {}.NButton;
/** @type {[typeof __VLS_components.NButton, typeof __VLS_components.nButton, typeof __VLS_components.NButton, typeof __VLS_components.nButton, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    ...{ 'onClick': {} },
    quaternary: true,
    type: "primary",
}));
const __VLS_18 = __VLS_17({
    ...{ 'onClick': {} },
    quaternary: true,
    type: "primary",
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
let __VLS_20;
let __VLS_21;
let __VLS_22;
const __VLS_23 = {
    onClick: (__VLS_ctx.nextND)
};
__VLS_19.slots.default;
var __VLS_19;
/** @type {__VLS_StyleScopedClasses['xh-markdown-container']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-markdown-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-markdown-header']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-markdown-title']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-markdown-date']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-markdown-footer']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            NScrollbar: NScrollbar,
            NButton: NButton,
            theme: theme,
            mdHeight: mdHeight,
            mdWidth: mdWidth,
            Id: Id,
            currentDate: currentDate,
            title: title,
            nextND: nextND,
            prevND: prevND,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=markdown.vue.js.map