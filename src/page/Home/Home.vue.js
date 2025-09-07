import { NAvatar, NDivider, NHighlight, NScrollbar } from "naive-ui";
import { ref, computed } from "vue";
import { useThemeVars } from "naive-ui";
import Card from "@/components/Card/Card.vue";
import { useDynamicStore } from "@/store";
import TimeLine from "@/components/TImeLine/TimeLine.vue";
const dynamicStore = useDynamicStore();
const themeVars = useThemeVars();
const text = ref("近期动态");
const patterns = ref(["近期动态", "随笔"]);
const Nstyle = ref({
    padding: "0 6px",
    borderRadius: themeVars.value.borderRadius,
    display: "inline-block",
    color: themeVars.value.baseColor,
    background: themeVars.value.primaryColor,
    transition: "all .3s ease-in-out",
    cursor: "pointer",
});
const SocialIndex = ref(1);
const SocialData = computed(() => {
    if (SocialIndex.value === 1) {
        return dynamicStore.data;
    }
    else if (SocialIndex.value === 2) {
        return [{ title: "为什么写博客", content: "content", links: "" }];
    }
});
const SocialClick = () => {
    SocialIndex.value++;
    text.value = patterns.value[SocialIndex.value - 1];
    if (SocialIndex.value > 5) {
        SocialIndex.value = 1;
    }
};
const SocialMove = () => {
    Nstyle.value.background = themeVars.value.primaryColorSuppl;
};
const SocialLeave = () => {
    Nstyle.value.background = themeVars.value.primaryColor;
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['xh-tag']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-home']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-info-container']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-tags']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-tag']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-social']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-avatar-container']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-name']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-job']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-bio']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-tags']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-social']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-name']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-job']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-bio']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-home-right']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-info-container']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-home']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-home-right']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-home-right']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "xh-home" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "xh-info-container" },
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
    ...{ class: "xh-avatar-container" },
});
const __VLS_4 = {}.NAvatar;
/** @type {[typeof __VLS_components.NAvatar, typeof __VLS_components.nAvatar, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    round: true,
    size: (80),
    src: "https://s2.loli.net/2025/02/02/ELbK6urJqYvgBPj.jpg",
    ...{ class: "xh-avatar" },
}));
const __VLS_6 = __VLS_5({
    round: true,
    size: (80),
    src: "https://s2.loli.net/2025/02/02/ELbK6urJqYvgBPj.jpg",
    ...{ class: "xh-avatar" },
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "xh-info-text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "xh-name" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "xh-job" },
});
const __VLS_8 = {}.Light;
/** @type {[typeof __VLS_components.Light, typeof __VLS_components.Light, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({}));
const __VLS_10 = __VLS_9({}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_11.slots.default;
var __VLS_11;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "xh-tags" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "xh-tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "xh-tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "xh-tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "xh-tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "xh-tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "xh-tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "xh-tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "xh-tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "xh-tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "xh-tag" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "xh-bio" },
});
const __VLS_12 = {}.Light;
/** @type {[typeof __VLS_components.Light, typeof __VLS_components.Light, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_15.slots.default;
var __VLS_15;
const __VLS_16 = {}.Light;
/** @type {[typeof __VLS_components.Light, typeof __VLS_components.Light, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({}));
const __VLS_18 = __VLS_17({}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_19.slots.default;
var __VLS_19;
const __VLS_20 = {}.Light;
/** @type {[typeof __VLS_components.Light, typeof __VLS_components.Light, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({}));
const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
__VLS_23.slots.default;
var __VLS_23;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "xh-bio" },
});
const __VLS_24 = {}.NDivider;
/** @type {[typeof __VLS_components.NDivider, typeof __VLS_components.nDivider, typeof __VLS_components.NDivider, typeof __VLS_components.nDivider, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_27.slots.default;
const __VLS_28 = {}.transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    name: "flip",
    mode: "out-in",
}));
const __VLS_30 = __VLS_29({
    name: "flip",
    mode: "out-in",
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
__VLS_31.slots.default;
const __VLS_32 = {}.NHighlight;
/** @type {[typeof __VLS_components.NHighlight, typeof __VLS_components.nHighlight, ]} */ ;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
    ...{ 'onClick': {} },
    ...{ 'onMouseenter': {} },
    ...{ 'onMouseleave': {} },
    key: (__VLS_ctx.text),
    text: (__VLS_ctx.text),
    patterns: (__VLS_ctx.patterns),
    highlightStyle: (__VLS_ctx.Nstyle),
}));
const __VLS_34 = __VLS_33({
    ...{ 'onClick': {} },
    ...{ 'onMouseenter': {} },
    ...{ 'onMouseleave': {} },
    key: (__VLS_ctx.text),
    text: (__VLS_ctx.text),
    patterns: (__VLS_ctx.patterns),
    highlightStyle: (__VLS_ctx.Nstyle),
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
let __VLS_36;
let __VLS_37;
let __VLS_38;
const __VLS_39 = {
    onClick: (__VLS_ctx.SocialClick)
};
const __VLS_40 = {
    onMouseenter: (__VLS_ctx.SocialMove)
};
const __VLS_41 = {
    onMouseleave: (__VLS_ctx.SocialLeave)
};
var __VLS_35;
var __VLS_31;
var __VLS_27;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "xh-social-container" },
});
const __VLS_42 = {}.NScrollbar;
/** @type {[typeof __VLS_components.NScrollbar, typeof __VLS_components.nScrollbar, typeof __VLS_components.NScrollbar, typeof __VLS_components.nScrollbar, ]} */ ;
// @ts-ignore
const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({
    ...{ style: {} },
}));
const __VLS_44 = __VLS_43({
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_43));
__VLS_45.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "xh-social" },
});
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.SocialData))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "card" },
    });
    /** @type {[typeof Card, ]} */ ;
    // @ts-ignore
    const __VLS_46 = __VLS_asFunctionalComponent(Card, new Card({
        title: (item.title),
        content: (item.excerpt),
    }));
    const __VLS_47 = __VLS_46({
        title: (item.title),
        content: (item.excerpt),
    }, ...__VLS_functionalComponentArgsRest(__VLS_46));
}
var __VLS_45;
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "xh-home-right" },
});
/** @type {[typeof TimeLine, ]} */ ;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent(TimeLine, new TimeLine({}));
const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
/** @type {__VLS_StyleScopedClasses['xh-home']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-info-container']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-avatar-container']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-avatar']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-info-text']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-name']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-job']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-tags']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-tag']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-tag']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-tag']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-tag']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-tag']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-tag']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-tag']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-tag']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-tag']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-tag']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-bio']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-bio']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-social-container']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-social']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['xh-home-right']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            NAvatar: NAvatar,
            NDivider: NDivider,
            NHighlight: NHighlight,
            NScrollbar: NScrollbar,
            Card: Card,
            TimeLine: TimeLine,
            text: text,
            patterns: patterns,
            Nstyle: Nstyle,
            SocialData: SocialData,
            SocialClick: SocialClick,
            SocialMove: SocialMove,
            SocialLeave: SocialLeave,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Home.vue.js.map