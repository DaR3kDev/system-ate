import { Ref } from 'vue'

export function useModal(modalRef: Ref<HTMLDialogElement | null>) {
  const open = () => modalRef.value?.showModal()
  const close = () => modalRef.value?.close()
  const toggle = () => (modalRef.value?.open ? modalRef.value.close() : modalRef.value?.showModal())

  return { open, close, toggle }
}
