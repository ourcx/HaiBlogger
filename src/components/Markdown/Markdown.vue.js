import { ref, watchEffect, onMounted } from "vue";
import MarkdownIt from "markdown-it";
import { useDynamicStore } from "@/store";
const dynamicStore = useDynamicStore();
const props = withDefaults(defineProps(), {
    theme: "github-dark-dimmed",
    src: "",
    content: "",
    height: "auto",
    width: "auto",
});
const mdContent = ref("");
const renderMarkdown = ref("");
const error = ref(null);
onMounted(async () => {
    const md = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
        highlight: (code, lang) => {
            return code;
        },
    });
    watchEffect(async () => {
        console.log("props.src", props.src);
        if (props.src) {
            try {
                mdContent.value = dynamicStore.data.filter((item) => item.title === props.src)[0].content;
                renderMarkdown.value = md.render(mdContent.value);
                error.value = null;
            }
            catch (e) {
                error.value = e;
                const err = `# Error加载失败\n\n**错误**${error.value}`;
                renderMarkdown.value = md.render(err);
                console.error(e);
            }
        }
        else if (props.content) {
            try {
                renderMarkdown.value = md.render(props.content);
                error.value = null;
            }
            catch (e) {
                error.value = e;
                const err = `# Error加载失败\n\n**错误**${error.value}`;
                renderMarkdown.value = md.render(err);
                console.error(e);
            }
        }
    });
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    theme: "github-dark-dimmed",
    src: "",
    content: "",
    height: "auto",
    width: "auto",
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "fei-markdown" },
    ...{ style: (`${props.width ? `width:${props.width}px;` : ''}` +
            `${props.height ? `height:${props.height}px;` : ''}`) },
});
if (__VLS_ctx.renderMarkdown) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "fei-markdown-body" },
    });
    __VLS_asFunctionalDirective(__VLS_directives.vHtml)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.renderMarkdown) }, null, null);
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
}
/** @type {__VLS_StyleScopedClasses['fei-markdown']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-markdown-body']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            renderMarkdown: renderMarkdown,
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
//# sourceMappingURL=Markdown.vue.js.map