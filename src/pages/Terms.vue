<script>
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';

export default {
  name: "Terms",
  components: {
    Nav,
    Footer
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<template>
  <Nav />
  <v-main>
    <v-container class="my-5">
      <v-card class="mx-auto pa-4" max-width="800">
        <v-card-title class="justify-center text-h5">
          Termos de Uso
        </v-card-title>
        <v-card-text>
          <p>
            Bem-vindo ao nosso site dedicado aos personagens de Naruto. Ao acessar e utilizar 
            este site, você concorda com os termos e condições descritos abaixo.
          </p>

          <v-divider class="my-4"></v-divider>

          <h3 class="text-h6">1. Uso do Conteúdo</h3>
          <p>
            Todo o conteúdo disponibilizado neste site é destinado apenas para uso pessoal 
            e não comercial. As informações sobre os personagens de Naruto são compiladas 
            por fãs e não podem ser reproduzidas ou utilizadas para fins comerciais sem 
            autorização prévia.
          </p>

          <v-divider class="my-4"></v-divider>

          <h3 class="text-h6">2. Propriedade Intelectual</h3>
          <p>
            Reconhecemos que Naruto e todos os seus personagens são propriedade intelectual 
            de Masashi Kishimoto e seus respectivos detentores de direitos. Este é um site 
            de fãs sem fins lucrativos que não reivindica propriedade sobre nenhum 
            personagem, imagem ou história original de Naruto.
          </p>

          <v-divider class="my-4"></v-divider>

          <h3 class="text-h6">3. Responsabilidade do Usuário</h3>
          <p>
            Ao utilizar este site, você concorda em não publicar ou transmitir qualquer 
            conteúdo ilegal, ofensivo ou inadequado. Reservamo-nos o direito de moderar 
            ou remover qualquer conteúdo que viole estes termos.
          </p>

          <v-divider class="my-4"></v-divider>

          <h3 class="text-h6">4. Limitação de Responsabilidade</h3>
          <p>
            Este site é mantido por fãs e, embora nos esforcemos para fornecer informações 
            precisas, não podemos garantir a total exatidão do conteúdo. Não nos 
            responsabilizamos por quaisquer erros ou omissões nas informações fornecidas.
          </p>

          <v-divider class="my-4"></v-divider>

          <h3 class="text-h6">5. Alterações nos Termos</h3>
          <p>
            Reservamo-nos o direito de modificar estes termos de uso a qualquer momento. 
            Alterações significativas serão comunicadas através do site. O uso continuado 
            do site após tais modificações constitui aceitação dos novos termos.
          </p>
        </v-card-text>

        <v-card-actions class="justify-center">
          <v-btn class="v-btn" @click="goBack">Voltar</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-main>
  <Footer />
</template>

<style scoped>
.v-btn {
  text-transform: none;
  padding: 0 8px;
  color: white;
  background-color: #007bff;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }

  &:focus {
    outline: 2px solid #80bdff;
    outline-offset: 2px;
  }
}
</style>