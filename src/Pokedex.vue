<template>
  <div class="page-container">
    <Navbar />
    <div class="pokecards-container">
      <p v-if="isLoading">Loading...</p>
      <PokeCard
        v-else
        v-for="pokemon in pokemons"
        :key="pokemon?.id"
        :pokemon="pokemon"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Navbar from "@/components/Navbar.vue";
import PokeCard from "@/components/PokeCard.vue";
import axios from "@/axios";

const pokemons = ref([]);
const isLoading = ref(false);

const getAllPokemons = async () => {
  isLoading.value = true;
  try {
    const { data } = await axios.get("pokemon/?&limit=20");
    const promises = data.results.map(async (pokemon) => {
      const response = await axios.get(pokemon.url);
      return response.data;
    });
    pokemons.value = await Promise.all(promises);
  } catch (err) {
    console.error(err);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  getAllPokemons();
});
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  width: 100%;
  max-width: 1200px;
  min-width: 300px;
}

.pokecards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
}
</style>
