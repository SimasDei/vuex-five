import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "Vuex Training",
    newTodo: "",
    todos: [
      {
        title: "Learn Vuex",
        done: false
      },
      {
        title: "Implement into another Project",
        done: false
      }
    ]
  },
  getters: {},
  mutations: {
    setNewTodo(state, payload) {
      state.newTodo = payload;
    }
  },
  actions: {}
});
