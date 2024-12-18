<script>
  import narutoIcon from '../assets/naruto.png';
  import { useTheme } from 'vuetify';

  export default {
    setup() {
      const theme = useTheme();
      const toggleTheme = () => {
        theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
      };
      return { theme, toggleTheme }
    },

    data() {
      return {
        imageUrl: narutoIcon
      }
    }
  }
</script>

<template>
  <v-toolbar density="comfortable" :elevation="1" color="grey-darken-4">
    <v-img :src="imageUrl" class="ml-4" contain width="40" height="40" style="max-width: 40px; max-height: 40px;"></v-img>
    <v-toolbar-title class="font-weight-bold font-italic">Naruto Universe</v-toolbar-title>

    <v-btn @click="toggleTheme">
      <v-icon icon='mdi-brightness-6' end></v-icon>
      Tema
    </v-btn>

    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </v-toolbar>
</template>

<style scoped>
  .v-img {
    margin-right: -6px;
  }

  .v-btn {
    text-transform: none;
    padding: 0 5px;
  }

  .v-icon {
    margin-right: 4px;
  }

</style>