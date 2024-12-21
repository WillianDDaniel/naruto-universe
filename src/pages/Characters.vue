<script>
import Nav from '../components/Nav.vue';
import characterCard from '../components/characterCard.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Characters',
  components: {
    Nav,
    characterCard,
    Footer,
  },
  data() {
    return {
      characters: []
    }
  },
  methods: {
    async getCharacters() {
      const response = await fetch('https://naruto-br-api.site/characters');
      const characters = await response.json();
      this.characters = characters;
    }
  },
  mounted() {
    this.getCharacters();
  }
}
</script>

<template>
  <Nav />
  <main>
    <v-container>
      <h1 class="text-h3 mb-6 text-center">Personagens</h1>
      <v-row>
        <v-col v-for="character in characters" :key="character.id"
          cols="12" sm="6" md="4" lg="3"
        >
          <characterCard :character="character" />
        </v-col>
      </v-row>
    </v-container>
  </main>
  <Footer />
</template>

<style scoped>
  .v-row {
    margin: 0;
  }
</style>