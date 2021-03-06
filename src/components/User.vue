<template>
  <button>
    <button @click="logout">logout</button>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BasicButton from './BasicButton.vue';
import firebase from 'firebase';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    BasicButton,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const router = useRouter();
    const logout = () => {
      router.replace('/login');
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log('signed out');
        })
        .catch((err) => alert(err.message));
    };

    return {
      logout,
    };
  },
});
</script>

<style scoped></style>
