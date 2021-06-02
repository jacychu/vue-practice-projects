<template>
  <div>
    <div class="box">
      <h4>Cases</h4>
      <p>New: {{ numberWithCommas(stats.NewConfirmed) }}</p>
      <p>Total: {{ numberWithCommas(stats.TotalConfirmed) }}</p>
    </div>
    <div class="box">
      <h4>Deaths</h4>
      <p>New: {{ numberWithCommas(stats.NewDeaths) }}</p>
      <p>Total: {{ numberWithCommas(stats.TotalDeaths) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataBoxes',
  props: ['stats'],
  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
}
</script>

<style>
.box {
  margin: auto;
  width: 300px;
  border: 1px solid lightgray;
  margin-top: 20px;
}
</style>