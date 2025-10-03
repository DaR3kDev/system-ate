import { defineProps } from 'vue';
import { IconTrendingUp, IconAlertCircle } from '@tabler/icons-vue';
import ProgressBar from '@/components/shared/progress-bar/ProgressBar.vue';
const __VLS_props = defineProps();
function getStatusColor(status) {
    switch (status) {
        case 'active':
            return 'badge badge-success';
        case 'limited':
            return 'badge badge-warning';
        case 'inactive':
            return 'badge badge-error';
        default:
            return 'badge badge-ghost';
    }
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "card bg-base-100 shadow-lg rounded-lg p-6 space-y-6 min-h-[220px]" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "flex justify-between items-start" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
__VLS_asFunctionalElement(__VLS_elements.h4, __VLS_elements.h4)({
    ...{ class: "font-bold text-xl" },
});
(__VLS_ctx.benefit.name);
// @ts-ignore
[benefit,];
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "text-sm text-secondary" },
});
(__VLS_ctx.benefit.category);
// @ts-ignore
[benefit,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "flex flex-col items-end space-y-2" },
});
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
    ...{ class: (__VLS_ctx.getStatusColor(__VLS_ctx.benefit.status)) },
    ...{ class: "text-sm font-semibold px-2 py-1 rounded" },
});
// @ts-ignore
[benefit, getStatusColor,];
(__VLS_ctx.benefit.status === 'active'
    ? 'Activo'
    : __VLS_ctx.benefit.status === 'limited'
        ? 'Limitado'
        : 'Inactivo');
// @ts-ignore
[benefit, benefit,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "flex items-center text-sm font-medium" },
    ...{ class: (__VLS_ctx.benefit.trend.startsWith('+') ? 'text-success' : 'text-error') },
});
// @ts-ignore
[benefit,];
const __VLS_0 = {}.IconTrendingUp;
/** @type {[typeof __VLS_components.IconTrendingUp, ]} */ ;
// @ts-ignore
IconTrendingUp;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "h-5 w-5 mr-1" },
}));
const __VLS_2 = __VLS_1({
    ...{ class: "h-5 w-5 mr-1" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
(__VLS_ctx.benefit.trend);
// @ts-ignore
[benefit,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "mt-4" },
});
/** @type {[typeof ProgressBar, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(ProgressBar, new ProgressBar({
    current: (__VLS_ctx.benefit.used),
    max: (__VLS_ctx.benefit.total),
    barColor: "progress-primary",
    height: "0.75rem",
    showLabels: true,
    showPercentage: true,
    ...{ class: "progress-dim w-full" },
}));
const __VLS_6 = __VLS_5({
    current: (__VLS_ctx.benefit.used),
    max: (__VLS_ctx.benefit.total),
    barColor: "progress-primary",
    height: "0.75rem",
    showLabels: true,
    showPercentage: true,
    ...{ class: "progress-dim w-full" },
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
// @ts-ignore
[benefit, benefit,];
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "text-sm text-base-content mt-2" },
});
(__VLS_ctx.benefit.used);
(__VLS_ctx.benefit.total);
// @ts-ignore
[benefit, benefit,];
if (__VLS_ctx.benefit.status === 'limited') {
    // @ts-ignore
    [benefit,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "alert alert-warning p-3 text-sm flex items-center space-x-2" },
    });
    const __VLS_9 = {}.IconAlertCircle;
    /** @type {[typeof __VLS_components.IconAlertCircle, ]} */ ;
    // @ts-ignore
    IconAlertCircle;
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
        ...{ class: "h-5 w-5" },
    }));
    const __VLS_11 = __VLS_10({
        ...{ class: "h-5 w-5" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "text-sm" },
    });
}
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-base-100']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-6']} */ ;
/** @type {__VLS_StyleScopedClasses['min-h-[220px]']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-end']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['progress-dim']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-base-content']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['alert']} */ ;
/** @type {__VLS_StyleScopedClasses['alert-warning']} */ ;
/** @type {__VLS_StyleScopedClasses['p-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['space-x-2']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
