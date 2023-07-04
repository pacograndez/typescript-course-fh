import { Hero } from "../classes/hero";
// import { Hero as Superhero, Hero2 } from "./classes/hero";
// import * as HeroClasses from "./classes/hero";
// import { powers } from "./data/powers";
import powers from "../data/powers";
import {
  genericFunction,
  genericFunctionArrow,
  printObject,
} from "../generics/generics";
import { IHero, IVillain } from "../interfaces";

// import { IHero } from "./interfaces/hero";
// import { IVillain } from "./interfaces/villain";

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

printObject(123);
printObject(new Date());
printObject({ a: 1, b: 3, c: 3 });
printObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
printObject("Hola Mundo");

console.log(genericFunction(3.1416).toFixed(2));
console.log(genericFunction("Hola mundo").toUpperCase());
console.log(genericFunction(new Date()).getDate());

console.log(genericFunctionArrow(3.1416).toFixed(2));
console.log(genericFunctionArrow("Hola mundo").toUpperCase());
console.log(genericFunctionArrow(new Date()).getDate());

const deadpool = {
  name: "Deadpool",
  realName: "Wade Winston Wilson",
  dangerLever: 130,
};

console.log(genericFunctionArrow<IHero>(deadpool));
console.log(genericFunctionArrow<IVillain>(deadpool).dangerLever);
