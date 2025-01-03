<script>
  export default {
    name: "VillageCard",
    props: {
      village: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<template>
  <v-card class="ma-2" elevation="2" :to="'/naruto-universe/villages/' + village.id">
    <v-img :src="village.image_url" aspect-ratio="16/9"></v-img>
    <v-card-title class="text-h6 text-center" style="white-space: normal;">
      <RouterLink :to="'/naruto-universe/villages/' + village.id" class="text-decoration-none text-primary">
        {{ village.name }}
      </RouterLink>
    </v-card-title>
  </v-card>
</template>
