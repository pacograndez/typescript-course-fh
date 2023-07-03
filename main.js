"use strict";
(() => {
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
})();
(() => {
    class Mutant {
        mutantPower(id) {
            return this.name + " " + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: "Paco",
        age: 25,
        address: {
            id: 125,
            zip: "KY2 SUD",
            city: "Ottawa",
        },
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
(() => {
    const conducirBatimovil = (auto) => {
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
    const guason = {
        reir: true,
        comer: true,
        llorar: false,
    };
    const reir = (guason) => {
        if (guason.reir) {
            console.log("JAJAJAJA");
        }
    };
    const ciudadGotica = (ciudadanos) => {
        return ciudadanos.length;
    };
    class Persona {
    }
})();
(() => {
    const conducirBatimovil = (auto) => {
        auto.encender = true;
        auto.velocidadMaxima = 100;
        auto.acelerar();
    };
    const batimovil = {
        encender: false,
        velocidadMaxima: 0,
        acelerar() {
            console.log("...... gogogo!!!");
        },
    };
    const guason = {
        reir: true,
        comer: true,
        llorar: false,
    };
    const reir = (guason) => {
        if (guason.reir) {
            console.log("JAJAJAJA");
        }
    };
    const ciudadGotica = (ciudadanos) => {
        return ciudadanos.length;
    };
    class Persona {
        imprimirBio() {
            console.log("Peronsa breve descripcion");
        }
    }
})();
(() => {
    const client = {
        name: "Paco",
        age: 25,
        address: {
            id: 125,
            zip: "KY2 SUD",
            city: "Ottawa",
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
})();
//# sourceMappingURL=main.js.map