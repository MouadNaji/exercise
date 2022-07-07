<template>
  <div class="m-10 grid grid-cols-4">
    <Exercises class="md:col-span-3 col-span-4" />
    <Selected class="md:col-span-1 col-span-3" />
  </div>
</template>

<script>
// @ is an alias to /src
import Exercises from "@/components/Exercises.vue";
import Selected from "@/components/Selected.vue";

export default {
  name: "Home",
  components: {
    Exercises,
    Selected,
  },
};
</script>
