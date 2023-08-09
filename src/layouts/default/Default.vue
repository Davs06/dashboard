<template>
  <v-app theme="dark">
    
    <NavBar />   
    <View />
    <v-btn icon="mdi-theme-light-dark" ></v-btn>
  </v-app>
</template>

<script setup>
import View from "./View.vue";
import NavBar from "@/components/NavBar.vue";
</script>
