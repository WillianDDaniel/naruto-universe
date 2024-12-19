<script>
  import Nav from '../components/Nav.vue';
  import Header from '../components/Header.vue';
  import About from '../components/About.vue';
  import Footer from '../components/Footer.vue';

  export default {
    name: 'Home',
    components: {
      Nav,
      Header,
      About,
      Footer,
    }
  }
</script>

<template>
  <Nav />
  <Header />
  <About />
  <Footer />
</template>

<style scoped>
</style>