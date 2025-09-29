<script setup lang="ts">
import Sidebar from '@/components/shared/sidebar/Sidebar.vue'
</script>

<template>
  <!-- Contenedor principal -->
  <div class="flex min-h-screen bg-base-100 transition-colors duration-300">
    
    <!-- Sidebar -->
    <Sidebar />

    <!-- Contenido principal -->
    <main class="flex-1 flex flex-col gap-4 p-6 transition-all duration-300 ease-in-out overflow-auto">
      <router-view />
    </main>

  </div>
</template>

<style scoped>
main {
  min-height: 100vh;
}
</style>
