import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 定義一個新的 Vue Store
export const store = new Vuex.Store({
  state: {
    todos: [{
      'task': '吃好',
      'status': 'undone'
    },
    {
      'task': '睡飽',
      'status': 'undone'
    },
    {
      'task': '多運動',
      'status': 'undone'
    }],
    inputVal: '',
  },
  mutations: {
    clearAll: state => {
      // setTimeout(function() {
      //   state.todos = [];
      // },3000)
      state.todos = [];
    },
    markDone: (state,payload) => {
      state.todos[payload].status = 'done'
    },
  },
  actions: {
    clearAll: context => {
      setTimeout(function() {
        context.commit('clearAll')
      },2000)
    },
    markDone: (context,payload) => {
      setTimeout(function() {
        context.commit('markDone',payload)
      },4000)
    },
  }
})