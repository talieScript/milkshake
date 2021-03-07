<template>
  <div
    class="w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-25 z-40 flex items-center justify-center"
  >
    <dialog
      :open="true"
      class="bg-pink-bg py-4 px-20 w-11/12 sm:w-auto text-gray-600 rounded-3xl max-w-lg"
    >
      <h5 class="text-center text-white text-3xl font-bold">Add Coin</h5>
      <Input
        v-model:value="searchValue"
        label="Find Token/Coin"
        placeholder="Search..."
        width="full"
      />
      <ul v-if="searchResultes?.length">
        <li
          v-for="coin in searchResultes"
          :key="coin.id"
          class="flex items-center mb-3 hover:bg-gray-50 p-2 rounded-2xl cursor-pointer"
          @click="selectCoin(coin.id)"
        >
          <img class="w-9 h-9 mr-4" :src="coin.imgUrl" />
          <h6 class="font-bold text-xl mr-2">{{ coin.name }}</h6>
          <span class="text-sm text-gray-400">{{ coin.ticker }}</span>
          <span class="text-4xl ml-auto -mt-1">&rsaquo;</span>
        </li>
      </ul>
      <p v-else class="text-center text-white">No coins found</p>
    </dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Input from './Input.vue';

export default defineComponent({
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    Input,
  },
  data() {
    return {
      searchResultes: [
        {
          id: 1,
          imgUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
          name: 'Bitcoin',
          ticker: 'BTC',
        },
        {
          id: 2,
          imgUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
          name: 'Bitcoin',
          ticker: 'BTC',
        },
        {
          id: 3,
          imgUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
          name: 'Bitcoin',
          ticker: 'BTC',
        },
      ],
    };
  },
  setup() {
    const selectCoin = (coinId) => {
      console.log(coinId);
    };
    const searchValue = ref('');
    return {
      selectCoin,
      searchValue,
    };
  },
  computed: {
    localOpen: {
      get(): boolean {
        return this.open;
      },
      set(value: boolean) {
        this.$emit('setOpen');
      },
    },
  },
});
</script>

<style scoped></style>
