<template>
  <div class="bg-white">
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-5xl mb-5">Exercises</h2>
      <Search class="" />

      <div
        class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <a v-for="exercise in $store.state.exercises" :key="exercise.id" class="group">
          <div
          @click.once="select(exercise.id)"
            class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
          >
            <img
              :src="exercise.img"
              class="w-full h-full object-center object-cover group-hover:opacity-75"
            />
          </div>
          <p class="mt-1 text-lg font-medium text-gray-900">
            {{ exercise.title }}
          </p>
          <p class="mt-1 text-lg font-medium text-gray-400">
            {{ exercise.type }}
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// const products = [
//   {
//     id: 1,
//     name: "Intermediate exercise",
//     Type: "lorem",
//     imageSrc: "https://app.minlaering.dk/images/icons/exercise/difficulty2.svg",
//   },
//   {
//     id: 1,
//     name: "Intermediate exercise",
//     Type: "lorem",
//     imageSrc: "https://app.minlaering.dk/images/icons/exercise/difficulty2.svg",
//   },
//   {
//     id: 1,
//     name: "Intermediate exercise",
//     Type: "lorem",
//     imageSrc: "https://app.minlaering.dk/images/icons/exercise/difficulty2.svg",
//   },
//   {
//     id: 1,
//     name: "Intermediate exercise",
//     Type: "lorem",
//     imageSrc: "https://app.minlaering.dk/images/icons/exercise/difficulty2.svg",
//   },
//   {
//     id: 1,
//     name: "Intermediate exercise",
//     Type: "lorem",
//     imageSrc: "https://app.minlaering.dk/images/icons/exercise/difficulty2.svg",
//   },
//   {
//     id: 1,
//     name: "Intermediate exercise",
//     Type: "lorem",
//     imageSrc: "https://app.minlaering.dk/images/icons/exercise/difficulty2.svg",
//   },
// ];

import Search from "@/components/Search.vue";
import {mapActions} from "vuex";
import axios from "axios";

export default {
  components: {
    Search,
  },
  // setup() {
  //   return {
  //     // products,
  //   };
  // },

  methods: {
      ...mapActions(['fetchSelected','fetchExercises']),
    async select(id){
        const response = await axios.post("http://127.0.0.1:8000/api/select", {id});
        await this.fetchExercises()
        await this.fetchSelected()
        console.log(id)
        console.log(response)
    }
  },
  created() {
     this.fetchExercises()
  }
};
</script>
