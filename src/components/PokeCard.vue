<template>
  <div class="poke-card">
    <span class="poke-id">#{{ pokemon.id }}</span>
    <!-- <img
      :src="pokemon.sprites.front_default"
      :alt="pokemon.name"
      draggable="false"
    /> -->
    <div class="poke-info">
      <h2>{{ pokemon.name }}</h2>
      <!-- <h4>{{ pokemon.types.map((type) => type.type.name).join(", ") }}</h4> -->
      <p>{{ pokemon.weight }}kg</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import typeColors from "@/colors";

const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
});

// const getBackgroundColor = (types) => {
//   const primaryType = types[0].type.name;
//   return typeColors[primaryType] || "#fff";
// };

onMounted(() => {
  console.log(props.pokemon);
});
</script>

<style scoped>
.poke-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 1 250px;
  padding: 50px 15px;
  border-radius: 8px;
  text-align: center;
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

.poke-info > * {
  color: var(--text-color);
}
</style>
