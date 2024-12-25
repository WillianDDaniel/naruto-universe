<script>
import Nav from '../components/Nav.vue';
import VillageCard from '../components/VillageCard.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Villages',
  components: {
    Nav,
    VillageCard,
    Footer,
  },
  data() {
    return {
      villages: [],
      filteredVillages: null,
      search: '',
    };
  },
  methods: {
    async getVillages() {
      const response = await fetch('https://naruto-br-api.site/villages');
      const villages = await response.json();
      this.villages = villages;
    },
    filterVillages() {
      if (!this.search || this.search === '') {
        this.filteredVillages = this.villages;
        return;
      }
      this.filteredVillages = this.villages.filter(village =>
        village.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  async mounted() {
    await this.getVillages();
    this.filterVillages();
  },
};
</script>

<template>
  <Nav />
  <main>
    <v-container>
      <h1 class="text-h3 mb-6 text-center">Vilas</h1>

      <v-text-field v-model="search" label="Pesquisar" placeholder="Digite o nome da vila"
        dense outlined @input="filterVillages"
      >
      </v-text-field>

      <v-row>
        <v-col v-if="!filteredVillages" v-for="n in 12" :key="n"
          cols="12" sm="6" md="4" lg="3"
        >
          <v-skeleton-loader :elevation="1" type="image, article"></v-skeleton-loader>
        </v-col>

        <v-col v-for="village in filteredVillages" :key="village.id"
          cols="12" sm="6" md="4" lg="3"
        >
          <VillageCard :village="village" />
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
