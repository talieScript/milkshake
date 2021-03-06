<template>
  <button>
    {{ user }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  setup() {
    console.log('here');
    return {};
  },
});
</script>

<style scoped></style>
