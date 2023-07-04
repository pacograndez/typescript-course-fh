import { getPokemon, getPokemon2, getPokemon3 } from "./generics/get-pokemon";

getPokemon();

console.log(getPokemon());

getPokemon2()
  .then((res) => console.log(res))
  .catch((error) => console.log(error))
  .finally(() => console.log("Fin de getPokemon2"));

getPokemon3(4)
  .then((pokemon) => console.log(pokemon.sprites.front_default))
  .catch((error) => console.log(error))
  .finally(() => console.log("Fin de getPokemon2"));
