<template>
  <form
    @submit.prevent=""
    class="bg-pink-silver max-w-sm px-10 py-5 rounded-3xl flex-col flex items-center login-container"
  >
    <h2 class="text-white text-4xl text-center mb-6 font-extrabold">Sign Up</h2>
    <Input
      v-model:value="email"
      label="Email"
      placeholder="milkman@shakeland.com"
      required
      autofocus
    />
    <Input
      v-model:value="password"
      class="-mt-0"
      label="Password"
      placeholder="•••••••••••"
      required
      autofocus
      password
    />
    <Input
      class="-mt-0"
      label="Confirm Password"
      placeholder="•••••••••••"
      required
      autofocus
      password
    />
    <router-link
      to="/login"
      class="text-xs underline -mt-4 self-end text-white focus:outline-none"
    >
      Log in
    </router-link>
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
    <basic-button @click="register" text="Sign Up" />
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import BasicButton from '../components/BasicButton.vue';
import Input from '../components/Input.vue';
import firebase from 'firebase';

export default defineComponent({
  components: { Input, BasicButton },
  setup() {
    const email = ref('');
    const password = ref('');

    const register = () => {
      console.log(email.value);
      console.log(password.value);
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((user) => {
          console.log(user);
        })
        .catch((err) => {
          alert(err.message);
        });
    };

    return {
      email,
      password,
      register,
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
