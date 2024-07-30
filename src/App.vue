<template>
  <div class="page-container">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  width: 100%;
  max-width: 1200px;
  min-width: 300px;
  margin: 0 15px 15px 15px;
}
</style>
