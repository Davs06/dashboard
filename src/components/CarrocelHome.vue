<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows="hover">
    <v-carousel-item v-for="(item, index) in items" :key="index">
      <v-img :src="item.src" height="100%"></v-img>
      <v-sheet>
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">{{ slides[index] }} Slide</div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
  
  <script>
export default {
  name: "carrocelHome",
  data() {
    return {
      items: [
        {
          src: "https://img.freepik.com/premium-photo/polygonal-brain-shape-artificial-intelligence-with-various-icon-smart-city-internet-things_41418-4817.jpg?w=1380",
        },
        {
          src: "https://img.freepik.com/free-photo/coders-discussing-about-source-code-compiling-discovers-errors-asks-rest-team-explanations-front-multiple-screens-running-algorithms-software-developers-doing-teamwork_482257-41856.jpg?w=1480&t=st=1691295245~exp=1691295845~hmac=f8170cf9b98eab99a0e24f327e4b38a6e3cce4262a5375035cd661e33a0e3848",
        },
        {
          src: "https://img.freepik.com/free-photo/team-unity-friends-meeting-partnership-concept_53876-23043.jpg?w=1380&t=st=1691295314~exp=1691295914~hmac=e831d5b53538d7ad75e9ce60f35a758a132655cb36a199e4285c807a8e113f58",
        },
      ],
      slides: ["First", "Second", "Third", "Fourth"],
    };
  },
};
</script>
  