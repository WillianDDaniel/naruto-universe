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
      characters: [],
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
        this.characters = village.characters;
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

    <div v-if="characters.length > 0" class="d-flex justify-center align-center">
      <v-row>
        <v-col v-for="character in characters" :key="character.id">
          <v-card class="ma-2" elevation="2">
            <div v-if="character.images.length > 0">
              <v-img :src="character.images[0].image_url" aspect-ratio="16/9" width="100px"></v-img>
            </div>
            <v-card-title class="text-h6 text-center">{{ character.name }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>

    </div>
  </main>
  <Footer />
</template>

<style scoped></style>