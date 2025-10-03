import Sidebar from '@/components/shared/sidebar/Sidebar.vue';
import { useSidebarStore } from '@/stores/sidebar/useSidebarStore';
const sidebar = useSidebarStore();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "min-h-screen bg-base-100 transition-colors duration-300 flex" },
});
/** @type {[typeof Sidebar, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Sidebar, new Sidebar({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_elements.main, __VLS_elements.main)({
    ...{ class: ([
            'flex-1 p-4 transition-all duration-300 ease-in-out',
            // 📱 Mobile → ocupa todo el ancho, sin margen
            __VLS_ctx.sidebar.isMobile
                ? 'ml-0 w-full'
                : __VLS_ctx.sidebar.isExpanded
                    ? // 🖥️ Escritorio expandido
                        'lg:ml-72'
                    : // 🖥️ Escritorio colapsado
                        'lg:ml-20',
        ]) },
});
// @ts-ignore
[sidebar, sidebar,];
const __VLS_4 = {}.RouterView;
/** @type {[typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ]} */ ;
// @ts-ignore
RouterView;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({}));
const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
/** @type {__VLS_StyleScopedClasses['min-h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-base-100']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['ease-in-out']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
