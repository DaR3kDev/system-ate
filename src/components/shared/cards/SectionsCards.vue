<script setup lang="ts">
import { FunctionalComponent, SVGAttributes } from 'vue'

interface CardProps {
  title: string
  value: string | number
  description: string
  badgeText: string
  badgeColor?: string
  icon: FunctionalComponent<SVGAttributes>
  footerText?: string
}

defineProps<CardProps>()
</script>

<template>
  <div
    class="card bg-base-100 shadow-xl hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 border border-base-200"
  >
    <div class="card-body p-6">
      <!-- Header  -->
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

      <!-- Divider -->
      <div class="divider my-3"></div>

      <!-- Footer  -->
      <div class="flex items-center justify-between text-sm text-base-content/70">
        <span>{{ footerText }}</span>
        <div class="p-2 rounded-full bg-base-200">
          <component :is="icon" class="w-5 h-5 text-primary" />
        </div>
      </div>
    </div>
  </div>
</template>
