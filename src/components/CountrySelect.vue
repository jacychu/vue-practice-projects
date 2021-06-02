<template>
  <div>
    <select v-model="selected" @change="onChange" style="width: 300px; border:1px solid #65809b">
      <option value="0">Select a country</option>
      <option v-for="country in countriesselect" :value="country.ID">
        {{ country.Country }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'CountrySelect',
  props: ['countriesselect'],
  data() {
    return {
      selected: 0,
    }
  },
  methods: {
    onChange() {
      const country = this.countriesselect.find((item) => item.ID === this.selected)
      this.$emit('get-country', country)
    }
  }
}
</script>