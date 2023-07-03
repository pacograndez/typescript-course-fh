(() => {
  // Funciones Básicas
  function sumar(a, b) {
    return a + b;
  }

  const contar = (heroes) => {
    return heroes.length;
  };
  const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
  contar(superHeroes);

  //Parametros por defecto
  const llamarBatman = (llamar) => {
    if (llamar) {
      console.log("Batiseñal activada");
    }
  };

  llamarBatman();

  // Rest?
  const unirheroes = (personas) => {
    return personas.join(", ");
  };

  // Tipo funcion
  const noHaceNada = (numero, texto, booleano, arreglo) => {};

  // Crear el tipo de funcion que acepte la funcion "noHaceNada"
  let noHaceNadaTampoco;
  noHaceNadaTampoco = noHaceNada;
})();

// Resolucion de tarea - Funciones
(() => {
  // Funciones Básicas
  function sumar(a: number, b: number): number {
    return a + b;
  }

  const contar = (heroes: string[]): number => {
    return heroes.length;
  };

  const superHeroes: string[] = [
    "Flash",
    "Arrow",
    "Superman",
    "Linterna Verde",
  ];
  contar(superHeroes);

  //Parametros por defecto
  const llamarBatman = (llamar: boolean = true): void => {
    if (llamar) {
      console.log("Batiseñal activada");
    }
  };

  llamarBatman();

  // Rest?
  const unirheroes = (...personas: string[]) => {
    return personas.join(", ");
  };

  // Tipo funcion
  const noHaceNada = (
    numero: number,
    texto: string,
    booleano: boolean,
    arreglo: string[]
  ) => {};

  // Crear el tipo de funcion que acepte la funcion "noHaceNada"
  // let noHaceNadaTampoco: Function;
  let noHaceNadaTampoco: (
    n: number,
    s: string,
    b: boolean,
    a: string[]
  ) => void;
  noHaceNadaTampoco = noHaceNada;
})();
