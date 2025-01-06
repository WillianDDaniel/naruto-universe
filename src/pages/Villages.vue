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
      <h1 class="text-h3 mb-6 text-center">Vilas Ocultas</h1>
      <p class="text-body-1 text-center mb-8">
        As Vilas Ocultas são os principais centros militares do mundo shinobi. Cada vila possui seus próprios costumes,
        jutsus especiais e Kages (líderes), formando shinobis especializados em diferentes tipos de jutsu.
        Estas vilas são essenciais para manter o equilíbrio de poder entre as nações do universo de Naruto.
      </p>

      <v-card class="mb-8 bg-transparent" flat>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="8" md="6" class="mx-auto">
              <v-text-field
                v-model="search"
                label="Pesquisar"
                placeholder="Digite o nome da vila"
                prepend-inner-icon="mdi-magnify"
                density="comfortable"
                variant="outlined"
                @input="filterVillages"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <v-row v-if="filteredVillages" class="mb-4">
        <v-col cols="12">
          <p class="text-body-2 text-grey-darken-1">
            Exibindo {{ filteredVillages.length }} {{ filteredVillages.length === 1 ? 'vila' : 'vilas' }}
          </p>
        </v-col>
      </v-row>

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
</style>
