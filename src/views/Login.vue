<template>
  <form
    @submit.prevent=""
    class="bg-pink-silver max-w-sm px-10 py-5 rounded-3xl flex-col flex items-center login-container"
  >
    <h2 class="text-white text-4xl text-center mb-6 font-extrabold">Login</h2>
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
    <router-link
      to="/register"
      class="text-xs underline -mt-4 self-end text-white focus:outline-none"
    >
      register here
    </router-link>
    <basic-button @click="login" text="Log In" />
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

    const login = () => {
      console.log(email);
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((data) => console.log(data))
        .catch((err) => alert(err.message));
    };

    return {
      login,
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
  transform: translate(-50%, -50%) scale(1);
  @apply absolute;
}
[ripple] .ripple--container .ripple--body {
  opacity: 0.5 !important;
  background-color: rgba(0, 0, 0, 0.1) !important;
  -webkit-animation: rippler 1000ms;
  animation: rippler 1000ms;
}
</style>
