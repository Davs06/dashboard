<template>
  <div class="text--primary">
    <!-- Using the elevation prop -->
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        v-bind="props"
        :elevation="isHovering ? 24 : 6"
        class="mx-auto pa-6"
        max-width="344"
      >
        <v-img
          src="https://img.freepik.com/free-vector/frontend-development-concept-website-interface-design-improvement-web-page-programming-coding-testing-it-profession-isolated-flat-vector-illustration_613284-2357.jpg?w=996&t=st=1691256689~exp=1691257289~hmac=11b81c1278cbc7d296478c59c97a50beb3faa0a2b5debcff3a69ad6287b52e3b"
          height="200px"
          cover
        ></v-img>

        <v-card-title> Trilha Front-end developer </v-card-title>

        <v-card-subtitle> Cursos youtube </v-card-subtitle>

        <v-card-actions>
          <v-btn color="orange-lighten-2" variant="text" to="/front"> Explore </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show = !show"
          ></v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              Aqui você vai encontrar uma trilha de aprendizado gratuitamente,
              sendo esses cursos vindos do youtube seleceionados por nós para
              ter trazer o melhor conteudo.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-hover>
  </div>
  
</template>
  <script >
//
export default {
  data: () => ({
    show: false,
  }),
};
</script>