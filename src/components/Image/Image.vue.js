import RenderVnode from "../../hook/RenderVnode";
import { computed, watch, ref, } from "vue";
import imgStyle from "../../hook/WidthOrHeight";
defineOptions({
    name: "FeiImage",
});
const emits = defineEmits();
const props = withDefaults(defineProps(), {
    mode: "aspectFill",
    shape: "square",
    radius: 0,
    lazy: false,
    src: "",
    alt: "",
    width: "200px",
    height: "400px",
    descriation: false,
    screen: false,
    visible: false,
    placeholder: "正在加载...",
    fallback: "",
    lazyLoad: false
});
const ImgDescribeTitle = computed(() => {
    return props.descriation || props.title;
});
const ImgDescribeFooter = computed(() => {
    return props.descriation || props.footer;
});
const imgS = computed(() => {
    return imgStyle(props.width, props.height);
});
const img = ref(null);
//全屏显示
const ScreenImg = ref(false);
const openImg = () => {
    if (!props.screen)
        return;
    ScreenImg.value = true;
    emits("onClick");
};
//滚轮滑动，并放大缩小
const handleWheel = (event) => {
    const image = img.value;
    if (!image)
        return;
    // 获取当前 transform 的 scale 值
    const style = window.getComputedStyle(image);
    const transform = style.transform;
    let scale = transform && transform !== "none"
        ? parseFloat(transform.split("(")[1].split(",")[0])
        : 1;
    if (event.deltaY > 0) {
        scale *= 1.1;
    }
    else {
        scale /= 1.1;
    }
    image.style.transform = `scale(${scale})`;
    event.preventDefault();
};
//拖拽
//持续监听鼠标的点击和松开？，可以持续记录鼠标的移动，让图片随着鼠标去运动
const X = ref(0);
const Y = ref(0);
const dragStart = ref(false);
const drag = (e) => {
    if (!dragStart.value)
        return;
    e.preventDefault();
    const image = img.value;
    if (!image)
        return;
    X.value = e.clientX - image.width / 2;
    Y.value = e.clientY - image.height / 2;
    image.style.cursor = "move";
    image.style.position = "absolute";
    image.style.transition = "left 0.1s ease-in-out, top 0.1s ease-in-out";
    image.style.left = X.value + "px";
    image.style.top = Y.value + "px";
};
//关闭
const close = () => {
    ScreenImg.value = false;
    dragStart.value = false;
    emits("onClose", ScreenImg.value);
};
//监听加载状态
watch(() => props.visible, (newValue) => {
    if (newValue) {
        emits("onLoad");
    }
});
//懒加载
const lazyLoad = () => {
    if (props.lazyLoad) {
        return props.src;
    }
    else {
        return '';
    }
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    mode: "aspectFill",
    shape: "square",
    radius: 0,
    lazy: false,
    src: "",
    alt: "",
    width: "200px",
    height: "400px",
    descriation: false,
    screen: false,
    visible: false,
    placeholder: "正在加载...",
    fallback: "",
    lazyLoad: false
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['fei-image__img']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-image__img']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "fei-image" },
    ...{ style: (`width:${__VLS_ctx.imgS.width}; height:${__VLS_ctx.imgS.height}`) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "fei-image__placeholder" },
});
if (__VLS_ctx.ImgDescribeTitle) {
    const __VLS_0 = {}.RenderVnode;
    /** @type {[typeof __VLS_components.RenderVnode, ]} */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        vNode: (__VLS_ctx.title ?? ''),
    }));
    const __VLS_2 = __VLS_1({
        vNode: (__VLS_ctx.title ?? ''),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "fei-image__img" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ({ loading: __VLS_ctx.visible }) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ({ 'fei-image__loading': __VLS_ctx.visible }) },
});
if (__VLS_ctx.visible) {
    const __VLS_4 = {}.RenderVnode;
    /** @type {[typeof __VLS_components.RenderVnode, ]} */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
        vNode: (__VLS_ctx.placeholder ?? ''),
    }));
    const __VLS_6 = __VLS_5({
        vNode: (__VLS_ctx.placeholder ?? ''),
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
}
if (!__VLS_ctx.visible) {
    const __VLS_8 = {}.RenderVnode;
    /** @type {[typeof __VLS_components.RenderVnode, ]} */ ;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
        vNode: (__VLS_ctx.fallback ?? ''),
    }));
    const __VLS_10 = __VLS_9({
        vNode: (__VLS_ctx.fallback ?? ''),
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    ...{ onClick: (__VLS_ctx.openImg) },
    src: (__VLS_ctx.src),
    alt: (__VLS_ctx.alt),
    ...{ class: ({ [`fei-image--${__VLS_ctx.shape}`]: __VLS_ctx.shape, [`fei-image--${__VLS_ctx.mode}`]: __VLS_ctx.mode }) },
});
__VLS_asFunctionalDirective(__VLS_directives.vLazy)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.lazyLoad) }, null, null);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "fei-image__fallback" },
});
if (__VLS_ctx.ImgDescribeFooter) {
    const __VLS_12 = {}.RenderVnode;
    /** @type {[typeof __VLS_components.RenderVnode, ]} */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
        vNode: (__VLS_ctx.footer ?? ''),
    }));
    const __VLS_14 = __VLS_13({
        vNode: (__VLS_ctx.footer ?? ''),
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
}
if (__VLS_ctx.ScreenImg) {
    const __VLS_16 = {}.Teleport;
    /** @type {[typeof __VLS_components.Teleport, typeof __VLS_components.Teleport, ]} */ ;
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
        to: "body",
    }));
    const __VLS_18 = __VLS_17({
        to: "body",
    }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    __VLS_19.slots.default;
    const __VLS_20 = {}.TransitionGroup;
    /** @type {[typeof __VLS_components.TransitionGroup, typeof __VLS_components.transitionGroup, typeof __VLS_components.TransitionGroup, typeof __VLS_components.transitionGroup, ]} */ ;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
        name: "fei-image-spin",
    }));
    const __VLS_22 = __VLS_21({
        name: "fei-image-spin",
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    __VLS_23.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onWheel: (__VLS_ctx.handleWheel) },
        ...{ onMousedown: (...[$event]) => {
                if (!(__VLS_ctx.ScreenImg))
                    return;
                __VLS_ctx.dragStart = !__VLS_ctx.dragStart;
            } },
        ...{ onMousemove: (__VLS_ctx.drag) },
        ...{ class: "fei-image-Teleport" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "fei-image__header" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "fei-image__title" },
    });
    (__VLS_ctx.title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.ScreenImg))
                    return;
                __VLS_ctx.close();
            } },
        ...{ class: "fei-image__close" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onMousedown: (__VLS_ctx.drag) },
        ...{ class: "fei-image__body" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: (__VLS_ctx.src),
        alt: (__VLS_ctx.alt),
        ref: "img",
    });
    __VLS_asFunctionalDirective(__VLS_directives.vLazy)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.lazyLoad) }, null, null);
    /** @type {typeof __VLS_ctx.img} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "fei-image__footer" },
    });
    var __VLS_24 = {};
    (__VLS_ctx.footer);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onWheel: (__VLS_ctx.handleWheel) },
        ...{ class: "is-screen" },
    });
    var __VLS_23;
    var __VLS_19;
}
/** @type {__VLS_StyleScopedClasses['fei-image']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-image__placeholder']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-image__img']} */ ;
/** @type {__VLS_StyleScopedClasses['loading']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-image__loading']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-image__fallback']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-image-Teleport']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-image__header']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-image__title']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-image__close']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-image__body']} */ ;
/** @type {__VLS_StyleScopedClasses['fei-image__footer']} */ ;
/** @type {__VLS_StyleScopedClasses['is-screen']} */ ;
// @ts-ignore
var __VLS_25 = __VLS_24;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            RenderVnode: RenderVnode,
            ImgDescribeTitle: ImgDescribeTitle,
            ImgDescribeFooter: ImgDescribeFooter,
            imgS: imgS,
            img: img,
            ScreenImg: ScreenImg,
            openImg: openImg,
            handleWheel: handleWheel,
            dragStart: dragStart,
            drag: drag,
            close: close,
            lazyLoad: lazyLoad,
        };
    },
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Image.vue.js.map