import Vue from 'vue';
import Vuex from 'vuex';
import todoadvanced from './modules/todoadvanced';
import todoexample from './modules/todoexample';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todoexample,
    //todoadvanced
  }
});