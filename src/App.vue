<script>
  import Nav from './components/Nav.vue'
  import Header from './components/Header.vue';
  export default {
    name: 'App',
    components: {
      Nav,
      Header
    }
  }
</script>

<template>
  <v-app>
    <Nav />
    <Header />
  </v-app>
</template>

<style scoped>
</style>
