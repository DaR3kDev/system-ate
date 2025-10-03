<script setup lang="ts">
import { ref } from 'vue'
import TermsModal from '@/features/login/components/TermsModal.vue'
import PrivacyModal from '@/features/login/components/PrivacyModal.vue'
import LoginForm from '@/features/login/components/LoginForm.vue'
import { ModalExposed } from '@/lib/utils/modal-types'

const termsRef = ref<ModalExposed | null>(null)
const privacyRef = ref<ModalExposed | null>(null)

const openTerms = () => termsRef.value?.open()
const openPrivacy = () => privacyRef.value?.open()
</script>

<template>
  <div
    class="from-indigo-100 to-blue-200 min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12"
  >
    <div
      class="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-base-100 shadow-lg rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 transition-all"
    >
      <!-- Logo y título -->
      <div class="flex flex-col items-center gap-3 mb-6">
        <div
          class="flex w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 items-center justify-center rounded-full bg-primary text-primary-content"
        >
          <span class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">A</span>
        </div>
        <h1
          class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-base-content text-center"
        >
          Bienvenido a Acme Inc.
        </h1>
        <p
          class="text-xs sm:text-sm md:text-base lg:text-lg text-center text-base-content max-w-xs sm:max-w-sm md:max-w-md"
        >
          Por favor, inicia sesión para continuar
        </p>
      </div>

      <!-- Formulario -->
      <LoginForm />

      <!-- Footer -->
      <p
        class="text-xs sm:text-sm md:text-base lg:text-lg text-center text-base-content mt-4 opacity-70"
      >
        Al continuar, aceptas nuestros
        <button class="link link-primary underline" type="button" @click="openTerms">
          Términos de servicio
        </button>
        y
        <button class="link link-primary underline" type="button" @click="openPrivacy">
          Política de privacidad</button
        >.
      </p>
    </div>
  </div>

  <!-- Modales -->
  <TermsModal ref="termsRef" />
  <PrivacyModal ref="privacyRef" />
</template>
