export function useModal(modalRef) {
    const open = () => modalRef.value?.showModal();
    const close = () => modalRef.value?.close();
    const toggle = () => (modalRef.value?.open ? modalRef.value.close() : modalRef.value?.showModal());
    return { open, close, toggle };
}
