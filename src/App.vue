<template>
  <div class="bg-pink-bg h-screen">
    <app-header :user="localUser" />
    <router-view v-slot="{ Component }">
      <!-- <transition mode="out-in" name="fade"> -->
      <component :user="user" :is="Component" />
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
  data() {
    return {
      router: undefined as any,
      route: undefined as any,
      localUser: null as any,
    };
  },
  created() {
    this.router = useRouter();
    this.route = useRoute();
    firebase.auth().onAuthStateChanged((user) => {
      this.localUser = user;
      if (!user) {
        this.router.push('/login');
      } else if (
        this.route.path === '/login' ||
        this.route.path === '/register'
      ) {
        this.router.push('/');
      }
    });
  },
  setup() {
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
