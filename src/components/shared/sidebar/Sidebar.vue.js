import { reactive } from 'vue';
import { IconMenu2, IconHome2, IconHeartHandshake, IconUsers, IconHomeHeart, IconChartHistogram, IconAdjustments, IconLogout, IconLayout2, IconX, IconUserShield, IconCalendarEvent, } from '@tabler/icons-vue';
import DarkMode from '../toggles/DarkMode.vue';
import { useSidebarStore } from '@/stores/sidebar/useSidebarStore';
const sidebar = useSidebarStore();
// Simulación de datos de usuario
const user = reactive({
    name: 'Kevin Villegas',
    role: 'Administrador',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
});
// Menú
const menuItems = [
    { name: 'Dashboard', icon: IconHome2, link: '/' },
    { name: 'Beneficios', icon: IconHeartHandshake, link: '/beneficios' },
    { name: 'Afiliados', icon: IconUsers, link: '/afiliados' },
    { name: 'Familias', icon: IconHomeHeart, link: '/familias' },
    { name: 'Delegados', icon: IconUserShield, link: '/delegados' },
    { name: 'Eventos', icon: IconCalendarEvent, link: '/eventos' },
    { name: 'Reportes', icon: IconChartHistogram, link: '/reportes' },
    { name: 'Configuración', icon: IconAdjustments, link: '/configuracion' },
];
const handleNavClick = () => {
    if (sidebar.isMobile)
        sidebar.closeSidebar();
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
if (__VLS_ctx.sidebar.isMobile) {
    // @ts-ignore
    [sidebar,];
    __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
        ...{ onClick: (__VLS_ctx.sidebar.toggleSidebar) },
        ...{ class: "fixed top-4 left-4 z-50 p-3 bg-base-100/80 backdrop-blur-xl shadow-lg rounded-2xl hover:bg-base-200 transition-colors" },
        'aria-label': "Abrir/Cerrar menú",
    });
    // @ts-ignore
    [sidebar,];
    const __VLS_0 = ((__VLS_ctx.sidebar.isOpen ? __VLS_ctx.IconX : __VLS_ctx.IconMenu2));
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ class: "h-6 w-6 text-base-content" },
    }));
    const __VLS_2 = __VLS_1({
        ...{ class: "h-6 w-6 text-base-content" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    // @ts-ignore
    [sidebar, IconX, IconMenu2,];
}
const __VLS_5 = {}.Transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.Transition, ]} */ ;
// @ts-ignore
Transition;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    enterActiveClass: "transition-transform duration-300",
    leaveActiveClass: "transition-transform duration-300",
    enterFromClass: "-translate-x-full",
    enterToClass: "translate-x-0",
    leaveFromClass: "translate-x-0",
    leaveToClass: "-translate-x-full",
}));
const __VLS_7 = __VLS_6({
    enterActiveClass: "transition-transform duration-300",
    leaveActiveClass: "transition-transform duration-300",
    enterFromClass: "-translate-x-full",
    enterToClass: "translate-x-0",
    leaveFromClass: "translate-x-0",
    leaveToClass: "-translate-x-full",
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
const { default: __VLS_9 } = __VLS_8.slots;
if (__VLS_ctx.sidebar.isOpen || !__VLS_ctx.sidebar.isMobile) {
    // @ts-ignore
    [sidebar, sidebar,];
    __VLS_asFunctionalElement(__VLS_elements.aside, __VLS_elements.aside)({
        ...{ class: ([
                'fixed top-0 left-0 h-screen flex flex-col shadow-xl z-50 border-r border-base-300/40 backdrop-blur-2xl bg-base-200/80',
                __VLS_ctx.sidebar.isMobile ? 'w-72' : __VLS_ctx.sidebar.isExpanded ? 'w-72' : 'w-20',
                !__VLS_ctx.sidebar.initialLoad && !__VLS_ctx.sidebar.isMobile
                    ? 'transition-[width] duration-300 ease-in-out'
                    : '',
            ]) },
    });
    // @ts-ignore
    [sidebar, sidebar, sidebar, sidebar,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "flex items-center justify-between p-4 border-b border-base-300/40 min-h-[64px] relative" },
    });
    if (__VLS_ctx.sidebar.isExpanded || __VLS_ctx.sidebar.isMobile) {
        // @ts-ignore
        [sidebar, sidebar,];
        __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
            ...{ class: "font-extrabold text-lg tracking-wide text-base-content transition-opacity duration-200" },
            ...{ class: ({ 'opacity-0': __VLS_ctx.sidebar.initialLoad }) },
        });
        // @ts-ignore
        [sidebar,];
    }
    if (!__VLS_ctx.sidebar.isMobile) {
        // @ts-ignore
        [sidebar,];
        __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
            ...{ onClick: (__VLS_ctx.sidebar.toggleExpand) },
            ...{ class: "p-2 rounded-lg hover:bg-base-300/70 transition-colors" },
            ...{ class: ({ 'mx-auto': !__VLS_ctx.sidebar.isExpanded }) },
            title: "Expandir/Colapsar menú",
        });
        // @ts-ignore
        [sidebar, sidebar,];
        const __VLS_10 = {}.IconLayout2;
        /** @type {[typeof __VLS_components.IconLayout2, ]} */ ;
        // @ts-ignore
        IconLayout2;
        // @ts-ignore
        const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({
            ...{ class: ([
                    'h-5 w-5 text-base-content transition-transform duration-300',
                    !__VLS_ctx.sidebar.isExpanded ? 'rotate-90' : '',
                ]) },
        }));
        const __VLS_12 = __VLS_11({
            ...{ class: ([
                    'h-5 w-5 text-base-content transition-transform duration-300',
                    !__VLS_ctx.sidebar.isExpanded ? 'rotate-90' : '',
                ]) },
        }, ...__VLS_functionalComponentArgsRest(__VLS_11));
        // @ts-ignore
        [sidebar,];
    }
    if (__VLS_ctx.sidebar.isMobile) {
        // @ts-ignore
        [sidebar,];
        __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
            ...{ onClick: (__VLS_ctx.sidebar.closeSidebar) },
            ...{ class: "absolute right-4 top-4 p-2 rounded-lg hover:bg-base-300 transition-colors" },
            title: "Cerrar menú",
        });
        // @ts-ignore
        [sidebar,];
        const __VLS_15 = {}.IconX;
        /** @type {[typeof __VLS_components.IconX, ]} */ ;
        // @ts-ignore
        IconX;
        // @ts-ignore
        const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
            ...{ class: "h-5 w-5 text-base-content" },
        }));
        const __VLS_17 = __VLS_16({
            ...{ class: "h-5 w-5 text-base-content" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    }
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: ([
                'flex flex-col items-center p-5 border-b border-base-300/40',
                !__VLS_ctx.sidebar.isExpanded && !__VLS_ctx.sidebar.isMobile ? 'py-3' : '',
            ]) },
    });
    // @ts-ignore
    [sidebar, sidebar,];
    __VLS_asFunctionalElement(__VLS_elements.img)({
        src: (__VLS_ctx.user.avatar),
        alt: "Avatar",
        ...{ class: ([
                'rounded-full border-2 border-primary shadow-lg object-cover transition-all duration-300',
                'hover:scale-105 hover:shadow-primary/40',
                __VLS_ctx.sidebar.isExpanded || __VLS_ctx.sidebar.isMobile ? 'h-16 w-16' : 'h-10 w-10',
            ]) },
    });
    // @ts-ignore
    [sidebar, sidebar, user,];
    const __VLS_20 = {}.Transition;
    /** @type {[typeof __VLS_components.Transition, typeof __VLS_components.Transition, ]} */ ;
    // @ts-ignore
    Transition;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
        enterActiveClass: "transition-opacity duration-300 delay-100",
        leaveActiveClass: "transition-opacity duration-200",
        enterFromClass: "opacity-0",
        leaveToClass: "opacity-0",
    }));
    const __VLS_22 = __VLS_21({
        enterActiveClass: "transition-opacity duration-300 delay-100",
        leaveActiveClass: "transition-opacity duration-200",
        enterFromClass: "opacity-0",
        leaveToClass: "opacity-0",
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    const { default: __VLS_24 } = __VLS_23.slots;
    if ((__VLS_ctx.sidebar.isExpanded || __VLS_ctx.sidebar.isMobile) && !__VLS_ctx.sidebar.initialLoad) {
        // @ts-ignore
        [sidebar, sidebar, sidebar,];
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "mt-3 text-center" },
        });
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
            ...{ class: "font-semibold text-base-content text-sm" },
        });
        (__VLS_ctx.user.name);
        // @ts-ignore
        [user,];
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
            ...{ class: "text-xs text-base-content/60" },
        });
        (__VLS_ctx.user.role);
        // @ts-ignore
        [user,];
    }
    var __VLS_23;
    __VLS_asFunctionalElement(__VLS_elements.nav, __VLS_elements.nav)({
        ...{ class: "flex flex-col flex-1 px-3 py-4 space-y-1" },
    });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.menuItems))) {
        // @ts-ignore
        [menuItems,];
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            key: (item.name),
            ...{ class: "relative" },
        });
        const __VLS_25 = {}.RouterLink;
        /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
        // @ts-ignore
        RouterLink;
        // @ts-ignore
        const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
            ...{ 'onClick': {} },
            to: (item.link),
            ...{ class: ([
                    'flex items-center gap-3 py-3 rounded-xl transition-all duration-200 group relative',
                    'hover:bg-primary/90 hover:text-primary-content',
                    __VLS_ctx.sidebar.isExpanded || __VLS_ctx.sidebar.isMobile ? 'px-4' : 'px-2 justify-center',
                ]) },
        }));
        const __VLS_27 = __VLS_26({
            ...{ 'onClick': {} },
            to: (item.link),
            ...{ class: ([
                    'flex items-center gap-3 py-3 rounded-xl transition-all duration-200 group relative',
                    'hover:bg-primary/90 hover:text-primary-content',
                    __VLS_ctx.sidebar.isExpanded || __VLS_ctx.sidebar.isMobile ? 'px-4' : 'px-2 justify-center',
                ]) },
        }, ...__VLS_functionalComponentArgsRest(__VLS_26));
        let __VLS_29;
        let __VLS_30;
        const __VLS_31 = ({ click: {} },
            { onClick: (__VLS_ctx.handleNavClick) });
        const { default: __VLS_32 } = __VLS_28.slots;
        // @ts-ignore
        [sidebar, sidebar, handleNavClick,];
        const __VLS_33 = ((item.icon));
        // @ts-ignore
        const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({
            ...{ class: "h-6 w-6 flex-shrink-0" },
        }));
        const __VLS_35 = __VLS_34({
            ...{ class: "h-6 w-6 flex-shrink-0" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_34));
        const __VLS_38 = {}.Transition;
        /** @type {[typeof __VLS_components.Transition, typeof __VLS_components.Transition, ]} */ ;
        // @ts-ignore
        Transition;
        // @ts-ignore
        const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({
            enterActiveClass: "transition-opacity duration-200 delay-100",
            leaveActiveClass: "transition-opacity duration-200",
            enterFromClass: "opacity-0",
            leaveToClass: "opacity-0",
        }));
        const __VLS_40 = __VLS_39({
            enterActiveClass: "transition-opacity duration-200 delay-100",
            leaveActiveClass: "transition-opacity duration-200",
            enterFromClass: "opacity-0",
            leaveToClass: "opacity-0",
        }, ...__VLS_functionalComponentArgsRest(__VLS_39));
        const { default: __VLS_42 } = __VLS_41.slots;
        if ((__VLS_ctx.sidebar.isExpanded || __VLS_ctx.sidebar.isMobile) && !__VLS_ctx.sidebar.initialLoad) {
            // @ts-ignore
            [sidebar, sidebar, sidebar,];
            __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
                ...{ class: "text-sm font-medium whitespace-nowrap" },
            });
            (item.name);
        }
        var __VLS_41;
        if (__VLS_ctx.$route.path === item.link) {
            // @ts-ignore
            [$route,];
            __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
                ...{ class: "absolute left-0 top-0 h-full w-1 rounded-r-lg bg-primary" },
            });
        }
        if (!__VLS_ctx.sidebar.isExpanded && !__VLS_ctx.sidebar.isMobile) {
            // @ts-ignore
            [sidebar, sidebar,];
            __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
                ...{ class: "absolute left-[calc(100%+1rem)] top-1/2 -translate-y-1/2 px-3 py-2 text-sm font-medium bg-neutral text-neutral-content rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition duration-200" },
                ...{ style: {} },
            });
            (item.name);
        }
        var __VLS_28;
    }
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "flex flex-col p-4 border-t border-base-300/40 gap-3" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: ({ 'flex justify-center': !__VLS_ctx.sidebar.isExpanded && !__VLS_ctx.sidebar.isMobile }) },
    });
    // @ts-ignore
    [sidebar, sidebar,];
    /** @type {[typeof DarkMode, ]} */ ;
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(DarkMode, new DarkMode({
        ...{ class: "btn btn-circle btn-ghost shadow-md hover:shadow-primary/30" },
    }));
    const __VLS_44 = __VLS_43({
        ...{ class: "btn btn-circle btn-ghost shadow-md hover:shadow-primary/30" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    const __VLS_47 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    RouterLink;
    // @ts-ignore
    const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({
        ...{ 'onClick': {} },
        to: "/logout",
        ...{ class: ([
                'flex items-center gap-2 py-2 rounded-xl transition-all duration-200',
                'hover:bg-error hover:text-error-content',
                __VLS_ctx.sidebar.isExpanded || __VLS_ctx.sidebar.isMobile ? 'px-4' : 'px-2 justify-center',
            ]) },
    }));
    const __VLS_49 = __VLS_48({
        ...{ 'onClick': {} },
        to: "/logout",
        ...{ class: ([
                'flex items-center gap-2 py-2 rounded-xl transition-all duration-200',
                'hover:bg-error hover:text-error-content',
                __VLS_ctx.sidebar.isExpanded || __VLS_ctx.sidebar.isMobile ? 'px-4' : 'px-2 justify-center',
            ]) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_48));
    let __VLS_51;
    let __VLS_52;
    const __VLS_53 = ({ click: {} },
        { onClick: (__VLS_ctx.handleNavClick) });
    const { default: __VLS_54 } = __VLS_50.slots;
    // @ts-ignore
    [sidebar, sidebar, handleNavClick,];
    const __VLS_55 = {}.IconLogout;
    /** @type {[typeof __VLS_components.IconLogout, ]} */ ;
    // @ts-ignore
    IconLogout;
    // @ts-ignore
    const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({
        ...{ class: "h-6 w-6 flex-shrink-0" },
    }));
    const __VLS_57 = __VLS_56({
        ...{ class: "h-6 w-6 flex-shrink-0" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_56));
    const __VLS_60 = {}.Transition;
    /** @type {[typeof __VLS_components.Transition, typeof __VLS_components.Transition, ]} */ ;
    // @ts-ignore
    Transition;
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
        enterActiveClass: "transition-opacity duration-200 delay-100",
        leaveActiveClass: "transition-opacity duration-200",
        enterFromClass: "opacity-0",
        leaveToClass: "opacity-0",
    }));
    const __VLS_62 = __VLS_61({
        enterActiveClass: "transition-opacity duration-200 delay-100",
        leaveActiveClass: "transition-opacity duration-200",
        enterFromClass: "opacity-0",
        leaveToClass: "opacity-0",
    }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    const { default: __VLS_64 } = __VLS_63.slots;
    if ((__VLS_ctx.sidebar.isExpanded || __VLS_ctx.sidebar.isMobile) && !__VLS_ctx.sidebar.initialLoad) {
        // @ts-ignore
        [sidebar, sidebar, sidebar,];
        __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
            ...{ class: "text-sm font-medium" },
        });
    }
    var __VLS_63;
    var __VLS_50;
}
var __VLS_8;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['top-4']} */ ;
/** @type {__VLS_StyleScopedClasses['left-4']} */ ;
/** @type {__VLS_StyleScopedClasses['z-50']} */ ;
/** @type {__VLS_StyleScopedClasses['p-3']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-base-100/80']} */ ;
/** @type {__VLS_StyleScopedClasses['backdrop-blur-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-base-200']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['h-6']} */ ;
/** @type {__VLS_StyleScopedClasses['w-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-base-content']} */ ;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['top-0']} */ ;
/** @type {__VLS_StyleScopedClasses['left-0']} */ ;
/** @type {__VLS_StyleScopedClasses['h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['z-50']} */ ;
/** @type {__VLS_StyleScopedClasses['border-r']} */ ;
/** @type {__VLS_StyleScopedClasses['border-base-300/40']} */ ;
/** @type {__VLS_StyleScopedClasses['backdrop-blur-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-base-200/80']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
/** @type {__VLS_StyleScopedClasses['border-base-300/40']} */ ;
/** @type {__VLS_StyleScopedClasses['min-h-[64px]']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['font-extrabold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['tracking-wide']} */ ;
/** @type {__VLS_StyleScopedClasses['text-base-content']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-opacity']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-200']} */ ;
/** @type {__VLS_StyleScopedClasses['opacity-0']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-base-300/70']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-base-content']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-transform']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['right-4']} */ ;
/** @type {__VLS_StyleScopedClasses['top-4']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-base-300']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-base-content']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['p-5']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
/** @type {__VLS_StyleScopedClasses['border-base-300/40']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['border-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['object-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:scale-105']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:shadow-primary/40']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-base-content']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['text-base-content/60']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-1']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-200']} */ ;
/** @type {__VLS_StyleScopedClasses['group']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-primary/90']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-primary-content']} */ ;
/** @type {__VLS_StyleScopedClasses['h-6']} */ ;
/** @type {__VLS_StyleScopedClasses['w-6']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-shrink-0']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['whitespace-nowrap']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['left-0']} */ ;
/** @type {__VLS_StyleScopedClasses['top-0']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['w-1']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-r-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['left-[calc(100%+1rem)]']} */ ;
/** @type {__VLS_StyleScopedClasses['top-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['-translate-y-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-neutral']} */ ;
/** @type {__VLS_StyleScopedClasses['text-neutral-content']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['opacity-0']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:opacity-100']} */ ;
/** @type {__VLS_StyleScopedClasses['pointer-events-none']} */ ;
/** @type {__VLS_StyleScopedClasses['whitespace-nowrap']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-200']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['border-t']} */ ;
/** @type {__VLS_StyleScopedClasses['border-base-300/40']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-circle']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-ghost']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-md']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:shadow-primary/30']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-200']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-error']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-error-content']} */ ;
/** @type {__VLS_StyleScopedClasses['h-6']} */ ;
/** @type {__VLS_StyleScopedClasses['w-6']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-shrink-0']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
