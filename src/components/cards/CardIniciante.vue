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
          src="https://img.freepik.com/premium-photo/pen-piece-paper-with-text-new-skill_301012-5189.jpg?w=1380"
          height="200px"
          cover
        ></v-img>

        <v-card-title>Intro ao desenvolvimento </v-card-title>
        <!-- <v-card-title>Primeiros passos </v-card-title> -->

        <v-card-subtitle> Guia do iniciante </v-card-subtitle>

        <v-card-actions>
          <v-btn color="orange-lighten-2" variant="text" to="/iniciante">
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
              Aqui, você encontrará orientações essenciais para começar sua
              jornada, dicas valiosas sobre por onde começar, os aspectos
              fundamentais a estudar e diálogos esclarecedores sobre o cenário
              de mercado técnologico.
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