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
    content:
      'Recopilamos datos personales únicamente para gestionar la toma de beneficios y mejorar la experiencia del usuario.',
    icon: IconLock,
    iconColor: 'text-primary',
  },
  {
    title: '2. Uso de la información',
    content:
      'Los datos recopilados se utilizan exclusivamente para administrar el sistema y realizar auditorías internas.',
    icon: IconFileDescription,
    iconColor: 'text-secondary',
  },
  {
    title: '3. Protección de datos',
    content:
      'Implementamos medidas de seguridad técnicas y administrativas para proteger los datos contra accesos no autorizados.',
    icon: IconShieldLock,
    iconColor: 'text-accent',
  },
  {
    title: '4. Derechos del usuario',
    content:
      'Los usuarios pueden acceder, rectificar o eliminar sus datos personales mediante solicitud a la administración del sistema.',
    icon: IconUser,
    iconColor: 'text-info',
  },
  {
    title: '5. Limitaciones',
    content:
      'El sistema no compartirá datos personales con terceros sin el consentimiento del usuario salvo por obligación legal.',
    icon: IconAlertTriangle,
    iconColor: 'text-warning',
  },
  {
    title: '6. Cambios en la política',
    content:
      'Nos reservamos el derecho de modificar esta política de privacidad. Los cambios se publicarán en el sistema.',
    icon: IconInfoCircle,
    iconColor: 'text-error',
  },
]
</script>

<template>
  <ModalBase ref="modalRef">
    <!-- Contenedor principal -->
    <div class="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-4 sm:py-6 md:py-8 lg:py-10">
      <!-- Título con icono -->
      <h2 class="text-lg sm:text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
        <IconFileText class="w-6 h-6 text-primary" />
        Políticas de Privacidad
      </h2>

      <!-- Acordeones -->
      <div class="space-y-3 max-h-[80vh] overflow-y-auto pr-2">
        <div
          class="collapse collapse-plus bg-base-100 border border-base-300 rounded-lg shadow-sm"
          v-for="(item, index) in privacySections"
          :key="index"
        >
          <input type="checkbox" />
          <div class="collapse-title font-semibold flex items-center gap-2 text-sm sm:text-base">
            <component :is="item.icon" class="w-5 h-5" :class="item.iconColor" />
            {{ item.title }}
          </div>
          <div class="collapse-content text-sm sm:text-base leading-relaxed">
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>

      <!-- Botón acción -->
      <div class="modal-action flex justify-end mt-4">
        <form method="dialog">
          <button class="btn btn-primary px-6 py-2 text-sm sm:text-base">Aceptar</button>
        </form>
      </div>
    </div>
  </ModalBase>
</template>
