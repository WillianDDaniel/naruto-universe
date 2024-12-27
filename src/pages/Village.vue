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
  <div class="village-page">
    <Nav />
    <main>
      <v-container v-if="loading" class="d-flex justify-center align-center min-vh-100">
        <v-progress-circular indeterminate color="orange" size="64"></v-progress-circular>
      </v-container>
      
      <v-container v-else>
        <!-- Village Card -->
        <v-card v-if="village" class="village-card mx-auto mb-8" max-width="600" elevation="3">
          <v-img 
            :src="village.symbol" 
            height="300"
            contain
            class="village-symbol"
          ></v-img>
          <v-card-title class="text-h4 font-weight-bold text-center py-4">
            {{ village.name }}
          </v-card-title>
        </v-card>

        <!-- Characters Section -->
        <div v-if="characters.length > 0" class="characters-section">
          <h2 class="text-h4 font-weight-bold text-center mb-6">Personagens</h2>
          <v-row justify="center">
            <v-col 
              v-for="character in characters" 
              :key="character.id"
              cols="auto"
              class="pa-2"
            >
              <v-card 
                class="character-card" 
                elevation="2"
                width="180"
                :hover="true"
              >
                <div class="card-image">
                  <v-img 
                    v-if="character.images && character.images.length > 0"
                    :src="character.images[0].image_url" 
                    height="180"
                    contain
                    class="character-image"
                  ></v-img>
                </div>
                <v-card-title class="text-subtitle-2 justify-center py-2 border-top">
                  {{ character.name }}
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.village-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  padding: 20px 0;
}

.village-card {
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.village-card:hover {
  transform: translateY(-5px);
}


.character-card {
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.character-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.card-image {
  background-image: url('../assets/bga.jpg');
  background-size: cover;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.character-image {
  padding: 8px;
}

.characters-section {
  margin-top: 20px;
}
.border-top {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}

@media (max-width: 600px) {
  .village-card {
    margin: 0 16px;
  }
}
</style>