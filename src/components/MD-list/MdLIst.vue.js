import { useRouter } from "vue-router";
const router = useRouter();
const props = withDefaults(defineProps(), {
    category: "",
    tags: () => [],
});
const clickRouter = () => {
    let title = props.post.title;
    router.push({
        name: "markdown",
        params: { id: title },
    });
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    category: "",
    tags: () => [],
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['blog-post-item']} */ ;
/** @type {__VLS_StyleScopedClasses['post-content']} */ ;
/** @type {__VLS_StyleScopedClasses['markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['markdown-body']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onClick: (__VLS_ctx.clickRouter) },
    ...{ class: "blog-post-item" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "post-content" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "markdown-body" },
});
__VLS_asFunctionalDirective(__VLS_directives.vHtml)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.post.excerpt) }, null, null);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "post-meta" },
});
if (__VLS_ctx.post.date) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.post.date);
}
if (__VLS_ctx.category) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "separator" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.category);
}
if (__VLS_ctx.tags && __VLS_ctx.tags.length > 0) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "separator" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "meta-tags" },
    });
    for (const [tag, index] of __VLS_getVForSourceType((__VLS_ctx.tags))) {
        (tag);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
            href: "#",
            ...{ class: "tag-link" },
        });
        (tag);
        if (index < __VLS_ctx.tags.length - 1) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                ...{ class: "tag-separator" },
            });
        }
    }
}
/** @type {__VLS_StyleScopedClasses['blog-post-item']} */ ;
/** @type {__VLS_StyleScopedClasses['post-content']} */ ;
/** @type {__VLS_StyleScopedClasses['markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['post-meta']} */ ;
/** @type {__VLS_StyleScopedClasses['separator']} */ ;
/** @type {__VLS_StyleScopedClasses['separator']} */ ;
/** @type {__VLS_StyleScopedClasses['meta-tags']} */ ;
/** @type {__VLS_StyleScopedClasses['tag-link']} */ ;
/** @type {__VLS_StyleScopedClasses['tag-separator']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            clickRouter: clickRouter,
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
//# sourceMappingURL=MdLIst.vue.js.map