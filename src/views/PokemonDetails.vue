<template>
  <Toaster richColors />
  <span v-if="isLoading">Loading...</span>
  <ErrorMsg
    v-if="error"
    message="Un error ocurrió mientras se cargaban los datos. Por favor, inténtalo de nuevo más tarde."
  />
  <div
    v-else
    class="details-container"
    :style="{ backgroundColor: getBackgroundColor(pokemon?.types) }"
  >
    <router-link to="/">
      <v-icon
        name="io-chevron-back-circle-sharp"
        scale="2"
        class="back-arrow"
      />
    </router-link>
    <img
      :src="pokemon.sprites?.other['official-artwork'].front_default"
      :alt="pokemon.name"
      draggable="false"
    />
    <h2>{{ capitalizeFirstLetter(pokemon.name) }}</h2>
    <div class="poke-types">
      <div
        v-for="type in pokemon.types"
        :key="type.type.name"
        class="poke-type"
      >
        <v-icon :name="getTypeIcon(type.type.name)" />
        {{ capitalizeFirstLetter(type.type.name) }}
      </div>
    </div>
    <div class="poke-description">
      <h4>
        <v-icon name="md-description" />
        Descripción
      </h4>
      <p>{{ description }}</p>
      <h4>
        <v-icon name="md-catchingpokemon" />
        Movimientos
      </h4>
      <ul>
        <li v-for="(move, index) in displayedMoves" :key="move.move.name">
          {{ capitalizeFirstLetter(move.move.name) }}
        </li>
        <ul v-if="showMoreButton" @click="showAllMoves" class="show-more-btn">
          Ver todos
        </ul>
      </ul>
      <h4>
        <v-icon name="bi-speedometer" />
        Estadísticas
      </h4>
      <ul class="poke-stats">
        <li v-for="stat in pokemon!.stats" :key="stat.stat.name">
          <span class="poke-stat">
            {{ capitalizeFirstLetter(stat.stat.name) }}
          </span>
          : {{ stat.base_stat }}
        </li>
      </ul>
      <h4>
        <v-icon name="bi-stars" />
        Habilidades
      </h4>
      <ul>
        <li v-for="ability in pokemon!.abilities" :key="ability.ability.name">
          {{ capitalizeFirstLetter(ability.ability.name) }}
          <span v-if="ability.is_hidden">(Oculta)</span>
        </li>
      </ul>
      <h4>
        <v-icon name="fa-ruler-combined" />
        Detalles
      </h4>
      <p>Altura: {{ pokemon.height / 10 }} m</p>
      <p>Peso: {{ pokemon.weight / 10 }} kg</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { Pokemon, PokemonSpecies, PokemonMove } from "@/types";
import { onMounted, ref } from "vue";
import { usePokemonUtils } from "@/composables/usePokemonUtils";
import { capitalizeFirstLetter } from "@/utils/utils";
import { Toaster, toast } from "vue-sonner";
import ErrorMsg from "@/components/ErrorMsg.vue";
import axios from "@/axios";

const { getBackgroundColor, getTypeIcon } = usePokemonUtils();
const route = useRoute();
const { id } = route.params;
const isLoading = ref(false);
const pokemon = ref({} as Pokemon);
const description = ref("");
const displayedMoves = ref<PokemonMove[]>([]);
const showMoreButton = ref(false);
const error = ref(false);

const getPokemonDetails = async () => {
  isLoading.value = true;
  try {
    const { data: pokemonData } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    const { data: speciesData } = await axios.get<PokemonSpecies>(
      `https://pokeapi.co/api/v2/pokemon-species/${id}`
    );
    const flavorTextEntry = speciesData.flavor_text_entries.find(
      (entry) => entry.language.name === "es"
    );
    description.value = flavorTextEntry
      ? flavorTextEntry.flavor_text
      : "Descripción no disponible en español";
    pokemon.value = pokemonData;
    displayedMoves.value = pokemonData.moves.slice(0, 10);
    showMoreButton.value = pokemonData.moves.length > 10;
  } catch (err) {
    console.error(err);
    error.value = true;
    toast.error('Algo salió mal...')
  } finally {
    isLoading.value = false;
  }
};

const showAllMoves = () => {
  if (!pokemon.value) return;
  displayedMoves.value = pokemon.value.moves;
  showMoreButton.value = false;
};

onMounted(() => {
  getPokemonDetails();
});
</script>

<style scoped>
.details-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  padding: 20px;
}

.back-arrow {
  position: absolute;
  cursor: pointer;
  top: 20px;
  left: 20px;
  transition: transform 0.3s ease;
}

.back-arrow:hover {
  transform: scale(1.07);
  transition: transform 0.15s ease;
}

.details-container img {
  width: 300px;
  height: auto;
}

.poke-description {
  display: flex;
  justify-content: start;
  align-items: baseline;
  flex-direction: column;
  background-color: var(--background);
  width: 100%;
  padding: 20px;
  border-radius: 10px;
}

.poke-description ul {
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
}

.poke-stats {
  flex-direction: column;
}

.poke-stat {
  font-weight: 500;
}

h4 {
  text-transform: uppercase;
}

.show-more-btn {
  padding: 0px 10px;
  background-color: #f15050;
  color: var(--background);
  font-size: var(--p);
  border-radius: 5px;
  cursor: pointer;
}
</style>
