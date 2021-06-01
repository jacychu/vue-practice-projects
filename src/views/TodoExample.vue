<template>
  <div>
    <h3>Todos</h3>
    <AddTodo />
    <br>
    <div class="todos">
      <div v-for="todo in allTodos" :key="todo.id" class="todo">
        {{todo.title}}
        <i @click="deleteTodo(todo.id)" class="fas fa-trash"></i>
      </div>
    </div>
  </div>
</template>
<script>
import AddTodo from "@/components/AddToDo.vue"
import {mapGetters, mapActions} from 'vuex';

export default {
  components: {
    AddTodo
  },
  methods: {
    ...mapActions(['fetchTodos','deleteTodo'])
  },
  computed: {
    ...mapGetters(["allTodos"])
  },
  created() {
    this.fetchTodos()
  }
}
</script>
<style>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid gray;
  background: lightgray;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: white;
  cursor: pointer;
}
</style>
