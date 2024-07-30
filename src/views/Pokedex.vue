<template>
  <Toaster richColors />
  <div class="pokecards-container">
    <ErrorMsg
      v-if="error"
      message="Un error ocurrió mientras se cargaban los datos. Por favor, inténtalo de nuevo más tarde."
    />
    <PokeCardSkeleton v-for="index in 20" :key="index" v-if="isLoading" />
    <PokeCard
      v-else
      v-for="pokemon in pokemons"
      :key="pokemon?.id"
      :pokemon="pokemon"
    />
  </div>
  <div class="pagination">
    <button @click="prevPage" :disabled="currentPage === 1">
      <v-icon name="io-arrow-back-circle" scale="2" />
    </button>
    <button @click="nextPage">
      <v-icon name="io-arrow-forward-circle-sharp" scale="2" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Toaster, toast } from "vue-sonner";
import { Pokemon, PokemonResult } from "@/types";
import PokeCard from "@/components/PokeCard.vue";
import ErrorMsg from "@/components/ErrorMsg.vue";
import PokeCardSkeleton from "@/components/PokeCardSkeleton.vue";
import axios from "@/axios";

const pokemons = ref<Pokemon[]>([]);
const isLoading = ref(false);
const error = ref(false);
const currentPage = ref(1);
const limit = 20;

const getAllPokemons = async (page: number) => {
  isLoading.value = true;
  error.value = false;
  try {
    const offset = (page - 1) * limit;
    const { data } = await axios.get<{ results: PokemonResult[] }>(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
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

const nextPage = () => {
  currentPage.value += 1;
  getAllPokemons(currentPage.value);
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
    getAllPokemons(currentPage.value);
  }
};

onMounted(() => {
  getAllPokemons(currentPage.value);
});
</script>

<style scoped>
.pokecards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.pagination button {
  cursor: pointer;
  border: none;
  border-radius: 50%;
  transition: transform 0.1s ease-in-out;
}

.pagination button:hover {
  transform: scale(1.2);
  transition: transform 0.1s ease-in-out;
}

.pagination button svg {
  fill: #f15050;
}

.pagination button:disabled svg {
  fill: #a7a7a7;
}
</style>
