<template>
  <div>
    <input type="text" @keyup.enter="addTodo()" v-model="inputVal" />
    <div>
      <p v-for="(item,index) in todos" :key="index" @click.once="markDone(index)" @dblclick="deleteTodo(index)" :style="styleObject">
        {{item}}
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
      todos: ['吃好','睡飽','多運動'],
      inputVal: '',
      styleObject: {
        'text-decoration':'none'
      }
    }
  },
  methods: {
    addTodo() {
      this.todos.push(this.inputVal);
      this.inputVal = '';
    },
    markDone(index) {
      this.$set(this.todos, index, 'V'+ this.todos[index])
      console.log(this.todos[index]);
    },
    deleteTodo(index) {
      this.todos.splice(index,1)
    },
    clearAll(){
      this.todos = [];
    }
  }
})
</script>

<style scoped>
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
