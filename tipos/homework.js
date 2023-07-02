"use strict";
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
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
// Resolucion de tarea - Tipado
(() => {
    // Tipos
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    // Tuplas
    // const parejaHeroes: string[] = [batman, superman];
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    // Arreglos
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    //Enumeraciones
    let FuerzaHero;
    (function (FuerzaHero) {
        FuerzaHero[FuerzaHero["acuaman"] = 0] = "acuaman";
        FuerzaHero[FuerzaHero["batman"] = 1] = "batman";
        FuerzaHero[FuerzaHero["flash"] = 5] = "flash";
        FuerzaHero[FuerzaHero["superman"] = 100] = "superman";
    })(FuerzaHero || (FuerzaHero = {}));
    const fuerzaFlash = FuerzaHero.flash;
    const fuerzaSuperman = FuerzaHero.superman;
    const fuerzaBatman = FuerzaHero.batman;
    const fuerzaAcuaman = FuerzaHero.acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    // Aserciones de Tipo
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log({ largoDelPoder });
})();
