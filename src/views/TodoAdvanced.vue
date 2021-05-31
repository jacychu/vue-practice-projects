<template>
  <div>
    <input type="text" @keyup.enter="addTodo()" v-model="inputVal" />
    <div>
      <p v-for="(item,index) in todos" :key="index" @click.once="markDone(index)" @dblclick="deleteTodo(index)" :class="item.status">
        {{item.task}}
      </p>
    </div>
    <br>
    <button @click="clearAll()">Clear All</button>
  </div>
</template>

<script>
export default ({
  data() {
    return {
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
    }
  },
  methods: {
    addTodo() {
      this.todos.push({'task': this.inputVal,'status':'not-done','style': 'none'});
      this.inputVal = '';
    },
    markDone(index) {
      this.todos[index].status = 'done'
    },
    deleteTodo(index) {
      this.todos.splice(index,1)
    },
    clearAll() {
      this.todos = [];
    },
  }
})
</script>

<style scoped>
.undone {
  text-decoration: none;
}
.done {
  text-decoration: line-through;
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
