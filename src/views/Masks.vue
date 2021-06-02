<template>
  <main v-if="!loading">
    <h2>Masks</h2>
    <p style="font-size: 12px;">
      API by
      <a class="text-blue-300" href="https://findmasks.herokuapp.com/places" target="_blank"
      >findmasks.herokuapp.com</a
      >
    </p>
    Updated At {{timestamp}}
    <div>
      <div v-for="(item,index) in allDetailData" :key="index" class="pharmacy-box">
        Name: {{item.name}}<br>
        Masks Left: {{item.masksLeft}}<br>
        Child Masks Left: {{item.childMasksLeft}}
      </div>
    </div>
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
import moment from 'moment'

export default {
  data() {
    return {
      loading: true,
      alldata: [],
      dataDate: '',
      name: [],
      masksLeft: [],
      childMasksLeft: [],
      // nearHomeData1: [],
      // nearHomeData2: [],
      // nearHomeData3: [],
      allDetailData: [],
      loadingImage: require('../assets/hourglass.gif')
    }
  },
  computed: {
    timestamp: function() {
      return moment(this.dataDate).format('MMMM Do YYYY, h:mm:ss a')
    }
  },
  methods: {
    async fetchMasksData() {
      const res = await fetch('https://findmasks.herokuapp.com/places')
      const data = await res.json()
      return data
    }
  },
  async created() {
    const data = await this.fetchMasksData();
    this.alldata = data.features;
    this.dataDate = this.alldata[1].properties.updatedAt;
    const nearHome = this.alldata.filter((item) => (Number(item.geometry.coordinates[0])>121.55790) && (Number(item.geometry.coordinates[0])<121.56850) && (Number(item.geometry.coordinates[1])>24.98179) && (Number(item.geometry.coordinates[1])<24.98559) )
    // this.nearHomeData1  = Object.assign([], nearHome);
    // this.nearHomeData2  = Object.assign([], nearHome);
    // this.nearHomeData3  = Object.assign([], nearHome);
    let all = nearHome;
    // array[index]=[];
    // all.forEach(function(item, index, array){
    //   array[index].push({'name':item.properties.name,'masksLeft':item.properties.masksLeft,'childmasksLeft':item.properties.childMasksLeft})
    // });
    console.log(all);
    let arr = [];
    for(let i=0; i<all.length; i++) {
      arr.push({'name':all[i].properties.name,'masksLeft':all[i].properties.masksLeft,'childMasksLeft':all[i].properties.childMasksLeft})
    }
    this.allDetailData = arr;
    console.log(this.allDetailData);
    // let getName = this.nearHomeData1;
    // getName.forEach(function(item, index, array){array[index] = item.properties.name});
    // this.name = getName;
    // //console.log(this.name);
    // let getMasksLeft = this.nearHomeData2;
    // getMasksLeft.forEach(function(item, index, array){array[index] = item.properties.masksLeft});
    // this.masksLeft = getMasksLeft;
    // //console.log(this.masksLeft);
    // const getChildMasksLeft = this.nearHomeData3;
    // getChildMasksLeft.forEach(function(item, index, array){array[index] = item.properties.childMasksLeft});
    // this.childMasksLeft = getChildMasksLeft;
    // //console.log(this.childMasksLeft);
    this.loading = false;
  }
}
</script>

<style>
.pharmacy-box {
  width: 400px;
  margin:auto;
  border: 3px solid #65809b;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
}
</style>