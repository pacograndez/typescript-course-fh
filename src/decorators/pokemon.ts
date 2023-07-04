function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleCondition = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => {};
  }

  // return () => console.log("Hola mundo");
};

const bloquearPrototipo = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

function checkValidPokemonId() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    // console.log({ target, propertyKey, descriptor });
    // descriptor.value = () => console.log("Hola mundo");
    const originalMethod = descriptor.value;
    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error("El id del pokemon debe de estar entre 1 y 800");
      } else {
        return originalMethod(id);
      }
    };
  };
}

function readonly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this, "getter");
        return "Paco";
      },

      set(this, val) {
        // console.log(this, "setter");
        // console.log(val, "setter");
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false,
        });
      },
    };
    return descriptor;
  };
}

@printToConsole
export class Pokemon {
  public publicApi: string = "https://pokeapi.co";
  constructor(public name: string) {}
}

@printToConsoleCondition(false)
export class Pokemon2 {
  public publicApi: string = "https://pokeapi.co";
  constructor(public name: string) {}
}

@bloquearPrototipo
@printToConsoleCondition(false)
export class Pokemon3 {
  public publicApi: string = "https://pokeapi.co";
  constructor(public name: string) {}
}

@bloquearPrototipo
@printToConsoleCondition(false)
export class Pokemon4 {
  public publicApi: string = "https://pokeapi.co";
  constructor(public name: string) {}

  @checkValidPokemonId()
  savePokemonToDB(id: number) {
    console.log(`Pokemon guardado en la DB ${id}`);
  }
}

@bloquearPrototipo
@printToConsoleCondition(false)
export class Pokemon5 {
  @readonly()
  public publicApi: string = "https://pokeapi.co";
  constructor(public name: string) {}

  @checkValidPokemonId()
  savePokemonToDB(id: number) {
    console.log(`Pokemon guardado en la DB ${id}`);
  }
}
