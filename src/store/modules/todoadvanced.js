
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
};
const getters = {
  allAdvancedTodos: state => state.todos,
};
const actions = {
  addTodo: (context,payload) => {
    context.commit('addTodo',payload)
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
  addTodo: (state,payload) => {
    state.todos.push({'task': payload,'status':'not-done','style': 'none'});
  },
  clearAll: state => {
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