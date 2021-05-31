<template>
  <div>
    <input type="text" @keyup.enter="addTodo()" v-model="inputVal" />
    <div>
      <p v-for="(item,index) in todos" :key="index" @click.once="markDone(index)" @dblclick="deleteTodo(index)" :style="{'text-decoration': item.style}">
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
        'status': 'not-done',
        'style': 'none'
      },
      {
        'task': '睡飽',
        'status': 'not-done',
        'style': 'none'
      },
      {
        'task': '多運動',
        'status': 'not-done',
        'style': 'none'
      }],
      inputVal: '',
    }
  },
  methods: {
    addTodo() {
      this.todos.push({'task': this.inputVal,'status':'not-done','style': 'none'});
      this.inputVal = '';
    },
    checkStatus(index) {
      // if(this.todos[index].status == 'not-done') {
      //   this.todos[index].style = 'none'
      // } else if(this.todos[index].status == 'done') {
      //   this.todos[index].style = 'line-through'
      // }
      let testCase = this.todos[index].status
      switch(testCase){
        case "not-done":
          this.todos[index].style = 'none'
          break
        case "done":
          this.todos[index].style = 'line-through'
          break
        default:
          this.todos[index].style = 'none'
          break
      }
    },
    markDone(index) {
      this.todos[index].status = 'done'
      this.checkStatus(index)
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
