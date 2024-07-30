export interface PokemonResult {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
  types: Array<{
    slot: number;
    type: {
      name: string;
    };
  }>;
  weight: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
        front_shiny: string;
      };
    };
  };
}
