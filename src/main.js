import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  getters: {
    getCount: state => {
        return state.count;
    }
  }
})

new Vue({
  router,
  render: h => h(App),
  store,
}).$mount('#app')
