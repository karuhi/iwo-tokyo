<template>
  <transition name="modal" appear>
    <div class="modal__overlay h-full w-full" @click.self="closeModal">
      <div class="modal__window h-3/4 w-4/5 rounded">
        <div class="modal__content h-full p-8">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  methods: {
    closeModal() {
      console.log('emit')
      this.$emit('close-modal')
    },
  },
}
</script>
<style scoped>
.modal__overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
}
.modal__window {
  overflow: hidden;
  background-color: #fff;
}
.modal__content {
  /* padding: 30px; */
  overflow-x: none;
  overflow-y: scroll;
}
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s;
}
.modal-enter-active .modal__window,
.modal-leave-active .modal__window {
  transition: opacity 0.4s, transform 0.4s;
}
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}
.modal-enter .modal__window,
.modal-leave-to .modal__window {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
