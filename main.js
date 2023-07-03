"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: "Samuel L. Jackson",
        ironman: "Robert Downey Jr.",
        vision: "Paul Bettany",
        activo: true,
        poder: 1500,
    };
    const { poder, vision } = avengers;
    console.log(poder.toFixed(2), vision.toUpperCase());
    const printAvenger = (avengers) => {
        console.log(avengers.vision);
    };
    printAvenger(avengers);
    const printAvenger2 = (_a) => {
        var { ironman } = _a, resto = __rest(_a, ["ironman"]);
        console.log(ironman, resto);
    };
    printAvenger2(avengers);
    const avengersArr = ["Cap. América", "Ironman", "Hulk"];
    const [, ironman] = avengersArr;
    console.log(ironman);
    const avengersArr2 = [
        "Cap. América",
        true,
        150.15,
    ];
    const [capitan, ironman2, seriaUnNumero] = avengersArr2;
    console.log({ capitan, ironman2, seriaUnNumero });
})();
(() => {
    const ironman = {
        name: "Ironman",
        weapon: "Armorsuit",
    };
    const captainAmerica = {
        name: "Capitan América",
        weapon: "Shield",
    };
    const thor = {
        name: "Thor",
        weapon: "Mjolnir",
    };
    const avengers = [ironman, captainAmerica, thor];
    for (const avenger of avengers) {
        console.log(avenger);
    }
})();
(() => {
    const nombre = "Paco";
    const getName = () => {
        console.log("Viejo getName");
    };
})();
//# sourceMappingURL=main.js.map