<template>
  <div class="not-found">
    <v-icon name="md-reportgmailerrorred" fill="#f15050" scale="2" />
    <h1>404 - Página no encontrada</h1>
    <p>Lo sentimos, la página que estás buscando no existe.</p>
    <router-link to="/">Volver al inicio</router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.not-found a {
  color: #f15050;
  font-size: var(--p);
  text-decoration: none;
}

.not-found a:hover {
  text-decoration: underline;
}
</style>
