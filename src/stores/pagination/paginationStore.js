import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
export const usePaginationStore = defineStore('pagination', () => {
    const currentPage = ref(0);
    const itemsPerPage = ref(4);
    const totalItems = ref(0);
    const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage.value));
    function setPage(page) {
        currentPage.value = page;
    }
    function setTotalItems(count) {
        totalItems.value = count;
    }
    return {
        currentPage,
        itemsPerPage,
        totalItems,
        totalPages,
        setPage,
        setTotalItems,
    };
});
