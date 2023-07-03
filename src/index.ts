import { Hero } from "./classes/hero";
// import { Hero as Superhero, Hero2 } from "./classes/hero";
// import * as HeroClasses from "./classes/hero";
// import { powers } from "./data/powers";
import powers from "./data/powers";

console.log("Hola Mundo!");
// const Hero = 123;

const ironman = new Hero("Ironman", 1, 50);

// const ironman = new Superhero("Ironman", 1, 50);
// const ironman = new HeroClasses.Hero("Ironman", 1, 50);

console.log(ironman);

console.log(powers);

console.log(ironman.power);

const ironman2 = new Hero("Ironman", 10, 50);

console.log(ironman2.power);
