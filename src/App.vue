<template>
  <div id="app">
    <h2>{{ title }}</h2>
    <form @submit.prevent>
      <label for="newTodo">New todo</label>
      <input v-model="newTodo" type="text" name="newTodo" />
      <button type="submit" name="button">Add</button>
    </form>
    <ul>
      <li v-for="todo in todos" :key="todo.title">{{ todo.title }}</li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "app",
  computed: {
    ...mapState(["todos", "title"]),
    newTodo: {
      get() {
        return this.$store.state.newTodo;
      },
      set(value) {
        this.$store.commit("setNewTodo", value);
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
