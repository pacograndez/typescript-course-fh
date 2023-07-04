import { getPokemon, getPokemon2, getPokemon3 } from "./generics/get-pokemon";

import { Pokemon, Pokemon3, Pokemon4, Pokemon5 } from "./decorators/pokemon";

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

const charmander = new Pokemon("Charmander");

console.log(charmander);

// (Pokemon3.prototype as any).customeName = "Pikachu";

const charmander4 = new Pokemon4("Pikachu");

charmander4.savePokemonToDB(850);
charmander4.savePokemonToDB(100);

const charmander5 = new Pokemon5("Pikachu2");

console.log(charmander5, "charmander");
