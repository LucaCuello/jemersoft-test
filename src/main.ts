import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
    BiBugFill,
    FaGhost,
    GiFairyWand,
    GiFallingRocks,
    GiFire,
    GiFlyingTrout,
    GiGroundSprout,
    GiHighGrass,
    GiIceCube,
    GiPoisonBottle,
    GiPsychicWaves,
    GiPunch,
    GiSpikedDragonHead,
    GiSteelClaws,
    GiWaterDrop,
    MdCatchingpokemon,
    MdDarkmode,
    MdElectricbolt,
} from "oh-vue-icons/icons";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";

addIcons(
  MdCatchingpokemon,
  GiFire,
  GiWaterDrop,
  MdElectricbolt,
  GiHighGrass,
  GiIceCube,
  GiPunch,
  GiPoisonBottle,
  GiGroundSprout,
  GiFlyingTrout,
  GiPsychicWaves,
  BiBugFill,
  GiFallingRocks,
  FaGhost,
  GiSpikedDragonHead,
  MdDarkmode,
  GiSteelClaws,
  GiFairyWand
);

createApp(App).component("v-icon", OhVueIcon).use(router).mount("#app");
