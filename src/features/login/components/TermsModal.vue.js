import ModalBase from '@/components/shared/modals/ModalBase.vue';
import { IconUser, IconShieldLock, IconFileDescription, IconAlertTriangle, IconLock, IconInfoCircle, IconFileText, } from '@tabler/icons-vue';
import { ref } from 'vue';
const modalRef = ref(null);
const __VLS_exposed = {
    open: () => modalRef.value?.open(),
    close: () => modalRef.value?.close(),
};
defineExpose(__VLS_exposed);
const privacySections = [
    {
        title: '1. Recopilación de datos',
        content: 'Recopilamos datos personales únicamente para gestionar la toma de beneficios y mejorar la experiencia del usuario.',
        icon: IconLock,
        iconColor: 'text-primary',
    },
    {
        title: '2. Uso de la información',
        content: 'Los datos recopilados se utilizan exclusivamente para administrar el sistema y realizar auditorías internas.',
        icon: IconFileDescription,
        iconColor: 'text-secondary',
    },
    {
        title: '3. Protección de datos',
        content: 'Implementamos medidas de seguridad técnicas y administrativas para proteger los datos contra accesos no autorizados.',
        icon: IconShieldLock,
        iconColor: 'text-accent',
    },
    {
        title: '4. Derechos del usuario',
        content: 'Los usuarios pueden acceder, rectificar o eliminar sus datos personales mediante solicitud a la administración del sistema.',
        icon: IconUser,
        iconColor: 'text-info',
    },
    {
        title: '5. Limitaciones',
        content: 'El sistema no compartirá datos personales con terceros sin el consentimiento del usuario salvo por obligación legal.',
        icon: IconAlertTriangle,
        iconColor: 'text-warning',
    },
    {
        title: '6. Cambios en la política',
        content: 'Nos reservamos el derecho de modificar esta política de privacidad. Los cambios se publicarán en el sistema.',
        icon: IconInfoCircle,
        iconColor: 'text-error',
    },
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {[typeof ModalBase, typeof ModalBase, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(ModalBase, new ModalBase({
    ref: "modalRef",
}));
const __VLS_1 = __VLS_0({
    ref: "modalRef",
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
/** @type {typeof __VLS_ctx.modalRef} */ ;
var __VLS_3 = {};
const { default: __VLS_5 } = __VLS_2.slots;
// @ts-ignore
[modalRef,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-4 sm:py-6 md:py-8 lg:py-10" },
});
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({
    ...{ class: "text-lg sm:text-xl md:text-2xl font-bold mb-6 flex items-center gap-2" },
});
const __VLS_6 = {}.IconFileText;
/** @type {[typeof __VLS_components.IconFileText, ]} */ ;
// @ts-ignore
IconFileText;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
    ...{ class: "w-6 h-6 text-primary" },
}));
const __VLS_8 = __VLS_7({
    ...{ class: "w-6 h-6 text-primary" },
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "space-y-3 max-h-[80vh] overflow-y-auto pr-2" },
});
for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.privacySections))) {
    // @ts-ignore
    [privacySections,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "collapse collapse-plus bg-base-100 border border-base-300 rounded-lg shadow-sm" },
        key: (index),
    });
    __VLS_asFunctionalElement(__VLS_elements.input)({
        type: "checkbox",
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "collapse-title font-semibold flex items-center gap-2 text-sm sm:text-base" },
    });
    const __VLS_11 = ((item.icon));
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({
        ...{ class: "w-5 h-5" },
        ...{ class: (item.iconColor) },
    }));
    const __VLS_13 = __VLS_12({
        ...{ class: "w-5 h-5" },
        ...{ class: (item.iconColor) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    (item.title);
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "collapse-content text-sm sm:text-base leading-relaxed" },
    });
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    (item.content);
}
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "modal-action flex justify-end mt-4" },
});
__VLS_asFunctionalElement(__VLS_elements.form, __VLS_elements.form)({
    method: "dialog",
});
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ class: "btn btn-primary px-6 py-2 text-sm sm:text-base" },
});
var __VLS_2;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['md:px-8']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:px-10']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:px-12']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:py-6']} */ ;
/** @type {__VLS_StyleScopedClasses['md:py-8']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:py-10']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['md:text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-6']} */ ;
/** @type {__VLS_StyleScopedClasses['h-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-3']} */ ;
/** @type {__VLS_StyleScopedClasses['max-h-[80vh]']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-y-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['pr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['collapse']} */ ;
/** @type {__VLS_StyleScopedClasses['collapse-plus']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-base-100']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-base-300']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['collapse-title']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:text-base']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['collapse-content']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:text-base']} */ ;
/** @type {__VLS_StyleScopedClasses['leading-relaxed']} */ ;
/** @type {__VLS_StyleScopedClasses['modal-action']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-end']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:text-base']} */ ;
// @ts-ignore
var __VLS_4 = __VLS_3;
const __VLS_export = (await import('vue')).defineComponent({
    setup: () => (__VLS_exposed),
});
export default {};
