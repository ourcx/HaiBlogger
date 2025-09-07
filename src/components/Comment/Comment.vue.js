import Image from "../Image/Image.vue";
import { computed } from "vue";
const props = withDefaults(defineProps(), {
    avatar: "https://s2.loli.net/2025/05/29/HSaD38fFVYmiWIo.png",
    content: "内容",
    author: "作者",
    datetime: "2021-01-01",
    type: "primary",
    quote: () => ({}),
    reply: () => ({}),
});
defineOptions({
    name: "FeiComment",
});
const quoterOrReply = computed(() => {
    return props.quote.content;
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    avatar: "https://s2.loli.net/2025/05/29/HSaD38fFVYmiWIo.png",
    content: "内容",
    author: "作者",
    datetime: "2021-01-01",
    type: "primary",
    quote: () => ({}),
    reply: () => ({}),
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "fei-comment" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "fei-avart" },
});
/** @type {[typeof Image, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Image, new Image({
    src: (props.avatar),
    shape: "circle",
    mode: "aspectFill",
    width: "50px",
    height: "10%",
}));
const __VLS_1 = __VLS_0({
    src: (props.avatar),
    shape: "circle",
    mode: "aspectFill",
    width: "50px",
    height: "10%",
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "fei-content" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "fei-content__title" },
    ...{ class: ({ [`fei-content__title--${__VLS_ctx.type}`]: __VLS_ctx.type }) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "fei-author" },
});
(__VLS_ctx.author);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "fei-datetime" },
});
(__VLS_ctx.datetime);
var __VLS_3 = {};
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "fei-text" },
});
(__VLS_ctx.content);
var __VLS_5 = {};
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "fei-actions" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "fei-action__replay" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "fei-action__editer" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "fei-action__delete" },
});
if (__VLS_ctx.quoterOrReply) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "fei-quote" },
        ...{ class: ({ [`fei-quote--${__VLS_ctx.type}`]: __VLS_ctx.type }) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "fei-quote__content" },
    });
    (__VLS_ctx.quote.content);
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "fei-reply" },
        ...{ class: ({ [`fei-reply--${__VLS_ctx.type}`]: __VLS_ctx.type }) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "fei-reply__content" },
    });
    (__VLS_ctx.reply.content);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "fei-reply__author" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "fei-reply__author-name" },
    });
    (__VLS_ctx.reply.author);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "fei-reply__datetime" },
    });
    (__VLS_ctx.reply.datetime);
}
/** @type {__VLS_StyleScopedClasses['fei-comment']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-avart']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-content']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-content__title']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-author']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-datetime']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-text']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-actions']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-action__replay']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-action__editer']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-action__delete']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-quote']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-quote__content']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-reply']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-reply__content']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-reply__author']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-reply__author-name']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-reply__datetime']} */ ;
// @ts-ignore
var __VLS_4 = __VLS_3, __VLS_6 = __VLS_5;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Image: Image,
            quoterOrReply: quoterOrReply,
        };
    },
    __typeProps: {},
    props: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    props: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Comment.vue.js.map