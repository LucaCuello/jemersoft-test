<template>
  <Toaster richColors />
  <div class="pokecards-container">
    <ErrorMsg
      v-if="error"
      message="Un error ocurrió mientras se cargaban los datos. Por favor, inténtalo de nuevo más tarde."
    />
    <p v-if="isLoading">Loading...</p>
    <PokeCard
      v-else
      v-for="pokemon in pokemons"
      :key="pokemon?.id"
      :pokemon="pokemon"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Toaster, toast } from "vue-sonner";
import { Pokemon, PokemonResult } from "@/types";
import PokeCard from "@/components/PokeCard.vue";
import ErrorMsg from "@/components/ErrorMsg.vue";
import axios from "@/axios";

const pokemons = ref<Pokemon[]>([]);
const isLoading = ref(false);
const error = ref(false);

const getAllPokemons = async () => {
  isLoading.value = true;
  try {
    const { data } = await axios.get<{ results: PokemonResult[] }>(
      "https://pokeapi.co/api/v2/pokemon?limit=20"
    );
    const promises = data.results.map(
      async (pokemon: PokemonResult): Promise<Pokemon> => {
        const response = await axios.get<Pokemon>(pokemon.url);
        return response.data;
      }
    );
    pokemons.value = await Promise.all(promises);
  } catch (err) {
    console.error(err);
    error.value = true;
    toast.error("Algo salió mal...");
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  getAllPokemons();
});
</script>

<style scoped>
.pokecards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
}
</style>
