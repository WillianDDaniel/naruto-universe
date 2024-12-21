<script>
  import { RouterLink } from 'vue-router';

  export default {
    name: 'Footer',
    computed: {
      year() {
        return new Date().getFullYear();
      }
    }
  }
</script>

<template>
  <v-footer color="footer">

    <p>&copy; {{ year }} Naruto Universe. Todos os direitos reservados.</p>

    <div class="links">
      <RouterLink to="/naruto-universe/privacy">Politica de Privacidade</RouterLink>
      <RouterLink to="/naruto-universe/terms">Termos de Uso</RouterLink>
    </div>

  </v-footer>
</template>

<style scoped>
  .v-footer {
    padding: 1.2rem;
    display: flex;
    text-align: center;
    justify-content: space-between;
  }

  .links {
    display: flex;
    gap: 1rem;
  }

  .links a {
    text-decoration: none;
    color: #fff;
  }
</style>