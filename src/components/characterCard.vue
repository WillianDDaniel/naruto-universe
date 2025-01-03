<script>
import { RouterLink } from 'vue-router';

  export default {
    name: 'characterCard',
    props: {
      character: {
        type: Object,
        required: true
      }
    },
    computed: {
      truncatedSummary() {
        return this.character.summary.length > 120
          ? this.character.summary.substring(0, 120) + '...'
          : this.character.summary;
      }
    }
  }
</script>

<template>
  <v-card class="character-card h-100" elevation="3" hover :to="'/naruto-universe/characters/' + character.id">
    <v-img
      :src="character.profile_image"
      height="250"
      cover
      class="align-end"
    >
      <v-card-title class="character-name text-white">
        <RouterLink :to="'/naruto-universe/characters/' + character.id" class="text-decoration-none text-white">
          {{ character.name }}
        </RouterLink>
      </v-card-title>
    </v-img>

    <v-card-text>
      <div class="d-flex align-center mb-2">
        <v-chip color="primary" class="mr-2">
          {{ character.rank }}
        </v-chip>
        <v-chip color="power">
          Power: {{ character.power }}
        </v-chip>
      </div>
      <div class="mt-2">
        <v-chip size="small" color="info" class="mb-2">
          {{ character.village.name }}
        </v-chip>
      </div>
      <p class="mt-3 text-body-2">{{ truncatedSummary }}</p>
    </v-card-text>
  </v-card>
</template>

<style scoped>
  .character-card {
    transition: transform 0.2s;
    height: 100%;
  }

  .character-card:hover {
    transform: translateY(-5px);
  }

  .character-name {
    background:
      linear-gradient(to top,
      rgba(0,0,0,0.7) 0%,
      rgba(0,0,0,0.3) 100%)
    ;
    padding: 16px;
    width: 100%;
  }

  .v-card-text {
    padding: 16px;
  }
</style>