<script>
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Village',
  components: {
    Nav,
    Footer
  },
  data() {
    return {
      village: null,
      loading: true,
    }
  },
  methods: {
    async getVillage() {
      try {
        const id = this.$route.params.id;
        const response = await fetch('https://naruto-br-api.site/villages/' + id);
        const village = await response.json();
        this.village = village;
      } catch (error) {
        console.error('Error fetching village:', error);
      } finally {
        this.loading = false;
      }
    }
  },
  mounted() {
    this.getVillage();
  }
}
</script>

<template>
  <Nav />
  <main>
    <h1>Vila</h1>
    <v-container v-if="loading" class="d-flex justify-center align-center min-vh-100">
      <v-progress-circular indeterminate color="orange" size="64"></v-progress-circular>
    </v-container>

    <v-container v-else class="d-flex justify-center align-center min-vh-100">
      <v-card v-if="village" class="ma-2" elevation="2">
        <v-img :src="village.symbol" aspect-ratio="16/9"></v-img>
        <v-card-title class="text-h6 text-center">{{ village.name }}</v-card-title>
      </v-card>
    </v-container>
  </main>
  <Footer />
</template>

<style scoped></style>