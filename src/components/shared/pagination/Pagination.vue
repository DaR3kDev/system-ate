<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  totalPages: number
  currentPage: number
}>()

const emit = defineEmits<{
  (e: 'update:page', page: number): void
}>()

function goToPage(page: number) {
  emit('update:page', page)
}
</script>

<template>
  <div class="join mt-4 justify-center">
    <button
      v-for="page in totalPages"
      :key="page"
      class="join-item btn btn-square"
      :class="currentPage === page - 1 ? 'btn-primary' : ''"
      @click="goToPage(page - 1)"
    >
      {{ page }}
    </button>
  </div>
</template>
