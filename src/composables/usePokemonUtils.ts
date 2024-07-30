import { PokemonType } from "@/types";
import pokeTypes from "@/utils/colors";

export const usePokemonUtils = () => {
  const getBackgroundColor = (types: PokemonType[] | undefined): string => {
    if (!types || types.length === 0) {
      return "#fff";
    }
    const primaryType = types[0].type.name;
    return pokeTypes[primaryType]?.color || "#fff";
  };

  const getTypeIcon = (typeName: string): string => {
    return pokeTypes[typeName]?.icon || "";
  };

  return {
    getBackgroundColor,
    getTypeIcon,
  };
};
