<template>
  <div id="bmi-calculator">
    <br>
    <!-- <font-awesome-icon style="font-size:60px;" :icon="['fas', 'weight']" /> -->
    <div class="calculate-part">
      <h1>BMI calculator</h1>
      <p>Height(cm):</p>
      <InputValid v-model="height" type="string"/>
      <p>Weight(kg):</p>
      <InputValid v-model="weight" type="string"/>
      <br>
    </div>
    <button v-on:click="bmiCalculation(),bmiResult(bmi)" :disabled="!weight || !height">Check BMI</button>
    <p>BMI is :{{ bmi }}</p>
    <p :style="styleObject">{{ outcome }}</p>
  </div>
</template>

<script>
import InputValid from '@/components/InputValid.vue'

export default ({
  props:['btnText'],
  components: {
    InputValid
  },
  name: 'bmi-calculator',
  data() {
    return {
      height: null,
      weight: null,
      bmi: 0,
      outcome: "",
      styleObject: {
        color: 'red',
      }
    }
  },
  // watch: {
  //   height: function(value) {
  //     console.log((typeof(value) ===   )? 'same':'different')
  //   }
  // },
  methods: {
    bmiCalculation() {
      var h = parseInt(this.height)/100;
      var w = parseInt(this.weight);
      this.bmi = isNaN(w/(h*h)) ? 0: (w/(h*h)).toFixed(2);
    },
    bmiResult(bmi) {
      if(bmi>=24 && bmi<40) {
        this.styleObject= {color: 'red'}
        this.outcome = 'Do more exercise!'
      } else if(bmi>=18.5 && bmi<24) {
        this.styleObject= {color: 'olive'}
        this.outcome = 'Keep it up!'
      } else if(bmi>=12 && bmi<18.5) {
        this.styleObject= {color: 'red'}
        this.outcome = 'Eat more!'
      } else if(bmi>=40 || bmi<12) {
        this.styleObject= {color: '#65809b'}
        this.outcome = 'Please check your input!'
      }
    }
  }
})
</script>

<style scoped>
#bmi-calculator {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #65809b;
  margin-top: 60px;
  border: 8px solid #65809b;
  border-radius: 30px;
  width: 300px;
  margin: auto;
  padding-bottom: 20px;
}

.calculate-part {
  margin-bottom: 20px;
}

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