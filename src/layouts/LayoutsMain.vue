<script setup lang="ts">
import Sidebar from '@/components/shared/sidebar/Sidebar.vue'
import { useSidebarStore } from '@/stores/sidebar/sidebar'

const sidebar = useSidebarStore()
</script>

<template>
  <div class="min-h-screen bg-base-100 transition-colors duration-300 flex">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Contenido principal -->
    <main
      :class="[
        'flex-1 p-4 transition-all duration-300 ease-in-out',

        // 📱 Mobile → ocupa todo el ancho, sin margen
        sidebar.isMobile
          ? 'ml-0 w-full'
          : sidebar.isExpanded
          ? // 🖥️ Escritorio expandido
            'lg:ml-72'
          : // 🖥️ Escritorio colapsado
            'lg:ml-20',
      ]"
    >
      <router-view />
    </main>
  </div>
</template>
