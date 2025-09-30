<script setup lang="ts">
import SectionsCards from '@/components/shared/cards/SectionsCards.vue'
import { IconUsersGroup, IconGift, IconHomeHeart, IconChecklist } from '@tabler/icons-vue'
</script>

<template>
  <!--  Grid principal -->
  <div class="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <!--  Total Afiliados -->
    <SectionsCards
      title="Total Afiliados"
      value="12,500"
      description="Usuarios registrados en el sistema"
      badgeText="+12.5%"
      badgeColor="badge-success badge-outline"
      :icon="IconUsersGroup"
      footerText="Crecimiento mensual de afiliados"
    />

    <!--  Beneficios Activos -->
    <SectionsCards
      title="Beneficios Activos"
      value="1,234"
      description="Beneficios disponibles actualmente"
      badgeText="+5%"
      badgeColor="badge-success badge-outline"
      :icon="IconGift"
      footerText="Nuevos beneficios agregados este mes"
    />

    <!--  Familias con Hijos -->
    <SectionsCards
      title="Familias con Hijos"
      value="3,457"
      description="Familias activas con hijos"
      badgeText="+8%"
      badgeColor="badge-success badge-outline"
      :icon="IconHomeHeart"
      footerText="Incremento en la última semana"
    />

    <!-- Beneficios Utilizados -->
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
</template>
