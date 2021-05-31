<template>
  <div class="popup">
    <div class="popup-inner">
      <h2>Click the button to close</h2>
      <button @click="close()" class="popup-close">
        Close Popup
      </button>
    </div>
  </div>
</template>

<script>
export default ({
  methods: {
    close() {
      this.$emit('closeByChild')
    },
  }
})
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-inner {
  background: #fff;
  padding: 32px;
}

</style>