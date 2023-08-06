<template>
  <div>
    <v-app-bar >
      <v-app-bar-nav-icon >
        <DesfaveladosIcon />
      </v-app-bar-nav-icon>

      <v-app-bar-title>
        Desfavelados
      </v-app-bar-title>
      <v-btn color="yellow-darken-1" text to="/">Home </v-btn>
      <v-btn icon="mdi-theme-light-dark"></v-btn>
    </v-app-bar>
  </div>
</template>
<script>
import DesfaveladosIcon from "./icons/DesfaveladosIcon.vue";
export default {
  components: { DesfaveladosIcon },
  methods: {
    teste() {
      // console.log(this.$vuetify.themes);
      console.log("ola");
    },
  },
};
</script>