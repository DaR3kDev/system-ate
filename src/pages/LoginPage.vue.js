import { ref } from 'vue';
import TermsModal from '@/features/login/components/TermsModal.vue';
import PrivacyModal from '@/features/login/components/PrivacyModal.vue';
import LoginForm from '@/features/login/components/LoginForm.vue';
const termsRef = ref(null);
const privacyRef = ref(null);
const openTerms = () => termsRef.value?.open();
const openPrivacy = () => privacyRef.value?.open();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "from-indigo-100 to-blue-200 min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-base-100 shadow-lg rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 transition-all" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "flex flex-col items-center gap-3 mb-6" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "flex w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 items-center justify-center rounded-full bg-primary text-primary-content" },
});
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
    ...{ class: "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold" },
});
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({
    ...{ class: "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-base-content text-center" },
});
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "text-xs sm:text-sm md:text-base lg:text-lg text-center text-base-content max-w-xs sm:max-w-sm md:max-w-md" },
});
/** @type {[typeof LoginForm, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(LoginForm, new LoginForm({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "text-xs sm:text-sm md:text-base lg:text-lg text-center text-base-content mt-4 opacity-70" },
});
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (__VLS_ctx.openTerms) },
    ...{ class: "link link-primary underline" },
    type: "button",
});
// @ts-ignore
[openTerms,];
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (__VLS_ctx.openPrivacy) },
    ...{ class: "link link-primary underline" },
    type: "button",
});
// @ts-ignore
[openPrivacy,];
/** @type {[typeof TermsModal, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(TermsModal, new TermsModal({
    ref: "termsRef",
}));
const __VLS_5 = __VLS_4({
    ref: "termsRef",
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
/** @type {typeof __VLS_ctx.termsRef} */ ;
var __VLS_7 = {};
// @ts-ignore
[termsRef,];
var __VLS_6;
/** @type {[typeof PrivacyModal, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(PrivacyModal, new PrivacyModal({
    ref: "privacyRef",
}));
const __VLS_11 = __VLS_10({
    ref: "privacyRef",
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
/** @type {typeof __VLS_ctx.privacyRef} */ ;
var __VLS_13 = {};
// @ts-ignore
[privacyRef,];
var __VLS_12;
/** @type {__VLS_StyleScopedClasses['from-indigo-100']} */ ;
/** @type {__VLS_StyleScopedClasses['to-blue-200']} */ ;
/** @type {__VLS_StyleScopedClasses['min-h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['md:p-8']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:p-10']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:p-12']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:max-w-md']} */ ;
/** @type {__VLS_StyleScopedClasses['md:max-w-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:max-w-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:max-w-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-base-100']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:p-8']} */ ;
/** @type {__VLS_StyleScopedClasses['md:p-10']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:p-12']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['w-12']} */ ;
/** @type {__VLS_StyleScopedClasses['h-12']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:w-14']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:h-14']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-16']} */ ;
/** @type {__VLS_StyleScopedClasses['md:h-16']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:w-20']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:h-20']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['text-primary-content']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['md:text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['md:text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-base-content']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['md:text-base']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-base-content']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:max-w-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['md:max-w-md']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['md:text-base']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-base-content']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['opacity-70']} */ ;
/** @type {__VLS_StyleScopedClasses['link']} */ ;
/** @type {__VLS_StyleScopedClasses['link-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['underline']} */ ;
/** @type {__VLS_StyleScopedClasses['link']} */ ;
/** @type {__VLS_StyleScopedClasses['link-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['underline']} */ ;
// @ts-ignore
var __VLS_8 = __VLS_7, __VLS_14 = __VLS_13;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
