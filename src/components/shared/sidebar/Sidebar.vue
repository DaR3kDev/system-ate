<script setup lang="ts">
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
import {
  IconMenu2,
  IconHome,
  IconUser,
  IconUsersGroup,
  IconReportAnalytics,
  IconSettings,
  IconLogout,
  IconLayout2,
  IconX,
} from '@tabler/icons-vue'
import DarkMode from '../toggles/DarkMode.vue'

// Estado del sidebar
const isOpen = ref(false)

// Guardar el estado expandido en localStorage
const isExpanded = ref(true)
const initialLoad = ref(true)

// Cargar estado antes de montar para evitar flash
const stored = localStorage.getItem('sidebar-expanded')
if (stored !== null) {
  isExpanded.value = stored === 'true'
}

onMounted(() => {
  setTimeout(() => {
    initialLoad.value = false
  }, 50)
})

// Datos del usuario
const user = reactive({
  name: 'Kevin Villegas',
  role: 'Administrador',
  avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
})

// Menú
const menuItems = [
  { name: 'Dashboard', icon: IconHome, link: '/' },
  { name: 'Beneficios', icon: IconUser, link: '/beneficios' },
  { name: 'Afiliados', icon: IconUsersGroup, link: '/afiliados' },
  { name: 'Familias', icon: IconUsersGroup, link: '/familias' },
  { name: 'Reportes', icon: IconReportAnalytics, link: '/reportes' },
  { name: 'Configuración', icon: IconSettings, link: '/configuracion' },
]

// Detectar ancho de ventana
const windowWidth = ref(window.innerWidth)
const handleResize = () => (windowWidth.value = window.innerWidth)

onMounted(() => window.addEventListener('resize', handleResize))
onUnmounted(() => window.removeEventListener('resize', handleResize))

const isMobile = computed(() => windowWidth.value < 1024)

// Funciones
const toggleSidebar = () => (isOpen.value = !isOpen.value)
const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
  localStorage.setItem('sidebar-expanded', isExpanded.value.toString())
}
const closeSidebar = () => (isOpen.value = false)
const handleNavClick = () => {
  if (isMobile.value) {
    closeSidebar()
  }
}
</script>

<template>
  <!-- Overlay móvil (debe ir ANTES del botón para estar debajo) -->
  <div
    v-if="isMobile && isOpen"
    @click="closeSidebar"
    class="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300"
  ></div>

  <!-- Botón menú móvil -->
  <button
    v-if="isMobile"
    class="fixed top-4 left-4 z-50 p-2 bg-base-100 shadow-lg rounded-lg hover:bg-base-200 transition-colors"
    @click="toggleSidebar"
    aria-label="Abrir/Cerrar menú"
  >
    <component :is="isOpen ? IconX : IconMenu2" class="h-6 w-6 text-base-content" />
  </button>

  <!-- Sidebar -->
  <Transition
    enter-active-class="transition-transform duration-300"
    leave-active-class="transition-transform duration-300"
    enter-from-class="-translate-x-full"
    enter-to-class="translate-x-0"
    leave-from-class="translate-x-0"
    leave-to-class="-translate-x-full"
  >
    <aside
      v-if="isOpen || !isMobile"
      :class="[
        'fixed top-0 left-0 h-screen flex flex-col shadow-xl z-50 border-r bg-base-200 border-base-300',
        isMobile ? 'w-64' : isExpanded ? 'w-64' : 'w-20',
        !initialLoad && !isMobile ? 'transition-[width] duration-300 ease-in-out' : '',
      ]"
    >
      <!-- HEADER -->
      <div class="flex items-center justify-between p-4 border-b border-base-300 min-h-[64px]">
        <span
          v-if="isExpanded"
          class="font-bold text-lg text-base-content transition-opacity duration-200"
          :class="{ 'opacity-0': initialLoad }"
        >
          Menú
        </span>
        <button
          v-if="!isMobile"
          @click="toggleExpand"
          class="p-2 rounded-md hover:bg-base-300 transition-colors"
          :class="{ 'mx-auto': !isExpanded }"
          title="Expandir/Colapsar menú"
        >
          <IconLayout2
            :class="[
              'h-5 w-5 text-base-content transition-transform duration-300',
              !isExpanded ? 'rotate-90' : '',
            ]"
          />
        </button>
      </div>

      <!-- Usuario -->
      <div
        :class="[
          'flex flex-col items-center p-4 border-b border-base-300',
          !isExpanded ? 'py-3' : '',
        ]"
      >
        <img
          :src="user.avatar"
          alt="Avatar"
          :class="[
            'rounded-full border-2 border-primary shadow-sm object-cover transition-all duration-300',
            isExpanded ? 'h-14 w-14' : 'h-10 w-10',
          ]"
        />
        <Transition
          enter-active-class="transition-opacity duration-200 delay-100"
          leave-active-class="transition-opacity duration-200"
          enter-from-class="opacity-0"
          leave-to-class="opacity-0"
        >
          <div v-if="isExpanded && !initialLoad" class="mt-3 text-center">
            <p class="font-semibold text-base-content text-sm">{{ user.name }}</p>
            <p class="text-xs text-base-content opacity-70">{{ user.role }}</p>
          </div>
        </Transition>
      </div>

      <!-- Menú -->
      <nav class="flex flex-col flex-1 px-2 py-4 space-y-1">
        <div v-for="item in menuItems" :key="item.name" class="relative">
          <RouterLink
            :to="item.link"
            :class="[
              'flex items-center gap-3 py-3 rounded-lg hover:bg-primary hover:text-primary-content transition-all duration-200 group',
              isExpanded ? 'px-4' : 'px-2 justify-center',
            ]"
            @click="handleNavClick"
          >
            <component :is="item.icon" class="h-6 w-6 flex-shrink-0" />
            <Transition
              enter-active-class="transition-opacity duration-200 delay-100"
              leave-active-class="transition-opacity duration-200"
              enter-from-class="opacity-0"
              leave-to-class="opacity-0"
            >
              <span v-if="isExpanded && !initialLoad" class="text-sm font-medium whitespace-nowrap">
                {{ item.name }}
              </span>
            </Transition>

            <!-- Tooltip flotante fuera del sidebar -->
            <div
              v-if="!isExpanded && !isMobile"
              class="absolute left-[calc(100%+1rem)] top-1/2 -translate-y-1/2 px-3 py-2 text-sm font-medium bg-neutral text-neutral-content rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-all duration-200"
              style="z-index: 99999"
            >
              {{ item.name }}
            </div>
          </RouterLink>
        </div>
      </nav>

      <!-- Footer -->
      <div class="flex flex-col p-4 border-t border-base-300 gap-3">
        <div :class="{ 'flex justify-center': !isExpanded }">
          <DarkMode />
        </div>
        <RouterLink
          to="/logout"
          :class="[
            'flex items-center gap-2 py-2 rounded-lg hover:bg-error hover:text-error-content transition-all duration-200',
            isExpanded ? 'px-4' : 'px-2 justify-center',
          ]"
          @click="handleNavClick"
        >
          <IconLogout class="h-6 w-6 flex-shrink-0" />
          <Transition
            enter-active-class="transition-opacity duration-200 delay-100"
            leave-active-class="transition-opacity duration-200"
            enter-from-class="opacity-0"
            leave-to-class="opacity-0"
          >
            <span v-if="isExpanded && !initialLoad" class="text-sm font-medium">Cerrar sesión</span>
          </Transition>
        </RouterLink>
      </div>
    </aside>
  </Transition>
</template>

<style scoped>
/* Estilo para link activo */
.router-link-active {
  background-color: rgb(var(--p) / 1);
  color: rgb(var(--pc) / 1);
}

/* Asegurar que el sidebar no tenga overflow que corte los tooltips */
aside {
  overflow: visible !important;
}

nav {
  overflow: visible !important;
}
</style>
