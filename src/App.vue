<template>
  <div class=" bg-pink-bg h-screen">
    <app-header />
    <Login />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from './components/AppHeader.vue'
import Login from './components/Login.vue'

export default defineComponent({
  name: 'App',
  components: {
    AppHeader,
    Login
  }
})
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap');
</style>