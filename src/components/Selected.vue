<template>
  <div class="bg-red-400 h-screen overflow-scroll md:fixed top-0 right-0">
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-5xl mb-5">Selected</h2>

      <div class="grid grid-cols-1 gap-y-10 gap-x-6 xl:gap-x-8">
        <a v-for="selected in $store.state.selected" :key="selected.id" class="group">
          <div
          @click.once="deselect(selected.id)"
            class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
          >
            <img
              :src="selected.img"
              alt="image"
              class="w-full h-full object-center object-cover group-hover:opacity-75"
            />
          </div>
          <p class="mt-1 text-lg font-medium text-gray-900">
            {{ selected.title }}
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
// ];
import {mapActions} from "vuex";
import axios from "axios";

export default {
  setup() {
    return {
      // products,
    };
  },

    methods: {
    ...mapActions(['fetchSelected','fetchExercises']),
    async deselect(id){
        const response = await axios.post("http://127.0.0.1:8000/api/deselect", {id});
        this.fetchSelected()
        this.fetchExercises()
        console.log(id)
        console.log(response)
    }
  },
  created() {
     this.fetchSelected()
  },

};
</script>
