<template>
  <v-container class="d-flex flex-column text-center justify-center">
    <h1>Bem-vindo ao Desfaveados</h1>
    <br />
    <p>
      Seja parte da comunidade Desfaveados, onde apoiamos aqueles que vieram das
      comunidades, ajudando-os a se inserir no mercado de trabalho. Nossa
      abordagem estratégica é fornecer trilhas de aprendizado gratuitas para
      você.
    </p>
    <br /><br />

    <div class="image-container">
      <img
        width="70%"
        src="https://img.freepik.com/premium-photo/polygonal-brain-shape-artificial-intelligence-with-various-icon-smart-city-internet-things_41418-4817.jpg?w=1380"
        alt="Descrição da Imagem"
      />
    </div>
    <br />

    <div class="text-left justify-center">
      <h3>Guiando os Primeiros Passos</h3>
      <br />
      <p>1° - Crie um E-mail Profissional</p>
      <p>2° - Abra uma Conta no LinkedIn</p>
      <p>
        3° - Crie uma Conta no GitHub (Se não estiver familiarizado, nossa
        trilha de introdução inclui uma explicação detalhada)
      </p>
    </div>
  </v-container>

  <v-container class="d-flex flex-column flex-md-row justify-space-between">
    <CardIniciante /> <br />
    <CardsFront /> <br />
    <CardsBack /> <br />
  </v-container>
</template>

<script >
import CardIniciante from "../components/cards/CardIniciante.vue";
import CardsBack from "../components/cards/CardsBack.vue";
import CardsFront from "../components/cards/CardsFront.vue";
//
export default {
  components: { CardsBack, CardsFront, CardIniciante },
  data: () => ({
    show: false,
  }),
};
</script>