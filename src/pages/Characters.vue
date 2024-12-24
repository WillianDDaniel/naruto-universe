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
      characters: [],
      filteredCharacters: null,
      search: ''
    }
  },
  methods: {
    async getCharacters() {
      const response = await fetch('https://naruto-br-api.site/characters');
      const characters = await response.json();
      this.characters = characters;
    },
    filterCharacters() {
      if (!this.search || this.search === '') {
        this.filteredCharacters = this.characters;
        return;
      }
      this.filteredCharacters = this.characters.filter(character => character.name.toLowerCase().includes(this.search.toLowerCase()));
    }
  },
  async mounted() {
    await this.getCharacters();
    this.filterCharacters();

  }
}
</script>

<template>
  <Nav />
  <main>
    <v-container>
      <h1 class="text-h3 mb-6 text-center">Personagens</h1>

      <v-text-field v-model="search" label="Pesquisar" placeholder="Digite o nome do personagem"
        dense outlined @input="filterCharacters"
      >
      </v-text-field>

      <v-row>
        <v-col v-if="!filteredCharacters" v-for="n in 12" :key="n"
          cols="12" sm="6" md="4" lg="3"
        >
          <v-skeleton-loader :elevation="1" type="image, article"></v-skeleton-loader>
        </v-col>

        <v-col v-for="character in filteredCharacters" :key="character.id"
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