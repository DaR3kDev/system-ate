<script setup lang="ts">
import { PropType, FunctionalComponent, SVGAttributes } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  value: { type: [String, Number], required: true },
  description: { type: String, required: true },
  badgeText: { type: String, required: true },
  badgeColor: { type: String, default: 'badge-primary' },
  icon: {
    type: Function as PropType<FunctionalComponent<SVGAttributes>>,
    required: true,
  },
  footerText: { type: String, required: true },
})
</script>

<template>
  <div
    class="card bg-base-100 shadow-xl hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 border border-base-200"
  >
    <div class="card-body p-6">
      <!-- Header con icono + badge -->
      <div class="flex justify-between items-start">
        <div class="flex flex-col gap-1">
          <p class="text-sm text-base-content/60">{{ description }}</p>
          <h2 class="text-3xl font-extrabold">{{ value }}</h2>
        </div>

        <span :class="['badge flex items-center gap-1 px-3 py-2 text-xs font-medium', badgeColor]">
          <component :is="icon" class="w-4 h-4" />
          {{ badgeText }}
        </span>
      </div>

      <!-- Divider moderno -->
      <div class="divider my-3"></div>

      <!-- Footer con texto -->
      <div class="flex items-center justify-between text-sm text-base-content/70">
        <span>{{ footerText }}</span>
        <!-- Icono de refuerzo -->
        <div class="p-2 rounded-full bg-base-200">
          <component :is="icon" class="w-5 h-5 text-primary" />
        </div>
      </div>
    </div>
  </div>
</template>
