import { createStore } from "vuex";
import axios from "axios"

export default createStore({
  state: {
    exercises:[],
    selected:[]
  },
  mutations: {
    setExercises(state, exercises){
      state.exercises = exercises
    },
    setSelected(state, selected){
      state.selected = selected
    }

  },
  actions: {
    async fetchExercises({commit}){
      const response = await axios.get("http://127.0.0.1:8000/api/exercises");
      commit('setExercises', response.data);
    },

    async fetchSelected({commit}){
      const response = await axios.get("http://127.0.0.1:8000/api/selected");
      commit('setSelected', response.data);
      console.log("selected");
    }

   
  },
  modules: {},
});
