<template>
  <div class="flex w-full max-w-4xl justify-between mx-auto my-0 pt-3">
    <coin-card />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CoinCard from '../components/CoinCard.vue';

export default defineComponent({
  components: { CoinCard },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
