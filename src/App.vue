<template>
  <div class="bg-pink-bg h-screen">
    <app-header />
    <router-view v-slot="{ Component }">
      <transition mode="out-in" name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from './components/AppHeader.vue';

export default defineComponent({
  name: 'App',
  components: {
    AppHeader,
  },
});
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap');
.fade-leave-active,
.fade-enter-active {
  transition: all 0.4s;
}
.fade-enter-from,
.fade-leave-active {
  transform: translate(-50%, -50%) scale(0) !important;
}
</style>
