import { defineStore } from 'pinia';
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
export const useSidebarStore = defineStore('sidebar', () => {
    // ESTADO
    const isOpen = ref(false); // Movil
    const isExpanded = ref(true); // Desktop
    const initialLoad = ref(true);
    const windowWidth = ref(window.innerWidth);
    // GUARDO REFERENCIAS EN LOCALSTORAGE
    const stored = localStorage.getItem('sidebar-expanded');
    if (stored !== null)
        isExpanded.value = stored === 'true';
    // DETECTAR ANCHO DE VENTANA
    const handleResize = () => (windowWidth.value = window.innerWidth);
    onMounted(() => {
        window.addEventListener('resize', handleResize);
        nextTick(() => {
            initialLoad.value = false;
        });
    });
    onUnmounted(() => window.removeEventListener('resize', handleResize));
    // COMPUTED RENDERIZA LOS DISPOSITIVOS MOVILES
    const isMobile = computed(() => windowWidth.value < 1024);
    // ACCIONES
    const toggleSidebar = () => (isOpen.value = !isOpen.value);
    const closeSidebar = () => (isOpen.value = false);
    const toggleExpand = () => {
        isExpanded.value = !isExpanded.value;
        localStorage.setItem('sidebar-expanded', isExpanded.value.toString());
    };
    return {
        // ESTADOS
        isOpen,
        isExpanded,
        initialLoad,
        windowWidth,
        // GETTERS
        isMobile,
        // ACCIONES
        toggleSidebar,
        closeSidebar,
        toggleExpand,
    };
});
