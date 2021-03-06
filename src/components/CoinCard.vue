<template>
  <artical class="bg-pink-silver w-1/4 px-3 py-4 text-white rounded-3xl">
    <div class="flex items-center">
      <img class="w-10 h-10 mr-4" :src="logoUrl" :alt="`${coinName} logo`" />
      <h4 class="text-white text-3xl">{{ coinName }}</h4>
    </div>
    <div class="text-sm mt-3">
      Price: <br />
      <span class="mr-2 text-lg">£{{ numberWithCommas(price) }}</span>
      <span :class="changeColour">+{{ change }}</span>
    </div>
    <div class="text-sm mt-3">
      Holdings: <br />
      <span class="mr-2 text-lg"
        >£{{ numberWithCommas(Math.round(holdings * price)) }}</span
      >
      <span :class="changeColour">+{{ change }}</span> <br />
      {{ holdings }}
    </div>
  </artical>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const numberWithCommas = (price) => {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    return {
      coinName: 'BTC',
      price: 48783.09,
      holdings: 0.04617294,
      change: 12.13,
      logoUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
      numberWithCommas,
    };
  },
  computed: {
    changeColour(): string {
      return this.change > 0 ? 'text-green-400' : 'text-red-400';
    },
  },
});
</script>
