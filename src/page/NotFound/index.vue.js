import { NResult, NButton, NImage } from "naive-ui";
import { useRouter } from "vue-router";
const router = useRouter();
const goHome = () => {
    router.push("/");
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['not-found-container']} */ ;
/** @type {__VLS_StyleScopedClasses['not-found-container']} */ ;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.FeiContainer;
/** @type {[typeof __VLS_components.FeiContainer, typeof __VLS_components.FeiContainer, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
const __VLS_5 = {}.NResult;
/** @type {[typeof __VLS_components.NResult, typeof __VLS_components.nResult, typeof __VLS_components.NResult, typeof __VLS_components.nResult, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    status: "404",
    title: "404 资源不存在",
    description: "生命不是轨道是旷野，但是我的博客是404",
    size: "huge",
}));
const __VLS_7 = __VLS_6({
    status: "404",
    title: "404 资源不存在",
    description: "生命不是轨道是旷野，但是我的博客是404",
    size: "huge",
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_8.slots.default;
{
    const { icon: __VLS_thisSlot } = __VLS_8.slots;
    const __VLS_9 = {}.NImage;
    /** @type {[typeof __VLS_components.NImage, typeof __VLS_components.nImage, ]} */ ;
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
        ...{ class: "custom-image" },
        previewDisabled: true,
        width: "300",
        src: "https://s2.loli.net/2025/02/02/ELbK6urJqYvgBPj.jpg",
    }));
    const __VLS_11 = __VLS_10({
        ...{ class: "custom-image" },
        previewDisabled: true,
        width: "300",
        src: "https://s2.loli.net/2025/02/02/ELbK6urJqYvgBPj.jpg",
    }, ...__VLS_functionalComponentArgsRest(__VLS_10));
}
{
    const { footer: __VLS_thisSlot } = __VLS_8.slots;
    const __VLS_13 = {}.NButton;
    /** @type {[typeof __VLS_components.NButton, typeof __VLS_components.nButton, typeof __VLS_components.NButton, typeof __VLS_components.nButton, ]} */ ;
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
        ...{ 'onClick': {} },
        type: "primary",
        size: "large",
        round: true,
    }));
    const __VLS_15 = __VLS_14({
        ...{ 'onClick': {} },
        type: "primary",
        size: "large",
        round: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    let __VLS_17;
    let __VLS_18;
    let __VLS_19;
    const __VLS_20 = {
        onClick: (__VLS_ctx.goHome)
    };
    __VLS_16.slots.default;
    var __VLS_16;
}
var __VLS_8;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['custom-image']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            NResult: NResult,
            NButton: NButton,
            NImage: NImage,
            goHome: goHome,
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