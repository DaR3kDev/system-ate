import { defineProps, defineEmits } from 'vue';
const __VLS_props = defineProps();
const emit = defineEmits();
function goToPage(page) {
    emit('update:page', page);
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "join mt-4 justify-center" },
});
for (const [page] of __VLS_getVForSourceType((__VLS_ctx.totalPages))) {
    // @ts-ignore
    [totalPages,];
    __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.goToPage(page - 1);
                // @ts-ignore
                [goToPage,];
            } },
        key: (page),
        ...{ class: "join-item btn btn-square" },
        ...{ class: (__VLS_ctx.currentPage === page - 1 ? 'btn-primary' : '') },
    });
    // @ts-ignore
    [currentPage,];
    (page);
}
/** @type {__VLS_StyleScopedClasses['join']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['join-item']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-square']} */ ;
const __VLS_export = (await import('vue')).defineComponent({
    __typeEmits: {},
    __typeProps: {},
});
export default {};
