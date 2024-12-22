<script>
  import narutoIcon from '../assets/naruto.png';
  import { useTheme } from 'vuetify';

  export default {
    setup() {
      const theme = useTheme();
      const toggleTheme = () => {
        theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
        localStorage.setItem('theme', theme.global.name.value);
      };
      return { theme, toggleTheme }
    },

    data() {
      return {
        imageUrl: narutoIcon
      }
    },

    beforeCreate() {
      const themeColor = localStorage.getItem('theme');
      if (themeColor) {
        this.theme.global.name.value = themeColor;
      }
    }
  }
</script>

<template>
  <v-toolbar density="comfortable" :elevation="1" color="grey-darken-4">
    <v-img :src="imageUrl" class="ml-4" contain width="40" height="40" style="max-width: 40px; max-height: 40px;"></v-img>
    <v-toolbar-title class="font-weight-bold font-italic">Naruto Universe</v-toolbar-title>

    <RouterLink to="/naruto-universe/"><v-btn>Inicio</v-btn></RouterLink>
    <RouterLink to="/naruto-universe/characters"><v-btn>Personagens</v-btn></RouterLink>
    <RouterLink to="/naruto-universe/villages"><v-btn>Vilas</v-btn></RouterLink>

    <v-btn @click="toggleTheme">
      <div>
        <v-icon icon='mdi-brightness-6' end></v-icon>
        <span>Tema</span>
      </div>
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
    color: white;
    font-weight: 600;

    &:hover {
      color: #e6d304;
    }
  }

  .v-icon {
    margin-right: 4px;
  }

</style>