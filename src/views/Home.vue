<template>
  <v-container class="d-flex flex-column text-center justify-center">
    <h1>Bem-vindo ao Desfaveados</h1>
    <br />
    <p>
      Seja parte da comunidade Desfaveados, onde apoiamos aqueles que vieram das
      comunidades, ajudando-os a se inserir no mercado de trabalho de técnologia. Nossa
      abordagem estratégica é fornecer trilhas de aprendizado gratuitas para
      você.
    </p>
    <br /><br />

    <CarrocelHome />
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
import CarrocelHome from "@/components/CarrocelHome.vue";
import CardIniciante from "../components/cards/CardIniciante.vue";
import CardsBack from "../components/cards/CardsBack.vue";
import CardsFront from "../components/cards/CardsFront.vue";
//
export default {
  components: { CardsBack, CardsFront, CardIniciante, CarrocelHome },
  data: () => ({
    show: false,
  }),
};
</script>