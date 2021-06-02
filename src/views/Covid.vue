<template>
  <main v-if="!loading">
    <h2>Covid</h2>
    <p style="font-size: 12px;">
      API by
      <a class="text-blue-300" href="https://covid19api.com" target="_blank"
      >covid19api.com</a
      >
    </p>
    <DataTitle :text="title" :dataDate="dataDate" />
    <DataBoxes :stats="stats" />
    <br>
    <CountrySelect :countriesselect="countries" @get-country="getCountryData" />
    <br>
    <button v-if="stats.Country" @click="clearCountryData" class="clear-btn">Clear Country</button>
  </main>
  <main v-else>
    <div>
      Fetching data!
    </div>
    <br>
    <img :src="loadingImage" alt="loading">
  </main>
</template>
<script>
import DataTitle from'@/components/DataTitle'
import DataBoxes from'@/components/DataBoxes'
import CountrySelect from'@/components/CountrySelect'

export default {
  data() {
    return {
      loading: true,
      title: 'Global',
      dataDate: '',
      stats: {},
      countries: [],
      loadingImage: require('../assets/hourglass.gif')
    }
  },
  components : {
    DataTitle,
    DataBoxes,
    CountrySelect
  },
  methods: {
    async fetchCovidData() {
      const res = await fetch('https://api.covid19api.com/summary')
      const data = await res.json()
      return data
    },
    getCountryData(country) {
      this.stats = country
      this.title = country.Country
    },
    async clearCountryData() {
      this.loading = true
      const data = await this.fetchCovidData()
      this.title = 'Global'
      this.stats = data.Global
      this.loading = false
    }
  },
  async created() {
    const data = await this.fetchCovidData();
    this.dataDate = data.Date;
    this.stats = data.Global;
    this.countries = data.Countries;
    this.loading = false;
  }
}
</script>

<style>
.clear-btn {
  width: 300px;
  border:1px solid #65809b;
  background: #65809b;
  color: white;
  border-radius: 5px;
  padding: 5px;
}
</style>
