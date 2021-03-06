<template>
  <div class="bg-pink-bg h-screen">
    <app-header />
    <router-view v-slot="{ Component }">
      <!-- <transition mode="out-in" name="fade"> -->
      <component :is="Component" />
      <!-- </transition> -->
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import firebase from 'firebase';
import Home from './views/Home.vue';

export default defineComponent({
  name: 'App',
  components: {
    AppHeader,
    Home,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          setTimeout(() => {
            router.push('/login');
          }, 100);
        } else if (route.path === '/login' || route.path === '/register') {
          setTimeout(() => {
            router.push('/');
          }, 100);
        }
      });
    });
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap');
.fade-leave-active,
.fade-enter-active {
  transition: all 0.3s;
}
.fade-enter-from,
.fade-leave-active {
  transform: translate(-50%, -50%) scale(0) !important;
  opacity: 0;
}
</style>
