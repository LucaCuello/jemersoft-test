import { PokeType } from "@/types";

const pokeTypes: { [key: string]: PokeType } = {
  normal: { color: "#c3c7bf", icon: "md-catchingpokemon" },
  fire: { color: "#efd3bb", icon: "gi-fire" },
  water: { color: "#bbd9ef", icon: "gi-water-drop" },
  electric: { color: "#f9da5a", icon: "md-electric-bolt" },
  grass: { color: "#c4e3d4", icon: "gi-high-grass" },
  ice: { color: "#96D9D6", icon: "gi-ice-cube" },
  fighting: { color: "#de645f", icon: "gi-punch" },
  poison: { color: "#c86dc6", icon: "gi-poison-bottle" },
  ground: { color: "#E2BF65", icon: "gi-ground-sprout" },
  flying: { color: "#A98FF3", icon: "gi-flying-trout" },
  psychic: { color: "#fb8cae", icon: "gi-psychic-waves" },
  bug: { color: "#e1efbb", icon: "bi-bug-fill" },
  rock: { color: "#d2c167", icon: "gi-falling-rocks" },
  ghost: { color: "#735797", icon: "fa-ghost" },
  dragon: { color: "#ae8efd", icon: "go-spiked-dragon-head" },
  dark: { color: "#705746", icon: "md-dark-mode" },
  steel: { color: "#B7B7CE", icon: "gi-steel-claws" },
  fairy: { color: "#D685AD", icon: "gi-fairy-wand" },
};

export default pokeTypes;
