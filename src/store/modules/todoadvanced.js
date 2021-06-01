// import axios from 'axios';

const state = {
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
};
const getters = {
  allTodos: state => state.todos,
  getInputVal: state => state.inputVal
};
const actions = {
  addTodo: context => {
    context.commit('addTodo')
  },
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
  deleteTodo: (context,payload) => {
    context.commit('deleteTodo',payload)
  }
};
const mutations = {
  addTodo: state => {
    state.todos.push({'task': state.inputVal,'status':'not-done','style': 'none'});
    state.inputVal = '';
  },
  clearAll: state => {
    // setTimeout(function() {
    //   state.todos = [];
    // },3000)
    state.todos = [];
  },
  markDone: (state,payload) => {
    state.todos[payload].status = 'done'
  },
  deleteTodo: (state,payload) => {
    state.todos.splice(payload,1)
  },
};
export default {
  state,
  getters,
  actions,
  mutations
};