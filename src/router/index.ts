import NotFound from "@/views/NotFound.vue";
import Pokedex from "@/views/Pokedex.vue";
import PokemonDetails from "@/views/PokemonDetails.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Pokedex",
    component: Pokedex,
  },
  {
    path: "/pokemon/:id",
    name: "PokemonDetails",
    component: PokemonDetails,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
