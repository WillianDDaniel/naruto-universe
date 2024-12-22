<script>
  import Nav from '../components/Nav.vue';
  import Footer from '../components/Footer.vue';

  export default {
    name: 'NotFound',
    components: {
      Nav,
      Footer
    }
  };
</script>

<template>
  <Nav />
  <div class="not-found">
    <h1>404 - Página Não Encontrada</h1>
    <p>A página que você está tentando acessar não existe.</p>
    <router-link to="/naruto-universe">Voltar para a página inicial</router-link>
  </div>
  <Footer />
</template>

<style scoped>
  .not-found {
    text-align: center;
    padding: 2rem;
  }
  .not-found h1 {
    font-size: 2rem;
    color: #f4511e;
  }
</style>
