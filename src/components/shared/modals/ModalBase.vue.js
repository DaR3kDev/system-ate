import { ref } from 'vue';
import { useModal } from '@/composables/useModal';
import { IconX } from '@tabler/icons-vue';
const modalRef = ref(null);
const { open, close, toggle } = useModal(modalRef);
const __VLS_exposed = {
    modalRef,
    open,
    close,
    toggle,
};
defineExpose(__VLS_exposed);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.dialog, __VLS_elements.dialog)({
    ref: "modalRef",
    ...{ class: "modal" },
});
/** @type {typeof __VLS_ctx.modalRef} */ ;
// @ts-ignore
[modalRef,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "modal-box relative p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl shadow-xl transition-all duration-300 transform max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full mx-auto" },
});
__VLS_asFunctionalElement(__VLS_elements.form, __VLS_elements.form)({
    method: "dialog",
});
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (__VLS_ctx.close) },
    type: "button",
    ...{ class: "btn btn-sm btn-circle btn-ghost absolute right-2 top-2 sm:right-3 sm:top-3 md:right-4 md:top-4" },
});
// @ts-ignore
[close,];
const __VLS_0 = {}.IconX;
/** @type {[typeof __VLS_components.IconX, ]} */ ;
// @ts-ignore
IconX;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" },
}));
const __VLS_2 = __VLS_1({
    ...{ class: "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "space-y-4 text-sm sm:text-base md:text-lg lg:text-xl" },
});
var __VLS_5 = {};
/** @type {__VLS_StyleScopedClasses['modal']} */ ;
/** @type {__VLS_StyleScopedClasses['modal-box']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['md:p-8']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:p-10']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['transform']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:max-w-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['md:max-w-md']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:max-w-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:max-w-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-circle']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-ghost']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['right-2']} */ ;
/** @type {__VLS_StyleScopedClasses['top-2']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:right-3']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:top-3']} */ ;
/** @type {__VLS_StyleScopedClasses['md:right-4']} */ ;
/** @type {__VLS_StyleScopedClasses['md:top-4']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:w-6']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:h-6']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-7']} */ ;
/** @type {__VLS_StyleScopedClasses['md:h-7']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:text-base']} */ ;
/** @type {__VLS_StyleScopedClasses['md:text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-xl']} */ ;
// @ts-ignore
var __VLS_6 = __VLS_5;
const __VLS_base = (await import('vue')).defineComponent({
    setup: () => (__VLS_exposed),
});
const __VLS_export = {};
export default {};
