(() => {
  // Tipos
  const batman = "Bruce";
  const superman = "Clark";

  const existe = false;

  // Tuplas
  const parejaHeroes = [batman, superman];
  const villano = ["Lex Lutor", 5, true];

  // Arreglos
  const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];

  //Enumeraciones
  const fuerzaFlash = 5;
  const fuerzaSuperman = 100;
  const fuerzaBatman = 1;
  const fuerzaAcuaman = 0;

  // Retorno de funciones
  function activar_batiseñal() {
    return "activada";
  }

  function pedir_ayuda() {
    console.log("Auxilio!!!");
  }

  // Aserciones de Tipo
  const poder: any = "100";
  const largoDelPoder: number = poder.length;
  console.log(largoDelPoder);
})();

// Resolucion de tarea - Tipado
(() => {
  // Tipos
  const batman: string = "Bruce";
  const superman: string = "Clark";

  const existe: boolean = false;

  // Tuplas
  // const parejaHeroes: string[] = [batman, superman];
  const parejaHeroes: [string, string] = [batman, superman];
  const villano: [string, number, boolean] = ["Lex Lutor", 5, true];

  // Arreglos
  const aliados: string[] = ["Mujer Maravilla", "Acuaman", "San", "Flash"];

  //Enumeraciones
  enum FuerzaHero {
    acuaman = 0,
    batman = 1,
    flash = 5,
    superman = 100,
  }

  const fuerzaFlash: FuerzaHero = FuerzaHero.flash;
  const fuerzaSuperman: FuerzaHero = FuerzaHero.superman;
  const fuerzaBatman: FuerzaHero = FuerzaHero.batman;
  const fuerzaAcuaman: FuerzaHero = FuerzaHero.acuaman;

  // Retorno de funciones
  function activar_batiseñal(): string {
    return "activada";
  }

  function pedir_ayuda(): void {
    console.log("Auxilio!!!");
  }

  // Aserciones de Tipo
  const poder: any = "100";
  const largoDelPoder: number = (poder as string).length;
  console.log({ largoDelPoder });
})();
