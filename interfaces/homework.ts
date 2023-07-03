(() => {
  // Crear interfaces

  // Cree una interfaz para validar el auto (el valor enviado por parametro)
  const conducirBatimovil = (auto): void => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
  };

  const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
      console.log("...... gogogo!!!");
    },
  };

  // Cree una interfaz con que permita utilzar el siguiente objeto
  // utilizando propiedades opcionales

  const guason = {
    reir: true,
    comer: true,
    llorar: false,
  };

  const reir = (guason): void => {
    if (guason.reir) {
      console.log("JAJAJAJA");
    }
  };

  // Cree una interfaz para la siguiente funcion

  const ciudadGotica = (ciudadanos: string[]): number => {
    return ciudadanos.length;
  };

  // Cree una interfaz que obligue crear una clase
  // con las siguientes propiedades y metodos

  /*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
  class Persona {}
})();

// Resolucion de tarea - Interfaces

(() => {
  // Crear interfaces

  // Cree una interfaz para validar el auto (el valor enviado por parametro)
  interface Auto {
    encender: boolean;
    velocidadMaxima: number;
    acelerar(): void;
  }

  const conducirBatimovil = (auto: Auto): void => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
  };

  const batimovil: Auto = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
      console.log("...... gogogo!!!");
    },
  };

  // Cree una interfaz con que permita utilzar el siguiente objeto
  // utilizando propiedades opcionales
  interface Guason {
    reir?: boolean;
    comer?: boolean;
    llorar?: boolean;
  }

  const guason: Guason = {
    reir: true,
    comer: true,
    llorar: false,
  };

  const reir = (guason: Guason): void => {
    if (guason.reir) {
      console.log("JAJAJAJA");
    }
  };

  // Cree una interfaz para la siguiente funcion
  interface Ciudadanos {
    (ciudadanos: string[]): Number;
  }

  const ciudadGotica: Ciudadanos = (ciudadanos: string[]): number => {
    return ciudadanos.length;
  };

  // Cree una interfaz que obligue crear una clase
  // con las siguientes propiedades y metodos

  /*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

  interface IPersona {
    nombre: string;
    edad: string;
    sexo: string;
    estadoCivil: string;
    imprimirBio(): void;
  }

  class Persona implements IPersona {
    public nombre: string;
    public edad: string;
    public sexo: string;
    public estadoCivil: string;
    imprimirBio(): void {
      console.log("Peronsa breve descripcion");
    }
  }
})();
