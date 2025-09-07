import { NConfigProvider } from "naive-ui";
import { themeOverrides } from "@/style/naive-ui-theme";
import { themeOverridesDark } from "@/style/navie-dark-theme";
import Menu from "@/components/Menu/Menu.vue";
import { useDynamicStore } from './store/index';
import { computed } from "vue";
const dynamicStore = useDynamicStore();
dynamicStore.initData();
const theme = computed(() => {
    return dynamicStore.theme === 'dark' ? themeOverridesDark : themeOverrides;
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "xh" },
});
const __VLS_0 = {}.NConfigProvider;
/** @type {[typeof __VLS_components.NConfigProvider, typeof __VLS_components.nConfigProvider, typeof __VLS_components.NConfigProvider, typeof __VLS_components.nConfigProvider, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    themeOverrides: (__VLS_ctx.theme),
}));
const __VLS_2 = __VLS_1({
    themeOverrides: (__VLS_ctx.theme),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
/** @type {[typeof Menu, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(Menu, new Menu({}));
const __VLS_5 = __VLS_4({}, ...__VLS_functionalComponentArgsRest(__VLS_4));
const __VLS_7 = {}.RouterView;
/** @type {[typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({}));
const __VLS_9 = __VLS_8({}, ...__VLS_functionalComponentArgsRest(__VLS_8));
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "area" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "circles" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
/** @type {__VLS_StyleScopedClasses['xh']} */ ;
/** @type {__VLS_StyleScopedClasses['area']} */ ;
/** @type {__VLS_StyleScopedClasses['circles']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            NConfigProvider: NConfigProvider,
            Menu: Menu,
            theme: theme,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=App.vue.js.map