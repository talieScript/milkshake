<template>
  <artical class="bg-pink-silver w-full max-w-xs">
    <h4 class="text-white text-xl text">{{ coinName }}</h4>
    <div class="">
      Price: <br />
      <span>{{ price }}</span>
      <span :class="changeColour">+{{ change }}</span>
    </div>
  </artical>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
      coinName: 'BTC',
      price: 48783.09,
      holdings: 0.04617294,
      change: 12.13,
    };
  },
  computed: {
    changeColour() {
      return this.change > 0 ? 'text-green-400' : 'text-red-400';
    },
  },
});
</script>
