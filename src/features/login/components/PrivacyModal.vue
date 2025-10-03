<script setup lang="ts">
import ModalBase from '@/components/shared/modals/ModalBase.vue'
import {
  IconUser,
  IconShieldLock,
  IconFileDescription,
  IconAlertTriangle,
  IconLock,
  IconInfoCircle,
  IconFileText,
} from '@tabler/icons-vue'
import { ref } from 'vue'

const modalRef = ref<InstanceType<typeof ModalBase> | null>(null)

defineExpose({
  open: () => modalRef.value?.open(),
  close: () => modalRef.value?.close(),
})

const privacySections = [
  {
    title: '1. Recopilación de datos',
    icon: IconLock,
    iconColor: 'text-primary',
    content:
      'Recopilamos datos personales únicamente para gestionar la toma de beneficios y mejorar la experiencia del usuario.',
  },
  {
    title: '2. Uso de la información',
    icon: IconFileDescription,
    iconColor: 'text-secondary',
    content:
      'Los datos recopilados se utilizan exclusivamente para administrar el sistema y realizar auditorías internas.',
  },
  {
    title: '3. Protección de datos',
    icon: IconShieldLock,
    iconColor: 'text-accent',
    content:
      'Implementamos medidas de seguridad técnicas y administrativas para proteger los datos contra accesos no autorizados.',
  },
  {
    title: '4. Derechos del usuario',
    icon: IconUser,
    iconColor: 'text-info',
    content:
      'Los usuarios pueden acceder, rectificar o eliminar sus datos personales mediante solicitud a la administración del sistema.',
  },
  {
    title: '5. Limitaciones',
    icon: IconAlertTriangle,
    iconColor: 'text-warning',
    content:
      'El sistema no compartirá datos personales con terceros sin el consentimiento del usuario salvo por obligación legal.',
  },
  {
    title: '6. Cambios en la política',
    icon: IconInfoCircle,
    iconColor: 'text-error',
    content:
      'Nos reservamos el derecho de modificar esta política de privacidad. Los cambios se publicarán en el sistema.',
  },
]
</script>

<template>
  <ModalBase ref="modalRef">
    <div class="w-full max-w-2xl p-4 sm:p-6 lg:p-8">
      <!-- Título -->
      <h2 class="text-lg sm:text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
        <IconFileText class="w-6 h-6 text-primary" />
        Políticas de Privacidad
      </h2>

      <!-- Acordeones -->
      <div class="space-y-3 max-h-[75vh] overflow-y-auto pr-2">
        <div
          v-for="(section, index) in privacySections"
          :key="index"
          class="collapse collapse-plus bg-base-100 border border-base-300 rounded-lg"
        >
          <input type="checkbox" />
          <div class="collapse-title font-semibold flex items-center gap-2 text-sm sm:text-base">
            <component :is="section.icon" class="w-5 h-5" :class="section.iconColor" />
            {{ section.title }}
          </div>
          <div class="collapse-content text-sm sm:text-base">
            <p>{{ section.content }}</p>
          </div>
        </div>
      </div>

      <!-- Botón aceptar -->
      <div class="modal-action flex justify-end mt-4">
        <form method="dialog">
          <button class="btn btn-primary px-6 py-2 text-sm sm:text-base">Aceptar</button>
        </form>
      </div>
    </div>
  </ModalBase>
</template>
