<script>
  export default {
    name: 'About'
  }
</script>

<template>
  <section class="about-section">
    <div class="section-header">
      <h1 class="title">Explore o Mundo Ninja</h1>
      <p class="subtitle">Descubra os segredos e histórias do universo de Naruto</p>
    </div>

    <div class="cards-container">
      <v-card
        class="content-card"
        color="secondary"
        elevation="8"
      >
        <img src="../assets/characters.webp" alt="Personagens de Naruto" class="card-image">
        <v-card-title>Shinobis Lendários</v-card-title>
        <v-card-subtitle>Conheça os ninjas que marcaram história com suas habilidades extraordinárias e histórias emocionantes</v-card-subtitle>
        <template v-slot:actions>
          <v-btn
            append-icon="mdi-chevron-right"
            color="button"
            text="Explorar Personagens"
            variant="elevated"
            @click="$router.push('/naruto-universe/characters')"
            block
          ></v-btn>
        </template>
      </v-card>

      <v-card
        class="content-card"
        color="secondary"
        elevation="8"
      >
        <img src="../assets/villages.webp" alt="Vilas Ocultas" class="card-image">
        <v-card-title>Vilas Ocultas</v-card-title>
        <v-card-subtitle>Explore as poderosas nações ninjas e suas vilas místicas, cada uma com sua própria cultura e tradições</v-card-subtitle>
        <template v-slot:actions>
          <v-btn
            append-icon="mdi-chevron-right"
            color="button"
            text="Descobrir Vilas"
            variant="elevated"
            @click="$router.push('/naruto-universe/villages')"
            block
          ></v-btn>
        </template>
      </v-card>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  min-height: 100vh;
  padding: 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.subtitle {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}

.cards-container {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}

.content-card {
  width: 350px;
  transition: transform 0.3s ease;
}

.content-card:hover {
  transform: translateY(-10px);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

:deep(.v-card-title) {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0.6rem;
}

:deep(.v-card-subtitle) {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

:deep(.v-card-actions) {
  display: flex;
  justify-content: center;
  padding: 10px 20px;
}

:deep(.v-btn) {
  margin: 1rem;
  font-weight: bold;
}
</style>