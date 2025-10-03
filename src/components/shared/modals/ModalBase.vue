<script setup lang="ts">
import { ref } from 'vue'
import { useModal } from '@/composables/useModal'
import { IconX } from '@tabler/icons-vue'

const modalRef = ref<HTMLDialogElement | null>(null)
const { open, close, toggle } = useModal(modalRef)

defineExpose({
  modalRef,
  open,
  close,
  toggle,
})
</script>

<template>
  <dialog ref="modalRef" class="modal">
    <div
      class="modal-box relative p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl shadow-xl transition-all duration-300 transform max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full mx-auto"
    >
      <!-- Botón cerrar -->
      <form method="dialog">
        <button
          type="button"
          class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 sm:right-3 sm:top-3 md:right-4 md:top-4"
          @click="close"
        >
          <IconX class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </button>
      </form>

      <!-- Contenido dinámico -->
      <div class="space-y-4 text-sm sm:text-base md:text-lg lg:text-xl">
        <slot />
      </div>
    </div>
  </dialog>
</template>
