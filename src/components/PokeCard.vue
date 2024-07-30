<template>
  <div
    class="poke-card"
    :style="{ backgroundColor: getBackgroundColor(pokemon.types) }"
  >
    <span class="poke-id">#{{ pokemon.id }}</span>
    <img
      :src="pokemon.sprites.other['official-artwork'].front_default"
      :alt="pokemon.name"
      class="img-default"
      draggable="false"
    />
    <img
      :src="pokemon.sprites.other['official-artwork'].front_shiny"
      :alt="pokemon.name"
      class="img-shiny"
      draggable="false"
    />
    <div class="poke-info">
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
      <p>{{ pokemon.weight }}KG</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Pokemon } from "../types";
import { capitalizeFirstLetter } from "@/utils/utils";
import { usePokemonUtils } from "@/composables/usePokemonUtils";

const { getBackgroundColor, getTypeIcon } = usePokemonUtils();

const props = defineProps<{
  pokemon: Pokemon;
}>();
</script>

<style scoped>
.poke-card {
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 1 250px;
  padding: 50px 15px;
  border-radius: 8px;
  text-align: center;
  transition: all 200ms ease-in-out;
}

.poke-id {
  position: absolute;
  user-select: none;
  font-size: 40px;
  font-weight: 900;
  color: rgba(0, 0, 0, 0.295);
  top: 0;
  right: 15px;
}

.poke-card img {
  width: 150px;
  height: auto;
}

.img-shiny {
  display: none;
}

.poke-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.poke-info > * {
  color: var(--text-color);
}

.poke-type {
  background-color: var(--background);
  padding: 0px 10px;
  border-radius: 5px;
}

.poke-types {
  display: flex;
  gap: 5px;
}

.poke-card:hover {
  transform: scale(1.04);
  transition: all 200ms ease-in-out;
}

.poke-card:hover .img-default {
  display: none;
}

.poke-card:hover .img-shiny {
  display: block;
}
</style>
@/utils/utils@/utils/colors
