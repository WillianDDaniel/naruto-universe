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
  <v-card class="ma-2" elevation="2">
    <v-img :src="village.symbol" aspect-ratio="16/9"></v-img>
    <v-card-title class="text-h6 text-center">{{ village.name }}</v-card-title>
  </v-card>
</template>
