<script>
  import narutoIcon from '../assets/naruto.png'
  export default {
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
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </v-toolbar>
</template>

<style scoped>
  .v-img {
    margin-right: -6px;
  }
</style>