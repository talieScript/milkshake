<template>
  <form
    @submit.prevent=""
    class="bg-pink-silver max-w-sm px-10 py-5 rounded-3xl flex-col flex items-center login-container"
  >
    <h2 class="text-white text-4xl text-center mb-6 font-extrabold">Sign Up</h2>
    <Input
      v-model="email"
      label="Email"
      placeholder="milkman@shakeland.com"
      required
      autofocus
    />
    <Input
      v-model="password"
      class="-mt-0"
      label="Password"
      placeholder="•••••••••••"
      required
      autofocus
      password
    />
    <div class="flex items-center mt-2">
      <input v-model="terms" id="terms" type="checkbox" class="h-4 w-4" />
      <label for="terms" class="ml-2"
        >I agree to the
        <router-link
          to="/terms"
          @click.prevent
          class="font-semibold text-pink-400 hover:underline cursor-pointer outline-none"
        >
          Terms and conditions
        </router-link>
      </label>
    </div>
    <basic-button text="Sign Up" />
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import BasicButton from '../components/BasicButton.vue';
import Input from '../components/Input.vue';
import firebase from 'firebase';

export default defineComponent({
  components: { Input, BasicButton },
  setup() {
    const email = ref('');
    const password = ref('');

    const register = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((user) => {
          console.log('YAY! You have registered 🥳');
        })
        .catch((err) => alert(err.message));
    };

    return {
      register,
      email,
      password,
    };
  },
});
</script>

<style scoped>
.login-container {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @apply absolute;
}
</style>
