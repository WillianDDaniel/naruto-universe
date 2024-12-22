<script>
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Character',
  components: {
    Nav,
    Footer
  },
  data() {
    return {
      character: null,
      loading: true,
    }
  },
  methods: {
    async getCharacter() {
      try {
        const id = this.$route.params.id;
        const response = await fetch('https://naruto-br-api.site/characters/' + id);
        const character = await response.json();
        this.character = character;
      } catch (error) {
        console.error('Error fetching character:', error);
      } finally {
        this.loading = false;
      }
    }
  },
  mounted() {
    this.getCharacter();
  }
};
</script>

<template>
  <Nav />
  <v-main>
    <v-container v-if="loading" class="d-flex justify-center align-center min-vh-100">
      <v-progress-circular indeterminate color="orange" size="64"></v-progress-circular>
    </v-container>

    <template v-else-if="character">
      <v-row>
        <v-col cols="6" class="d-flex flex-column align-center mt-5">
          <h1 class="text-h4">{{ character.name }}</h1>
          <img :src="character.profile_image" :alt="character.name" class="rounded" width="600">
        </v-col>

        <v-col cols="6" class="d-flex flex-column info-column mt-5">
          <h2 class="text-h4">Informações</h2>
          <v-divider class="my-2"></v-divider>

          <div>
            <div class="d-flex ga-2">
              <span><strong>Vila:</strong></span>
              <span>{{ character.village.name }}</span>
            </div>

            <div class="mt-2">

              <div class="d-flex ga-3">
                <div class="d-flex ga-1">
                  <span><strong>Rank:</strong></span>
                  <span>{{ character.rank }}</span>
                </div>
                <div class="d-flex ga-1">
                  <span> <strong>Power:</strong></span>
                  <span> {{ character.power }} </span>
                </div>
              </div>
            </div>

            <div class="mt-4">
              <span>Família:</span>
              <div class="mt-2">
                <p class="mb-2">
                  <span>Pai:</span>
                  {{ character.father?.name ? character.father.name : 'Desconhecido' }}
                </p>
                <p>
                  <span>Mãe:</span>
                  {{ character.mother?.name ? character.mother.name : 'Desconhecida' }}
                </p>
              </div>
            </div>

            <div class="mt-4">
              <span>História:</span>
              <p class="mt-2">{{ character.summary }}</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </template>
  </v-main>
  <Footer />
</template>

<style scoped>
</style>