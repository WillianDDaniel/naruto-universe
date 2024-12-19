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
  <v-container :style="{ backgroundImage: `url(${backgroundImage})` }" fluid>
    <v-row>
      <v-col md="6" class="text-center mt-12">

        <div class="vl-div">
          <h1>Bem-vindos ao Naruto Universe!</h1>

          <p class="font-italic">Informações sobre o universo de Naruto e seus personagens.</p>
          <br>
          <v-btn color="red-darken-4" class="text-white font-weight-bold">
            Explorar
            <v-icon icon="mdi-arrow-right-bold-circle" end></v-icon>
          </v-btn>
        </div>

      </v-col>

      <v-col md="6" class="text-center">
        <img src="../assets/naruto-characters.webp" alt="">
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  .v-container {
    user-select: none;
    background-size: cover;
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
    border-radius: 5px;
    background-color: rgba(243, 171, 136, 0.15);
  }

  .vl-div p {
    padding: 0 10px;
    font-weight: 600;
    border-radius: 5px;
    font-size: 1.05rem;
    border-radius: 5px;
    background-color: rgba(243, 171, 136, 0.15);
  }

  .v-container img {
    width: 300px;
    margin-left: 40px;
    margin-top: 10px;
    user-select: none;
  }
</style>