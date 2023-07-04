import axios from "axios";
import { Pokemon } from "../interfaces";

export const getPokemon = () => {
  console.log("Hola mudno");

  return 1;
};

export const getPokemon2 = async () => {
  console.log("Hola mundo");

  return 1;
};

export const getPokemon3 = async (pokemonId: number): Promise<Pokemon> => {
  //   const res = await axios.get<Pokemon>(
  //     `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  //   );
  // console.log(res.data.name);
  const { data } = await axios.get<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );

  return data;
};
