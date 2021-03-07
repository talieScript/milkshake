<template>
  <div class="flex flex-wrap mx-auto">
    <coin-card class="card" />
    <coin-card class="card" />
    <coin-card class="card" />
    <button
      @click="newDialogOpen = true"
      ripple="ripple"
      class="bg-fuchsia-100 text-gray-400 flex justify-center items-center card rounded-2xl text-4xl"
    >
      <span>+</span>
    </button>
  </div>
  <new-model v-model:open="newDialogOpen" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CoinCard from '../components/CoinCard.vue';
import BasicButton from '../components/BasicButton.vue';
import NewModel from '../components/NewDialog.vue';

export default defineComponent({
  components: {
    BasicButton,
    CoinCard,
    NewModel,
  },
  data() {
    return {
      newDialogOpen: false,
    };
  },
  watch: {
    newDialogOpen(value) {
      console.log(value);
    },
  },
  setup() {
    return {};
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
