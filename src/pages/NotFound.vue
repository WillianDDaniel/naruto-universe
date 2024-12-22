<template>
  <div class="not-found">
    <h1>404 - Página Não Encontrada</h1>
    <p>A página que você está tentando acessar não existe.</p>
    <router-link to="/naruto-universe">Voltar para a página inicial</router-link>
  </div>
</template>

<script>
  export default {
    name: 'NotFound',
  };
</script>

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
