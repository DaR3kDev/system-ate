<script setup lang="ts">
import { defineProps } from 'vue'
import { IconTrendingUp, IconAlertCircle } from '@tabler/icons-vue'
import { Benefit } from '../interfaces/benefits-interfaces'
import ProgressBar from '@/components/shared/progress-bar/ProgressBar.vue'

defineProps<{ benefit: Benefit }>()

function getStatusColor(status: string) {
  switch (status) {
    case 'active':
      return 'badge badge-success'
    case 'limited':
      return 'badge badge-warning'
    case 'inactive':
      return 'badge badge-error'
    default:
      return 'badge badge-ghost'
  }
}
</script>

<template>
  <div class="card bg-base-100 shadow-lg rounded-lg p-6 space-y-6 min-h-[220px]">
    <!-- Header -->
    <div class="flex justify-between items-start">
      <div>
        <h4 class="font-bold text-xl">{{ benefit.name }}</h4>
        <p class="text-sm text-secondary">{{ benefit.category }}</p>
      </div>

      <div class="flex flex-col items-end space-y-2">
        <span :class="getStatusColor(benefit.status)" class="text-sm font-semibold px-2 py-1 rounded">
          {{
            benefit.status === 'active'
              ? 'Activo'
              : benefit.status === 'limited'
              ? 'Limitado'
              : 'Inactivo'
          }}
        </span>

        <div
          class="flex items-center text-sm font-medium"
          :class="benefit.trend.startsWith('+') ? 'text-success' : 'text-error'"
        >
          <IconTrendingUp class="h-5 w-5 mr-1" />
          {{ benefit.trend }}
        </div>
      </div>
    </div>

    <!-- Barra de progreso -->
    <div class="mt-4">
      <ProgressBar
        :current="benefit.used"
        :max="benefit.total"
        barColor="progress-primary"
        height="0.75rem"
        showLabels
        showPercentage
        class="progress-dim w-full"
      />
      <p class="text-sm text-base-content mt-2">
        {{ benefit.used }} / {{ benefit.total }} utilizados
      </p>
    </div>

    <!-- Alerta stock limitado -->
    <div
      v-if="benefit.status === 'limited'"
      class="alert alert-warning p-3 text-sm flex items-center space-x-2"
    >
      <IconAlertCircle class="h-5 w-5" />
      <span class="text-sm">Stock limitado - considerar reabastecimiento</span>
    </div>
  </div>
</template>

<style scoped>
.card {
  transition: transform 0.2s ease;
}
.card:hover {
  transform: scale(1.02);
}
</style>
