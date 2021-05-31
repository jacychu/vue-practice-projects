<template>
  <div>
    <input :value="value" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  // props: {
  //     type: Number,
  //     //required: true,
  //     default: 0
  // }
  props: ['value','type'],
  watch: {
    value: function(value) {
      console.log(typeof(value))
      console.log(this.type)
      console.log((typeof(value) === this.type)? 'same':'different')
    }
  }
}
</script>
