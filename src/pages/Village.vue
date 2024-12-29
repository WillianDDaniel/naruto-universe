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
        const response = await fetch('https://naruto-br-api.site/villages/' + this.$route.params.id);
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
  <div>
    <Nav />
    <div v-if="loading" class="spinner"></div>
    <main v-else class="d-flex flex-column align-center mb-10">
      <div  class="d-flex ga-8 py-6">
        <img :src="village.symbol" alt="" height="45">
        <h1>{{ village.name }}</h1>
      </div>
      <div class="d-flex px-10">
        <img :src="village.image_url" alt="" height="300" class="rounded-lg">
        <div class="pl-6">
          <h2 class="text-h4">Descrição</h2>
          <p class="text-body-1 pt-2">{{ village.description }}</p>
        </div>
      </div>
      <div v-if="characters.length > 0" class="mt-10">
        <h2 class="text-h4 font-weight-bold text-center mb-8">Shinobis de {{ village.name }}</h2>
        <v-row justify="center">
          <v-col
            v-for="character in characters"
            :key="character.id"
            cols="auto"
            class="pa-2"
          >
            <v-card
              elevation="2"
              width="180"
              :hover="true"
            >
              <div>
                <v-img
                  v-if="character.images && character.images.length > 0"
                  :src="character.images[0].image_url"
                  height="180"
                  contain
                ></v-img>
              </div>
              <v-card-title class="text-subtitle-2 justify-center py-2 border-top">
                {{ character.name }}
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>