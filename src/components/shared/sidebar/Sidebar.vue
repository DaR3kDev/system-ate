<script setup lang="ts">
import { reactive } from 'vue'
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
import { useSidebarStore } from '@/stores/sidebar/useSidebarStore'

const sidebar = useSidebarStore()

// Simulación de datos de usuario
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

const handleNavClick = () => {
  if (sidebar.isMobile) sidebar.closeSidebar()
}
</script>

<template>
  <!-- Botón menú móvil -->
  <button
    v-if="sidebar.isMobile"
    class="fixed top-4 left-4 z-50 p-3 bg-base-100/80 backdrop-blur-xl shadow-lg rounded-2xl hover:bg-base-200 transition-colors"
    @click="sidebar.toggleSidebar"
    aria-label="Abrir/Cerrar menú"
  >
    <component :is="sidebar.isOpen ? IconX : IconMenu2" class="h-6 w-6 text-base-content" />
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
      v-if="sidebar.isOpen || !sidebar.isMobile"
      :class="[
        'fixed top-0 left-0 h-screen flex flex-col shadow-xl z-50 border-r border-base-300/40 backdrop-blur-2xl bg-base-200/80',
        sidebar.isMobile ? 'w-72' : sidebar.isExpanded ? 'w-72' : 'w-20',
        !sidebar.initialLoad && !sidebar.isMobile
          ? 'transition-[width] duration-300 ease-in-out'
          : '',
      ]"
    >
      <!-- HEADER -->
      <div
        class="flex items-center justify-between p-4 border-b border-base-300/40 min-h-[64px] relative"
      >
        <!-- Título -->
        <span
          v-if="sidebar.isExpanded || sidebar.isMobile"
          class="font-extrabold text-lg tracking-wide text-base-content transition-opacity duration-200"
          :class="{ 'opacity-0': sidebar.initialLoad }"
        >
          Menú
        </span>

        <!-- Botón expandir en desktop -->
        <button
          v-if="!sidebar.isMobile"
          @click="sidebar.toggleExpand"
          class="p-2 rounded-lg hover:bg-base-300/70 transition-colors"
          :class="{ 'mx-auto': !sidebar.isExpanded }"
          title="Expandir/Colapsar menú"
        >
          <IconLayout2
            :class="[
              'h-5 w-5 text-base-content transition-transform duration-300',
              !sidebar.isExpanded ? 'rotate-90' : '',
            ]"
          />
        </button>

        <!-- Botón cerrar en móvil -->
        <button
          v-if="sidebar.isMobile"
          @click="sidebar.closeSidebar"
          class="absolute right-4 top-4 p-2 rounded-lg hover:bg-base-300 transition-colors"
          title="Cerrar menú"
        >
          <IconX class="h-5 w-5 text-base-content" />
        </button>
      </div>

      <!-- USUARIO -->
      <div
        :class="[
          'flex flex-col items-center p-5 border-b border-base-300/40',
          !sidebar.isExpanded && !sidebar.isMobile ? 'py-3' : '',
        ]"
      >
        <img
          :src="user.avatar"
          alt="Avatar"
          :class="[
            'rounded-full border-2 border-primary shadow-lg object-cover transition-all duration-300',
            'hover:scale-105 hover:shadow-primary/40',
            sidebar.isExpanded || sidebar.isMobile ? 'h-16 w-16' : 'h-10 w-10',
          ]"
        />
        <Transition
          enter-active-class="transition-opacity duration-300 delay-100"
          leave-active-class="transition-opacity duration-200"
          enter-from-class="opacity-0"
          leave-to-class="opacity-0"
        >
          <div
            v-if="(sidebar.isExpanded || sidebar.isMobile) && !sidebar.initialLoad"
            class="mt-3 text-center"
          >
            <p class="font-semibold text-base-content text-sm">{{ user.name }}</p>
            <p class="text-xs text-base-content/60">{{ user.role }}</p>
          </div>
        </Transition>
      </div>

      <!-- MENÚ -->
      <nav class="flex flex-col flex-1 px-3 py-4 space-y-1">
        <div v-for="item in menuItems" :key="item.name" class="relative">
          <RouterLink
            :to="item.link"
            :class="[
              'flex items-center gap-3 py-3 rounded-xl transition-all duration-200 group relative',
              'hover:bg-primary/90 hover:text-primary-content',
              sidebar.isExpanded || sidebar.isMobile ? 'px-4' : 'px-2 justify-center',
            ]"
            @click="handleNavClick"
          >
            <!-- Icono -->
            <component :is="item.icon" class="h-6 w-6 flex-shrink-0" />

            <!-- Texto -->
            <Transition
              enter-active-class="transition-opacity duration-200 delay-100"
              leave-active-class="transition-opacity duration-200"
              enter-from-class="opacity-0"
              leave-to-class="opacity-0"
            >
              <span
                v-if="(sidebar.isExpanded || sidebar.isMobile) && !sidebar.initialLoad"
                class="text-sm font-medium whitespace-nowrap"
              >
                {{ item.name }}
              </span>
            </Transition>

            <!-- Indicador activo (barra lateral) -->
            <div
              v-if="$route.path === item.link"
              class="absolute left-0 top-0 h-full w-1 rounded-r-lg bg-primary"
            ></div>

            <!-- Tooltip -->
            <div
              v-if="!sidebar.isExpanded && !sidebar.isMobile"
              class="absolute left-[calc(100%+1rem)] top-1/2 -translate-y-1/2 px-3 py-2 text-sm font-medium bg-neutral text-neutral-content rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition duration-200"
              style="z-index: 99999"
            >
              {{ item.name }}
            </div>
          </RouterLink>
        </div>
      </nav>

      <!-- FOOTER -->
      <div class="flex flex-col p-4 border-t border-base-300/40 gap-3">
        <div :class="{ 'flex justify-center': !sidebar.isExpanded && !sidebar.isMobile }">
          <DarkMode class="btn btn-circle btn-ghost shadow-md hover:shadow-primary/30" />
        </div>
        <RouterLink
          to="/logout"
          :class="[
            'flex items-center gap-2 py-2 rounded-xl transition-all duration-200',
            'hover:bg-error hover:text-error-content',
            sidebar.isExpanded || sidebar.isMobile ? 'px-4' : 'px-2 justify-center',
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
            <span
              v-if="(sidebar.isExpanded || sidebar.isMobile) && !sidebar.initialLoad"
              class="text-sm font-medium"
            >
              Cerrar sesión
            </span>
          </Transition>
        </RouterLink>
      </div>
    </aside>
  </Transition>
</template>

<style scoped>
.router-link-active {
  background-color: rgb(var(--p) / 1);
  color: rgb(var(--pc) / 1);
  font-weight: 600;
}
aside,
nav {
  overflow: visible !important;
}
</style>
