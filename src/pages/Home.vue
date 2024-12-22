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
    },
    beforeCreate() {
      const params = new URLSearchParams(window.location.search);
      const redirectPath = params.get('redirect');

      if (redirectPath) {
        this.$router.push(redirectPath);
      }
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