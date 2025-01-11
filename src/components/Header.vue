<script>
import { useTheme } from 'vuetify';
import bgBlack from '/src/assets/bg-black.webp';
import bgOrange from '/src/assets/bg-orange.webp';

export default {
  name: 'Header',
  setup() {
    const theme = useTheme();
    return { theme }
  },
  computed: {
    backgroundImage() {
      return this.theme.global.current.value.dark ? bgBlack : bgOrange;
    }
  }
}
</script>

<template>
  <div class="position-relative overflow-hidden">
    <v-container
      :style="{
        backgroundImage: `url(${backgroundImage})`
      }"
      fluid
      class="header-container position-relative"
    >
      <div class="gradient-overlay"></div>
      <v-row>
        <v-col md="6" class="text-center mt-12">
          <div class="vl-div">
            <h1 class="mb-2">
              <span class="font-italic font-weight-bold text-h4">Bem-vindos ao</span>
              <br>
              <span class="title font-weight-bold text-h2 text-border">Naruto Universe!</span>
            </h1>
            <p class="font-italic font-weight-bold bg-secondary text-h6 p-2">
              Informações sobre o universo de Naruto e seus personagens.
            </p>
            <br>
            <v-btn color="red-darken-4" class="text-white font-weight-bold">
              Explorar
              <v-icon icon="mdi-arrow-right-bold-circle" end></v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col md="6" class="text-center">
          <img src="../assets/naruto-characters.webp" alt="Naruto Characters"
            class=""
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
  .header-container {
    background-size: cover;
    background-position: center;
    user-select: none;
    padding-bottom: 100px;
  }

  .gradient-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 40%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0.8) 80%,
      rgba(255, 255, 255, 1) 100%
    );
    pointer-events: none;
  }

  .text-border {
  text-shadow:
    -1px -1px 1px rgb(101, 101, 101),
    1px -1px 1px rgb(101, 101, 101),
    -1px 1px 1px rgb(101, 101, 101),
    1px 1px 1px rgb(255, 255, 255);
}

  .vl-div {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .vl-div h1 {
    font-size: 2.15rem;
    padding: 0 10px;
  }

  .vl-div p {
    padding: 0 10px;
    font-weight: 500;
    border-radius: 5px;
    font-size: 1.05rem;
  }

  .v-container img {
    width: 300px;
    margin-left: 40px;
    margin-top: 10px;
    user-select: none;
    padding-bottom: 100px;
  }
</style>