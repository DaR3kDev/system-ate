<script setup lang="ts">
import SectionsCards from '@/components/shared/cards/SectionsCards.vue'
import SummaryBenefits from '@/features/dashboard/components/SummaryBenefits.vue'
import { IconUsersGroup, IconGift, IconHomeHeart, IconChecklist } from '@tabler/icons-vue'
</script>

<template>
  <div class="p-4 space-y-6">
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <SectionsCards
        title="Total Afiliados"
        value="12,500"
        description="Usuarios registrados en el sistema"
        badgeText="+12.5%"
        badgeColor="badge-success badge-outline"
        :icon="IconUsersGroup"
        footerText="Crecimiento mensual de afiliados"
      />

      <SectionsCards
        title="Beneficios Activos"
        value="1,234"
        description="Beneficios disponibles actualmente"
        badgeText="+5%"
        badgeColor="badge-success badge-outline"
        :icon="IconGift"
        footerText="Nuevos beneficios agregados este mes"
      />

      <SectionsCards
        title="Familias con Hijos"
        value="3,457"
        description="Familias activas con hijos"
        badgeText="+8%"
        badgeColor="badge-success badge-outline"
        :icon="IconHomeHeart"
        footerText="Incremento en la última semana"
      />

      <SectionsCards
        title="Beneficios Utilizados"
        value="845"
        description="Beneficios reclamados por afiliados"
        badgeText="-2%"
        badgeColor="badge-error badge-outline"
        :icon="IconChecklist"
        footerText="Menor uso comparado al mes anterior"
      />
    </div>

    <div class="w-full">
      <SummaryBenefits class="w-full h-[800px]" />
    </div>
  </div>
</template>
