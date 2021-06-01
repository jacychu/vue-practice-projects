<template>
  <div>
    <list-items>
      <template v-slot:title>
        To Do List
      </template>
      <template v-slot:contnet>
        <form @submit="onSubmit">
          <input type="text" v-model="title" placeholder="Add todo...">
          <input type="submit" value="Submit">
        </form>
        <!-- <input type="text" @keyup.enter="addTodo" v-model="title" /> -->
        <div>
          <p v-for="(item,index) in allAdvancedTodos" :key="index" @click.once="markDone(index)" @dblclick="deleteTodo(index)" :class="item.status">
            {{item.task}}
          </p>
        </div>
      </template>
    </list-items>
    <button @click="clearAll()" class="btn-style">Clear All</button>
  </div>
</template>

<script>
import ListItems from "@/components/ListItems";
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      title: ''
    }
  },
  components: {
    "list-items": ListItems,
  },
  methods: {
    ...mapActions ([
      'fetchTodos',
      'addTodo',
      'markDone',
      'clearAll',
      'deleteTodo'
    ]),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.title);
    }
  },
  computed: {
    ...mapGetters(["allAdvancedTodos"]),
  },
}
</script>

<style scoped>
.undone {
  text-decoration: none;
}
.done {
  text-decoration: line-through;
}
.btn-style {
  width: 165px;
  padding: 5px;
  background-color: #65809b;
  color: white;
  border: 2px solid #65809b;
  border-radius: 5px;
}

.btn-style:hover {
  background-color: #516b85;
  border: 2px solid #516b85;
  cursor: pointer;
}

.btn-style:disabled {
  background-color: lightgray;
  border: 2px solid lightgray;
  cursor: not-allowed;
}
</style>
