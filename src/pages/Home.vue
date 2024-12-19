<script>
  import Nav from '../components/Nav.vue';
  import Header from '../components/Header.vue';
  import About from '../components/About.vue';

  export default {
    name: 'Home',
    components: {
      Nav,
      Header,
      About
    }
  }
</script>

<template>
  <Nav />
  <Header />
  <About />
</template>

<style scoped>
</style>