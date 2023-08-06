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
          src="https://img.freepik.com/free-vector/back-end-development-concept-software-development-process-website-interface-design-improvement-programming-coding-it-profession-isolated-flat-vector-illustration_613284-1064.jpg?w=740&t=st=1691239103~exp=1691239703~hmac=97d17c45fcdc651e11e6bba3ed0cd5cfa62177218227e1071a703479d91992ee"
          height="200px"
          cover
        ></v-img>

        <v-card-title> Trilha Back-end developer </v-card-title>

        <v-card-subtitle> Cursos youtube </v-card-subtitle>

        <v-card-actions>
          <v-btn color="orange-lighten-2" variant="text" to="/back">
            Explore
          </v-btn>

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
              Aqui, disponibilizamos uma rota de aprendizado sem custos,
              composta por cursos escolhidos a dedo do YouTube. Estes cursos
              foram selecionados por nós para oferecer o conteúdo mais relevante
              e valioso.
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