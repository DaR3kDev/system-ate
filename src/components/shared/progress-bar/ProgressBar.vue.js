import { defineProps, computed } from 'vue';
const props = defineProps();
const percentage = computed(() => {
    if (props.max === 0)
        return 0;
    return Math.round((props.current / props.max) * 100);
});
const available = computed(() => props.max - props.current);
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
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "space-y-2 w-full" },
});
if (props.showLabels !== false) {
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "flex justify-between text-sm text-base-content" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "font-medium" },
    });
    (props.current);
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "font-medium" },
    });
    (__VLS_ctx.available);
    // @ts-ignore
    [available,];
}
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "w-full" },
});
__VLS_asFunctionalElement(__VLS_elements.progress, __VLS_elements.progress)({
    ...{ class: "progress progress-dim w-full" },
    ...{ class: (props.barColor || 'progress-primary') },
    value: (props.current),
    max: (props.max),
    ...{ style: ({ height: props.height || '0.5rem' }) },
});
if (props.showPercentage !== false) {
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "flex justify-between text-xs text-base-content" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({});
    (__VLS_ctx.percentage);
    // @ts-ignore
    [percentage,];
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "font-medium" },
    });
    (props.max);
}
/** @type {__VLS_StyleScopedClasses['space-y-2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-base-content']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['progress']} */ ;
/** @type {__VLS_StyleScopedClasses['progress-dim']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['text-base-content']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
