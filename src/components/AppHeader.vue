<template>
  <div class="bg-pink-100 p-2 flex justify-between items-center">
    <h1 class="text-pink-400 font-bold text-xl">Milkshake</h1>
    <user v-if="user" :user="user" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import firebase from 'firebase';
import User from './User.vue';

export default defineComponent({
  components: {
    User,
  },
  setup() {
    const user = firebase.auth().currentUser;
    return {
      user,
    };
  },
});
</script>

<style scoped></style>
