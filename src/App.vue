<template>
  <div class="page-container">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
</script>

<style scoped>
.page-container {
  min-height: calc(100vh - 15px);
  width: 100%;
  max-width: 1200px;
  min-width: 300px;
  margin: 0 15px 15px 15px;
}
</style>
