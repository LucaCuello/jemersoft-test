<template>
  <span v-if="isLoading">Loading...</span>
  <div
    v-else
    class="details-container"
    :style="{ backgroundColor: getBackgroundColor(pokemon?.types) }"
  >
    <img :src="pokemon.sprites?.other['official-artwork'].front_default" />
    <h2>{{ capitalizeFirstLetter(pokemon.name) }}</h2>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { Pokemon } from "@/types";
import { onMounted, ref } from "vue";
import { usePokemonUtils } from "@/composables/usePokemonUtils";
import { capitalizeFirstLetter } from "@/utils/utils";
import axios from "@/axios";

const { getBackgroundColor, getTypeIcon } = usePokemonUtils();
const route = useRoute();
const { id } = route.params;
const isLoading = ref(false);
const pokemon = ref({} as Pokemon);

const getPokemonDetails = async () => {
  isLoading.value = true;
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    pokemon.value = data!;
    console.log(data);
  } catch (err) {
    console.error(err);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  getPokemonDetails();
});
</script>

<style scoped>
.details-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
}

.details-container img {
  width: 300px;
  height: auto;
}
</style>
