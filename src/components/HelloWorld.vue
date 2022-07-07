<template>
  <div class="hello">
    <h1 class="text-emerald-400">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>
