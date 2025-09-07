import { computed } from 'vue';
const props = defineProps({
    color: {
        type: String,
        default: '#9c3c3c'
    },
    fontSize: {
        type: String,
        default: '0.9375rem'
    },
    fontWeight: {
        type: String,
        default: '700'
    },
    underline: {
        type: Boolean,
        default: false
    },
    underlineColor: {
        type: String,
        default: ''
    }
});
const styleProps = computed(() => ({
    '--xh-color': props.color,
    '--xh-font-size': props.fontSize,
    '--xh-font-weight': props.fontWeight,
    '--xh-underline-color': props.underlineColor || props.color
}));
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "xh-light" },
    ...{ class: ({ 'underline': __VLS_ctx.underline }) },
    ...{ style: (__VLS_ctx.styleProps) },
});
var __VLS_0 = {};
/** @type {__VLS_StyleScopedClasses['xh-light']} */ ;
/** @type {__VLS_StyleScopedClasses['underline']} */ ;
// @ts-ignore
var __VLS_1 = __VLS_0;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(props),
            ...props,
            styleProps: styleProps,
        };
    },
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(props),
            ...props,
        };
    },
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Light.vue.js.map