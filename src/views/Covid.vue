<template>
  <div>
    <h2>Covid</h2>
    <p>
      API by
      <a class="text-blue-300" href="https://covid19api.com" target="_blank"
      >covid19api.com</a
      >
    </p>
    {{data.Global}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: '',
      newConfirmed: '',
      totalConfirmed: '',
      date:'',
    }
  },
  created() {
    const fetchCovidData = async () => {
      const res = await fetch('https://api.covid19api.com/summary');
      console.log(res)
      return await res.json();
    };
    const baseSetup = async () => {
      this.data = await fetchCovidData();
    };
    baseSetup();
  }
}
</script>

