<script>
  import Nav from '../components/Nav.vue';
  import Footer from '../components/Footer.vue';
  export default {
    name: "Privacy",
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
          Política de Privacidade
        </v-card-title>
        <v-card-text>
          <p>
            Este site de fãs sobre Naruto foi criado com o propósito de
            compartilhar informações, imagens e histórias relacionadas ao
            universo do anime. Nosso compromisso é com a transparência e o
            respeito à privacidade dos visitantes.
          </p>

          <v-divider class="my-4"></v-divider>

          <h3 class="text-h6">1. Dados Coletados</h3>
          <p>
            Este site não coleta nenhum dado pessoal de seus visitantes. Não
            utilizamos cookies, formulários de cadastro ou qualquer tipo de
            mecanismo de coleta de informações.
          </p>

          <v-divider class="my-4"></v-divider>

          <h3 class="text-h6">2. Finalidade do Site</h3>
          <p>
            O objetivo deste site é puramente informativo e recreativo, com a
            intenção de homenagear a obra de Masashi Kishimoto. Não temos fins
            lucrativos e não utilizamos publicidade.
          </p>

          <v-divider class="my-4"></v-divider>

          <h3 class="text-h6">3. Conteúdo do Site</h3>
          <p>
            Todo o conteúdo apresentado neste site, como imagens, textos e
            histórias, é fornecido pelos próprios fãs e é de uso não
            comercial. Caso algum conteúdo infrinja direitos autorais, favor
            entrar em contato para remoção.
          </p>

          <v-divider class="my-4"></v-divider>

          <h3 class="text-h6">4. Links Externos</h3>
          <p>
            Este site não contém links para sites externos. Todo o conteúdo
            está hospedado localmente e acessível apenas dentro do ambiente do
            site.
          </p>

          <v-divider class="my-4"></v-divider>

          <h3 class="text-h6">5. Alterações na Política</h3>
          <p>
            Embora as práticas descritas acima sejam a base do nosso site,
            podemos atualizar esta Política de Privacidade ocasionalmente para
            refletir melhorias ou mudanças no projeto. Recomendamos revisar
            periodicamente para se manter informado.
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
