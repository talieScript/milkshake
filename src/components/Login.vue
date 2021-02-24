<template>
  <form
    @submit.prevent=""
    class="bg-pink-silver max-w-sm px-10 py-5 rounded-3xl flex-col flex items-center login-container"
  >
    <h2 class="text-white text-4xl text-center mb-6 font-extrabold">Login</h2>
    <Input
      label="Email"
      placeholder="milkman@shakeland.com"
      required
      autofocus
    />
    <Input
      class="-mt-0"
      label="Password"
      placeholder="•••••••••••"
      required
      autofocus
      password
    />
    <button
      @click.prevent
      class="text-xs underline -mt-4 self-end text-white focus:outline-none"
    >
      register here
    </button>
    <basic-button text="Log In" />
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Input from './Input.vue';
import BasicButton from './BasicButton.vue';

export default defineComponent({
  components: { Input, BasicButton },
  setup() {
    return {};
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
[ripple] .ripple--container .ripple--body {
  opacity: 0.5 !important;
  background-color: rgba(0, 0, 0, 0.1) !important;
  -webkit-animation: rippler 1000ms;
  animation: rippler 1000ms;
}
</style>
