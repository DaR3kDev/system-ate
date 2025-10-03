<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme/useThemeStore'
import { IconSun, IconMoonStars } from '@tabler/icons-vue'

const themeStore = useThemeStore()
const isDark = computed(() => themeStore.theme === 'dim')
</script>

<template>
  <button
    @click="themeStore.toggleTheme"
    :aria-label="isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'"
    class="p-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    :class="
      isDark
        ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white hover:from-gray-800 hover:to-gray-700'
        : 'bg-gradient-to-br from-gray-700 to-gray-600 text-white hover:from-gray-600 hover:to-gray-500'
    "
  >
    <transition name="fade-scale" mode="out-in">
      <IconSun
        v-if="!isDark"
        key="sun"
        class="h-6 w-6 animate-pulse transition-transform duration-300"
      />
      <IconMoonStars
        v-else
        key="moon"
        class="h-6 w-6 animate-spin-slow transition-transform duration-500"
      />
    </transition>
  </button>
</template>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.4s ease;
}
.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.7) rotate(-45deg);
}
.fade-scale-enter-to {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.7) rotate(45deg);
}

@keyframes spin-slow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.animate-spin-slow {
  animation: spin-slow 2s linear infinite;
}
</style>
