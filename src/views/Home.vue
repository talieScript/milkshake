<template>
  <div>home</div>
  <basic-button text="log out" @click="logout" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import firebase from 'firebase';
import { useRouter } from 'vue-router';
import BasicButton from '../components/BasicButton.vue';

export default defineComponent({
  components: {
    BasicButton,
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
