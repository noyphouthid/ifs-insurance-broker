<template>
    <v-app>
      <NavBar />
      <v-container>
        <NuxtPage />
      </v-container>
      <Footer />
    </v-app>
  </template>
  
  <script setup>
  import NavBar from "@/components/NavBar.vue";
  import Footer from "@/components/Footer.vue";
  </script>
  