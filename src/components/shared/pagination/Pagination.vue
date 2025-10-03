<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

interface PaginationEmits {
  (e: 'update:page', page: number): void
}

defineProps<PaginationProps>()

const emit = defineEmits<PaginationEmits>()

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
