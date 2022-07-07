<template>
  <div class="md:flex gap-5">
    <div
      class="relative border w-64 md:mb-10 mb-1 border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600"
    >
      <label
        for="name"
        class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
        >Seach for exercise</label
      >
      <input
        type="text"
        name="name"
        id="name"
        v-model="searchword"
        @input="search"
        class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
        placeholder="Search"
      />
    </div>
    <span class="relative z-0 inline-flex shadow-sm rounded-md h-10">
      <button
      @click="search('')"
        type="button"
        class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1"
      >
        All
      </button>
      <button
      @click="search('Intermediate')"
        type="button"
        class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1"
      >
        Intermediate
      </button>
      <button
      @click="search('hard')"
        type="button"
        class="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1"
      >
        Hard
      </button>
    </span>
  </div>
</template>




<script>

import axios from "axios"

export default {
  setup() {
    return {
       searchword:"",

    };
  },

  methods: {
    async search(type){
    const response = await axios.get("http://127.0.0.1:8000/api/exercises?search="+this.searchword+"&type="+type);
    this.$store.state.exercises = response.data
}
  },
};
</script>