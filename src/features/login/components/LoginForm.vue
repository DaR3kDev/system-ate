<script setup lang="ts">
import { ref, computed } from 'vue'
import { IconEye, IconEyeOff } from '@tabler/icons-vue'

const showPassword = ref(false)
const password = ref('')
const passwordFocused = ref(false)

function togglePassword() {
  showPassword.value = !showPassword.value
}

const showEyeIcon = computed(() => {
  return passwordFocused.value || password.value.length > 0
})
</script>

<template>
  <form
    class="flex flex-col gap-6 p-4 sm:p-6 md:p-8 lg:p-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto w-full"
  >
    <!-- Email -->
    <div class="form-control w-full">
      <label class="label" for="email">
        <span class="label-text text-sm sm:text-base md:text-lg lg:text-xl">
          Correo electrónico
        </span>
      </label>
      <input
        id="email"
        type="email"
        placeholder="ejemplo@correo.com"
        class="input input-bordered w-full text-sm sm:text-base md:text-lg lg:text-xl"
        required
        autocomplete="username"
      />
    </div>

    <!-- Contraseña -->
    <div class="form-control w-full relative">
      <label class="label" for="password">
        <span class="label-text text-sm sm:text-base md:text-lg lg:text-xl"> Contraseña </span>
      </label>
      <input
        :type="showPassword ? 'text' : 'password'"
        id="password"
        v-model="password"
        placeholder="••••••••"
        class="input input-bordered w-full pr-10 text-sm sm:text-base md:text-lg lg:text-xl"
        required
        autocomplete="current-password"
        @focus="passwordFocused = true"
        @blur="passwordFocused = false"
      />
      <!-- Icono ojo -->
      <button
        v-if="showEyeIcon"
        type="button"
        class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        @click="togglePassword"
      >
        <component
          :is="showPassword ? IconEyeOff : IconEye"
          class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
        />
      </button>
    </div>

    <!-- Botón iniciar sesión -->
    <button
      class="btn btn-primary w-full py-2 sm:py-3 md:py-4 lg:py-5 text-sm sm:text-base md:text-lg lg:text-xl"
    >
      Iniciar sesión
    </button>
  </form>
</template>
