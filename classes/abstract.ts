(() => {
  // Las clases abstractas sirven para crear otras clases o que estas
  // extiendan de ella
  abstract class Mutante {
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutante {
    salvarMundo(): string {
      return "Mundo a salvo!";
    }
  }

  const beast = new Xmen("Beast", "Hank");

  console.log(beast);

  class Villian extends Mutante {
    conquistarMundo(): string {
      return "Coquistar el mundo!";
    }
  }

  const magneto = new Villian("Magneto", "Magnus");

  console.log(magneto);

  console.log(beast.salvarMundo());
  console.log(magneto.conquistarMundo());

  const printName = (caracter: Mutante) => {
    console.log(caracter.realName);
  };

  printName(beast);
})();
