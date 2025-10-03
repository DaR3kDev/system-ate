<script setup lang="ts">
import { ref, computed, onMounted, useAttrs } from 'vue'
import { Benefit } from '../interfaces/benefits-interfaces'
import BenefitItem from './BenefitItem.vue'
import { IconPackage } from '@tabler/icons-vue'
import Pagination from '@/components/shared/pagination/Pagination.vue'
import { usePaginationStore } from '@/stores/pagination/paginationStore'

const attrs = useAttrs()

const benefits = ref<Benefit[]>([
  {
    name: 'Plan Premium',
    category: 'Salud',
    status: 'active',
    trend: '+10%',
    used: 50,
    total: 100,
  },
  {
    name: 'Plan Básico',
    category: 'Dental',
    status: 'limited',
    trend: '-5%',
    used: 70,
    total: 100,
  },
  {
    name: 'Plan Avanzado',
    category: 'Visión',
    status: 'active',
    trend: '+8%',
    used: 40,
    total: 100,
  },
  {
    name: 'Plan Especial',
    category: 'Salud',
    status: 'active',
    trend: '+12%',
    used: 20,
    total: 100,
  },
  { name: 'Plan Oro', category: 'Dental', status: 'limited', trend: '-2%', used: 60, total: 100 },
  {
    name: 'Plan Platino',
    category: 'Visión',
    status: 'active',
    trend: '+5%',
    used: 80,
    total: 100,
  },
])

const pagination = usePaginationStore()

onMounted(() => {
  pagination.setTotalItems(benefits.value.length)
})

const visibleBenefits = computed(() =>
  benefits.value.slice(
    pagination.currentPage * pagination.itemsPerPage,
    (pagination.currentPage + 1) * pagination.itemsPerPage,
  ),
)
</script>

<template>
  <div v-bind="attrs" class="w-full p-4">
    <div
      class="card bg-base-200 shadow-xl rounded-lg p-6 space-y-6 w-full"
      :style="{ minHeight: `${visibleBenefits.length * 160}px` }"
    >
      <!-- Header -->
      <div class="flex items-center gap-3 border-b border-base-300 pb-4">
        <IconPackage class="h-6 w-6 text-primary" />
        <h2 class="font-bold text-2xl">Resumen de Beneficios</h2>
      </div>

      <!-- Lista -->
      <div class="flex flex-col gap-4">
        <BenefitItem
          v-for="(benefit, index) in visibleBenefits"
          :key="index"
          :benefit="benefit"
          class="w-full"
        />
      </div>

      <!-- Paginación -->
      <Pagination
        :totalPages="pagination.totalPages"
        :currentPage="pagination.currentPage"
        @update:page="pagination.setPage"
      />
    </div>
  </div>
</template>
