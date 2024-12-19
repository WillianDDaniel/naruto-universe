<script>
  import Nav from '../components/Nav.vue';
  export default {
    name: 'Characters',
    components: {
      Nav,
    },
    data() {
      return {
        characters: []
      }
    },
    mounted() {
      fetch('https://naruto-br-api.site/characters')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.characters = data.data;
        });
    }
  }
</script>

<template>
  <Nav />
</template>

<style scoped>
</style>