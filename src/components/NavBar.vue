<template>
  <div>
    <v-app-bar>
      <!-- <v-app-bar-nav-icon>
        <div class="d-flex">
          <v-icon icon="/src/assets/desfavelados.jpg"><img
            src="/src/assets/desfavelados.jpg"
            
            class="rounded-circle mr-2"
          /> </v-icon> <br />
        </div>
      </v-app-bar-nav-icon> -->

      <v-app-bar-title>
        <div class="d-flex">
          <v-icon> <img
            src="/src/assets/logo-desfavelados-removebg-preview.png"
            height="30"
            class="rounded-circle mr-3"
          /></v-icon>

          <p>Desfavelados</p>
        </div>
      </v-app-bar-title>
      <v-btn color="yellow-darken-1" text to="/">Home </v-btn>
      <v-btn icon="mdi-theme-light-dark"></v-btn>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  methods: {
    teste() {
      // console.log(this.$vuetify.themes);
      console.log("ola");
    },
  },
};
</script>