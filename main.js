"use strict";
(() => {
    const batimovil2 = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4,
    };
    const bumblebee2 = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        },
    };
    const villanos2 = [
        {
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false,
        },
        {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true,
        },
        {
            nombre: "James Logan",
            edad: undefined,
            mutante: true,
        },
    ];
    const charles2 = {
        poder: "psiquico",
        estatura: 1.78,
    };
    const apocalipsis2 = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
    };
    console.log(apocalipsis2);
    let mystique2;
    mystique2 = charles2;
    mystique2 = apocalipsis2;
})();
const msg = "Hola mundo";
console.log(msg);
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || "no lastname"}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || "no lastname"}`;
        }
    };
    const name = fullName("Tony", "Stark", true);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || "no lastname"}`;
    };
    const name = fullName("Tony");
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName("Tony", "Stark");
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")}`;
    };
    const superman = fullName("Clark", "Joseph", "Kent");
    console.log({ superman });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado`;
    let myFunction;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction("Paco"));
    myFunction = saveTheWorld;
    console.log(myFunction());
    let myFunction2;
    myFunction2 = addNumbers;
    console.log(myFunction2(1, 2));
    let myFunction3;
    myFunction3 = greet;
    console.log(myFunction3("Paco"));
    let myFunction4;
    myFunction4 = saveTheWorld;
    console.log(myFunction4());
})();
(() => {
    const hero = "Flash";
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return "Batiseñal activada!";
    };
    console.log(typeof activateBatiSignal);
    const heroName = returnName();
    console.log({ heroName });
})();
(() => {
    function sumar(a, b) {
        return a + b;
    }
    const contar = (heroes) => {
        return heroes.length;
    };
    const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);
    const llamarBatman = (llamar) => {
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman();
    const unirheroes = (personas) => {
        return personas.join(", ");
    };
    const noHaceNada = (numero, texto, booleano, arreglo) => { };
    let noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
})();
(() => {
    function sumar(a, b) {
        return a + b;
    }
    const contar = (heroes) => {
        return heroes.length;
    };
    const superHeroes = [
        "Flash",
        "Arrow",
        "Superman",
        "Linterna Verde",
    ];
    contar(superHeroes);
    const llamarBatman = (llamar = true) => {
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman();
    const unirheroes = (...personas) => {
        return personas.join(", ");
    };
    const noHaceNada = (numero, texto, booleano, arreglo) => { };
    let noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
})();
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4,
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    },
};
const villanos = [
    {
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false,
    },
    {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true,
    },
    {
        nombre: "James Logan",
        edad: undefined,
        mutante: true,
    },
];
const charles = {
    poder: "psiquico",
    estatura: 1.78,
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
};
let mystique;
mystique = charles;
mystique = apocalipsis;
const batimovil2 = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4,
};
const bumblebee2 = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    },
};
const villanos2 = [
    {
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false,
    },
    {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true,
    },
    {
        nombre: "James Logan",
        edad: undefined,
        mutante: true,
    },
];
const charles2 = {
    poder: "psiquico",
    estatura: 1.78,
};
const apocalipsis2 = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
};
let mystique2;
mystique2 = charles2;
mystique2 = apocalipsis2;
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    console.log({ flash });
    flash = {
        name: "Clark Kend",
        powers: ["Super fuerza"],
        getName() {
            return this.name;
        },
    };
    console.log({ flash });
    console.log(flash.getName());
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["Super velocidad"],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    let myCustomVariable = "Paco";
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "Brunce",
        age: 43,
        powers: [1],
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = "Dr. Strange";
    console.log(avenger.charAt(0));
    avenger = 150.23256415;
    console.log(avenger.toFixed(2));
    console.log({ exists });
    console.log({ power });
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    numbers.push(11);
    console.log({ numbers });
    const villians = ["Omega Rojo", "Dormammu", "Duende Verde"];
    villians.forEach((v) => console.log(v.toUpperCase()));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = isBatman ? true : false;
    console.log({ isBatman });
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log({ currentAudio });
    console.log({ AudioLevel });
})();
(() => {
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    const fuerzaFlash = 5;
    const fuerzaSuperman = 100;
    const fuerzaBatman = 1;
    const fuerzaAcuaman = 0;
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
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
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log({ largoDelPoder });
})();
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    error("Auxilio!");
    console.log("Hola Mundo");
})();
(() => {
    let nada = undefined;
    console.log({ nada });
    let isActive = undefined;
    console.log({ isActive });
})();
(() => {
    let avengers = 10;
    console.log({ avengers });
    const villians = 20;
    console.log({ villians });
    if (avengers < villians) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Nos salvamos");
    }
    avengers = Number("55A");
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = "Batman";
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Héroe: Volcan Negro`;
    console.log(batman.toUpperCase());
    console.log(`I'm ${batman}`);
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "No está presente");
})();
(() => {
    const hero = ["Dr Strage", 100, true];
    hero[0] = "Ironman";
    hero[1] = 50;
    hero[2] = false;
    console.log({ hero });
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    const b = callSuperman();
    console.log({ a });
    console.log({ b });
})();
//# sourceMappingURL=main.js.map