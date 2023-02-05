<script setup lang="ts">
import Header from "./Header/index.vue";
import Footer from "./Footer/index.vue";
</script>

<template>
  <Header />

  <main class="page">
    <RouterView />
  </main>

  <Footer />

</template>

<style scoped>

</style>
