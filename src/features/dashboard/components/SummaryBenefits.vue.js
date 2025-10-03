import { ref, computed, onMounted, useAttrs } from 'vue';
import BenefitItem from './BenefitItem.vue';
import { IconPackage } from '@tabler/icons-vue';
import Pagination from '@/components/shared/pagination/Pagination.vue';
import { usePaginationStore } from '@/stores/pagination/paginationStore';
const attrs = useAttrs();
const benefits = ref([
    {
        name: 'Plan Premium',
        category: 'Salud',
        status: 'active',
        trend: '+10%',
        used: 50,
        total: 100,
    },
    {
        name: 'Plan Básico',
        category: 'Dental',
        status: 'limited',
        trend: '-5%',
        used: 70,
        total: 100,
    },
    {
        name: 'Plan Avanzado',
        category: 'Visión',
        status: 'active',
        trend: '+8%',
        used: 40,
        total: 100,
    },
    {
        name: 'Plan Especial',
        category: 'Salud',
        status: 'active',
        trend: '+12%',
        used: 20,
        total: 100,
    },
    { name: 'Plan Oro', category: 'Dental', status: 'limited', trend: '-2%', used: 60, total: 100 },
    {
        name: 'Plan Platino',
        category: 'Visión',
        status: 'active',
        trend: '+5%',
        used: 80,
        total: 100,
    },
]);
const pagination = usePaginationStore();
onMounted(() => {
    pagination.setTotalItems(benefits.value.length);
});
const visibleBenefits = computed(() => benefits.value.slice(pagination.currentPage * pagination.itemsPerPage, (pagination.currentPage + 1) * pagination.itemsPerPage));
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...(__VLS_ctx.attrs),
    ...{ class: "w-full p-4" },
});
// @ts-ignore
[attrs,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "card bg-base-200 shadow-xl rounded-lg p-6 space-y-6 w-full" },
    ...{ style: ({ minHeight: `${__VLS_ctx.visibleBenefits.length * 160}px` }) },
});
// @ts-ignore
[visibleBenefits,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "flex items-center gap-3 border-b border-base-300 pb-4" },
});
const __VLS_0 = {}.IconPackage;
/** @type {[typeof __VLS_components.IconPackage, ]} */ ;
// @ts-ignore
IconPackage;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "h-6 w-6 text-primary" },
}));
const __VLS_2 = __VLS_1({
    ...{ class: "h-6 w-6 text-primary" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({
    ...{ class: "font-bold text-2xl" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "flex flex-col gap-4" },
});
for (const [benefit, index] of __VLS_getVForSourceType((__VLS_ctx.visibleBenefits))) {
    // @ts-ignore
    [visibleBenefits,];
    /** @type {[typeof BenefitItem, ]} */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(BenefitItem, new BenefitItem({
        key: (index),
        benefit: (benefit),
        ...{ class: "w-full" },
    }));
    const __VLS_6 = __VLS_5({
        key: (index),
        benefit: (benefit),
        ...{ class: "w-full" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
}
/** @type {[typeof Pagination, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(Pagination, new Pagination({
    ...{ 'onUpdate:page': {} },
    totalPages: (__VLS_ctx.pagination.totalPages),
    currentPage: (__VLS_ctx.pagination.currentPage),
}));
const __VLS_10 = __VLS_9({
    ...{ 'onUpdate:page': {} },
    totalPages: (__VLS_ctx.pagination.totalPages),
    currentPage: (__VLS_ctx.pagination.currentPage),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
let __VLS_12;
let __VLS_13;
const __VLS_14 = ({ 'update:page': {} },
    { 'onUpdate:page': (__VLS_ctx.pagination.setPage) });
// @ts-ignore
[pagination, pagination, pagination,];
var __VLS_11;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-base-200']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-6']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
/** @type {__VLS_StyleScopedClasses['border-base-300']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['h-6']} */ ;
/** @type {__VLS_StyleScopedClasses['w-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
