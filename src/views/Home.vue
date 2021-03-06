<template>
  <div class="flex flex-wrap mx-auto">
    <coin-card class="card" />
    <coin-card class="card" />
    <coin-card class="card" />
    <button
      @click="addNew"
      ripple="ripple"
      class="bg-fuchsia-100 text-gray-400 flex justify-center items-center card rounded-2xl text-4xl"
    >
      <span>+</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CoinCard from '../components/CoinCard.vue';
import BasicButton from '../components/BasicButton.vue';

export default defineComponent({
  components: {
    BasicButton,
    CoinCard,
  },
  setup() {
    const addNew = () => {
      console.log('new');
    };

    return {
      addNew,
    };
  },
});
</script>

<style lang="scss" scoped>
.card {
  @apply m-2 shadow-sm;
}
.flex-wrap > .card {
  width: calc(33.333333% - 1rem);
}
[ripple] .ripple--container .ripple--body {
  opacity: 0.5 !important;
  background-color: rgba(0, 0, 0, 0.1) !important;
  -webkit-animation: rippler 1000ms;
  animation: rippler 1000ms;
}
</style>
