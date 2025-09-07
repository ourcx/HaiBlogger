import { NCard } from "naive-ui";
const props = defineProps({
    title: {
        type: String,
        default: "为什么写博客",
    },
    content: {
        type: String,
        default: "",
    },
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['markdown-renderer']} */ ;
/** @type {__VLS_StyleScopedClasses['markdown-renderer']} */ ;
/** @type {__VLS_StyleScopedClasses['markdown-renderer']} */ ;
/** @type {__VLS_StyleScopedClasses['markdown-renderer']} */ ;
/** @type {__VLS_StyleScopedClasses['markdown-renderer']} */ ;
/** @type {__VLS_StyleScopedClasses['markdown-renderer']} */ ;
/** @type {__VLS_StyleScopedClasses['markdown-renderer']} */ ;
/** @type {__VLS_StyleScopedClasses['markdown-renderer']} */ ;
/** @type {__VLS_StyleScopedClasses['markdown-renderer']} */ ;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.NCard;
/** @type {[typeof __VLS_components.NCard, typeof __VLS_components.nCard, typeof __VLS_components.NCard, typeof __VLS_components.nCard, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    title: (props.title),
    embedded: true,
    bordered: (false),
    ...{ class: "markdown-renderer" },
}));
const __VLS_2 = __VLS_1({
    title: (props.title),
    embedded: true,
    bordered: (false),
    ...{ class: "markdown-renderer" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalDirective(__VLS_directives.vHtml)(null, { ...__VLS_directiveBindingRestFields, value: (props.content) }, null, null);
var __VLS_4 = {};
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['markdown-renderer']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            NCard: NCard,
        };
    },
    props: {
        title: {
            type: String,
            default: "为什么写博客",
        },
        content: {
            type: String,
            default: "",
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        title: {
            type: String,
            default: "为什么写博客",
        },
        content: {
            type: String,
            default: "",
        },
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Card.vue.js.map