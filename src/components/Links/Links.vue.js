import Image from "@/components/Image/Image.vue";
defineOptions({
    name: "FeiLinks",
});
const props = withDefaults(defineProps(), {
    name: "空白",
    description: "无描述",
    src: "https://picsum.photos/200/300",
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    name: "空白",
    description: "无描述",
    src: "https://picsum.photos/200/300",
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['fei-link']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-link']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-link__title']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ class: "fei-link" },
    target: "_blank",
    rel: "nofollow noopener",
    href: (__VLS_ctx.href),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "fei-link__image-wrapper" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "fei-link__image-aspect" },
});
/** @type {[typeof Image, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Image, new Image({
    src: (__VLS_ctx.src),
    mode: "aspectFill",
    shape: "circle",
    screen: (false),
    width: "40px",
    height: "50px",
}));
const __VLS_1 = __VLS_0({
    src: (__VLS_ctx.src),
    mode: "aspectFill",
    shape: "circle",
    screen: (false),
    width: "40px",
    height: "50px",
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "fei-link__text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "fei-link__title" },
});
(__VLS_ctx.name);
if (__VLS_ctx.description) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "fei-link__description" },
    });
    (__VLS_ctx.description);
}
if (__VLS_ctx.description) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "fei-link__separator" },
    });
}
/** @type {__VLS_StyleScopedClasses['fei-link']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-link__image-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-link__image-aspect']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-link__text']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-link__title']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-link__description']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-link__separator']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Image: Image,
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
//# sourceMappingURL=Links.vue.js.map