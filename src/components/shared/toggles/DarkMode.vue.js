import { computed } from 'vue';
import { useThemeStore } from '@/stores/theme/useThemeStore';
import { IconSun, IconMoonStars } from '@tabler/icons-vue';
const themeStore = useThemeStore();
const isDark = computed(() => themeStore.theme === 'dim');
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (__VLS_ctx.themeStore.toggleTheme) },
    'aria-label': (__VLS_ctx.isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'),
    ...{ class: "p-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" },
    ...{ class: (__VLS_ctx.isDark
            ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white hover:from-gray-800 hover:to-gray-700'
            : 'bg-gradient-to-br from-gray-700 to-gray-600 text-white hover:from-gray-600 hover:to-gray-500') },
});
// @ts-ignore
[themeStore, isDark, isDark,];
const __VLS_0 = {}.transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ]} */ ;
// @ts-ignore
Transition;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    name: "fade-scale",
    mode: "out-in",
}));
const __VLS_2 = __VLS_1({
    name: "fade-scale",
    mode: "out-in",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_4 } = __VLS_3.slots;
if (!__VLS_ctx.isDark) {
    // @ts-ignore
    [isDark,];
    const __VLS_5 = {}.IconSun;
    /** @type {[typeof __VLS_components.IconSun, ]} */ ;
    // @ts-ignore
    IconSun;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
        key: "sun",
        ...{ class: "h-6 w-6 animate-pulse transition-transform duration-300" },
    }));
    const __VLS_7 = __VLS_6({
        key: "sun",
        ...{ class: "h-6 w-6 animate-pulse transition-transform duration-300" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
}
else {
    const __VLS_10 = {}.IconMoonStars;
    /** @type {[typeof __VLS_components.IconMoonStars, ]} */ ;
    // @ts-ignore
    IconMoonStars;
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({
        key: "moon",
        ...{ class: "h-6 w-6 animate-spin-slow transition-transform duration-500" },
    }));
    const __VLS_12 = __VLS_11({
        key: "moon",
        ...{ class: "h-6 w-6 animate-spin-slow transition-transform duration-500" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_11));
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['p-3']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:shadow-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:outline-none']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-2']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-offset-2']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-indigo-500']} */ ;
/** @type {__VLS_StyleScopedClasses['h-6']} */ ;
/** @type {__VLS_StyleScopedClasses['w-6']} */ ;
/** @type {__VLS_StyleScopedClasses['animate-pulse']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-transform']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['h-6']} */ ;
/** @type {__VLS_StyleScopedClasses['w-6']} */ ;
/** @type {__VLS_StyleScopedClasses['animate-spin-slow']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-transform']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-500']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
