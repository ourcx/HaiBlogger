const __VLS_exposed = {
    name: "FeiDivider",
};
defineExpose(__VLS_exposed);
const props = withDefaults(defineProps(), {
    dashed: false,
    orientation: "center",
    vertical: false,
});
const emit = defineEmits();
const handleClick = (event) => {
    emit("click", event);
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    dashed: false,
    orientation: "center",
    vertical: false,
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['fei-divider']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-divider']} */ ;
/** @type {__VLS_StyleScopedClasses['is-vertical']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-divider']} */ ;
/** @type {__VLS_StyleScopedClasses['is-vertical']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-divider']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-divider__text']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-divider']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-divider__text']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-divider--center']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-divider--left']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-divider--right']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-divider']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-divider']} */ ;
/** @type {__VLS_StyleScopedClasses['is-dashed']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-divider']} */ ;
/** @type {__VLS_StyleScopedClasses['is-vertical']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-divider']} */ ;
/** @type {__VLS_StyleScopedClasses['is-vertical']} */ ;
/** @type {__VLS_StyleScopedClasses['is-dashed']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onClick: (__VLS_ctx.handleClick) },
    ...{ class: ([
            'fei-divider',
            `fei-divider--${__VLS_ctx.orientation}`,
            { 'is-dashed': __VLS_ctx.dashed },
            { 'is-vertical': __VLS_ctx.vertical },
        ]) },
});
if (!__VLS_ctx.vertical && __VLS_ctx.$slots.default) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "fei-divider__text" },
    });
    var __VLS_0 = {};
}
/** @type {__VLS_StyleScopedClasses['fei-divider']} */ ;
/** @type {__VLS_StyleScopedClasses['is-dashed']} */ ;
/** @type {__VLS_StyleScopedClasses['is-vertical']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-divider__text']} */ ;
// @ts-ignore
var __VLS_1 = __VLS_0;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            handleClick: handleClick,
        };
    },
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {
            ...__VLS_exposed,
        };
    },
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Divider.vue.js.map