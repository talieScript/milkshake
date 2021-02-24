<template>
  <button
    @click="$emit('click')"
    ripple="ripple"
    class="inline-block mt-6 px-6 py-3 font-medium leading-6 text-center text-white uppercase transition bg-teal-400 rounded-full shadow hover:shadow-lg focus:outline-none w-72"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    disabled: Boolean,
    text: String,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
[ripple] .ripple--container .ripple--body {
  opacity: 0.5 !important;
  background-color: rgba(0, 0, 0, 0.1) !important;
  -webkit-animation: rippler 1000ms;
  animation: rippler 1000ms;
}
</style>
