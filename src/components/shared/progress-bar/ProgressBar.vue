<script setup lang="ts">
import { defineProps, computed } from 'vue'

interface ProgressBarProps {
  current: number
  max: number
  barColor?: string
  height?: string
  showPercentage?: boolean
  showLabels?: boolean
}

const props = defineProps<ProgressBarProps>()

const percentage = computed(() => {
  if (props.max === 0) return 0
  return Math.round((props.current / props.max) * 100)
})

const available = computed(() => props.max - props.current)
</script>

<template>
  <div class="space-y-2 w-full">
    <!-- Etiquetas -->
    <div v-if="props.showLabels !== false" class="flex justify-between text-sm text-base-content">
      <span class="font-medium">{{ props.current }}</span>
      <span class="font-medium">{{ available }} disponibles</span>
    </div>

    <!-- Barra de progreso DaisyUI -->
    <div class="w-full">
      <progress
        class="progress progress-dim w-full"
        :class="props.barColor || 'progress-primary'"
        :value="props.current"
        :max="props.max"
        :style="{ height: props.height || '0.5rem' }"
      ></progress>
    </div>

    <!-- Porcentaje -->
    <div
      v-if="props.showPercentage !== false"
      class="flex justify-between text-xs text-base-content"
    >
      <span>{{ percentage }}% completado</span>
      <span class="font-medium">Total: {{ props.max }}</span>
    </div>
  </div>
</template>
