<template>
  <div>
    <p>The practice is mainly for experiencing props and emit usages.</p>
    <button @click="openPopUp()">Click</button>
    <ThePopUp v-if="isVisibility" @closeByChild="closePopUp()"/>
  </div>
</template>

<script>
import ThePopUp from '@/components/ThePopUp.vue'

export default ({
  props:[],
  components: {
    ThePopUp
  },
  data() {
    return {
      isVisibility: false
    }
  },
  methods: {
    openPopUp() {
      this.isVisibility = !this.isVisibility
    },
    closePopUp() {
      this.isVisibility = !this.isVisibility
    }
  }
})
</script>


<style scoped>
button {
  width: 165px;
  padding: 5px;
  background-color: #65809b;
  color: white;
  border: 2px solid #65809b;
  border-radius: 5px;
}

button:hover {
  background-color: #516b85;
  border: 2px solid #516b85;
  cursor: pointer;
}

button:disabled {
  background-color: lightgray;
  border: 2px solid lightgray;
  cursor: not-allowed;
}
</style>