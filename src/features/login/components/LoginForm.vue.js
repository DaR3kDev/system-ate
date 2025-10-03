import { ref, computed } from 'vue';
import { IconEye, IconEyeOff } from '@tabler/icons-vue';
const showPassword = ref(false);
const password = ref('');
const passwordFocused = ref(false);
function togglePassword() {
    showPassword.value = !showPassword.value;
}
const showEyeIcon = computed(() => {
    return passwordFocused.value || password.value.length > 0;
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.form, __VLS_elements.form)({
    ...{ class: "flex flex-col gap-6 p-4 sm:p-6 md:p-8 lg:p-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto w-full" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "form-control w-full" },
});
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    ...{ class: "label" },
    for: "email",
});
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
    ...{ class: "label-text text-sm sm:text-base md:text-lg lg:text-xl" },
});
__VLS_asFunctionalElement(__VLS_elements.input)({
    id: "email",
    type: "email",
    placeholder: "ejemplo@correo.com",
    ...{ class: "input input-bordered w-full text-sm sm:text-base md:text-lg lg:text-xl" },
    required: true,
    autocomplete: "username",
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "form-control w-full relative" },
});
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    ...{ class: "label" },
    for: "password",
});
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
    ...{ class: "label-text text-sm sm:text-base md:text-lg lg:text-xl" },
});
__VLS_asFunctionalElement(__VLS_elements.input)({
    ...{ onFocus: (...[$event]) => {
            __VLS_ctx.passwordFocused = true;
            // @ts-ignore
            [passwordFocused,];
        } },
    ...{ onBlur: (...[$event]) => {
            __VLS_ctx.passwordFocused = false;
            // @ts-ignore
            [passwordFocused,];
        } },
    type: (__VLS_ctx.showPassword ? 'text' : 'password'),
    id: "password",
    placeholder: "••••••••",
    ...{ class: "input input-bordered w-full pr-10 text-sm sm:text-base md:text-lg lg:text-xl" },
    required: true,
    autocomplete: "current-password",
});
(__VLS_ctx.password);
// @ts-ignore
[showPassword, password,];
if (__VLS_ctx.showEyeIcon) {
    // @ts-ignore
    [showEyeIcon,];
    __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
        ...{ onClick: (__VLS_ctx.togglePassword) },
        type: "button",
        ...{ class: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700" },
    });
    // @ts-ignore
    [togglePassword,];
    const __VLS_0 = ((__VLS_ctx.showPassword ? __VLS_ctx.IconEyeOff : __VLS_ctx.IconEye));
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ class: "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" },
    }));
    const __VLS_2 = __VLS_1({
        ...{ class: "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    // @ts-ignore
    [showPassword, IconEyeOff, IconEye,];
}
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ class: "btn btn-primary w-full py-2 sm:py-3 md:py-4 lg:py-5 text-sm sm:text-base md:text-lg lg:text-xl" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-6']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['md:p-8']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:p-10']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:max-w-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['md:max-w-md']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:max-w-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:max-w-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['label']} */ ;
/** @type {__VLS_StyleScopedClasses['label-text']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:text-base']} */ ;
/** @type {__VLS_StyleScopedClasses['md:text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['input']} */ ;
/** @type {__VLS_StyleScopedClasses['input-bordered']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:text-base']} */ ;
/** @type {__VLS_StyleScopedClasses['md:text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['label']} */ ;
/** @type {__VLS_StyleScopedClasses['label-text']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:text-base']} */ ;
/** @type {__VLS_StyleScopedClasses['md:text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['input']} */ ;
/** @type {__VLS_StyleScopedClasses['input-bordered']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['pr-10']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:text-base']} */ ;
/** @type {__VLS_StyleScopedClasses['md:text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['right-3']} */ ;
/** @type {__VLS_StyleScopedClasses['top-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['transform']} */ ;
/** @type {__VLS_StyleScopedClasses['-translate-y-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:w-6']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:h-6']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-7']} */ ;
/** @type {__VLS_StyleScopedClasses['md:h-7']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:w-8']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:h-8']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['md:py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:py-5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:text-base']} */ ;
/** @type {__VLS_StyleScopedClasses['md:text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-xl']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
