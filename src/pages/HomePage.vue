<script setup lang="ts">
import SectionsCards from '@/components/shared/cards/SectionsCards.vue'
import SummaryBenefits from '@/features/dashboard/components/SummaryBenefits.vue'
import { IconUserStar, IconDiscount2, IconUserShield, IconCalendarClock } from '@tabler/icons-vue'
</script>

<template>
  <div class="p-4 space-y-6">
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <!-- Afiliados -->
      <SectionsCards
        title="Total Afiliados"
        value="12,500"
        description="Usuarios registrados en el sistema"
        badgeText="+12.5%"
        badgeColor="badge-success badge-outline"
        :icon="IconUserStar"
        footerText="Crecimiento mensual de afiliados"
      />

      <!-- Beneficios Activos -->
      <SectionsCards
        title="Beneficios Activos"
        value="1,234"
        description="Beneficios disponibles actualmente"
        badgeText="+5%"
        badgeColor="badge-success badge-outline"
        :icon="IconDiscount2"
        footerText="Nuevos beneficios agregados este mes"
      />

      <!-- Delegados -->
      <SectionsCards
        title="Delegados"
        value="128"
        description="Delegados activos registrados"
        badgeText="+3%"
        badgeColor="badge-success badge-outline"
        :icon="IconUserShield"
        footerText="Delegados incorporados este trimestre"
      />

      <!-- Eventos Próximos -->
      <SectionsCards
        title="Eventos Próximos"
        value="12"
        description="Eventos programados para este mes"
        badgeText="+4"
        badgeColor="badge-success badge-outline"
        :icon="IconCalendarClock"
        footerText="Eventos nuevos creados esta semana"
      />
    </div>

    <!-- Gráfica -->
    <div class="w-full">
      <SummaryBenefits class="w-full h-[800px]" />
    </div>
  </div>
</template>
