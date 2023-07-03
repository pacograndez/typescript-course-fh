"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return "Mundo a salvo!";
        }
    }
    const beast = new Xmen("Beast", "Hank");
    console.log(beast);
    class Villian extends Mutante {
        conquistarMundo() {
            return "Coquistar el mundo!";
        }
    }
    const magneto = new Villian("Magneto", "Magnus");
    console.log(magneto);
    console.log(beast.salvarMundo());
    console.log(magneto.conquistarMundo());
    const printName = (caracter) => {
        console.log(caracter.realName);
    };
    printName(beast);
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger("Antman", "Capitan");
    console.log(antman);
    console.log(Avenger.avgAge);
    class Avenger2 {
        static getAcgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger2.avgAge = 35;
    const antman2 = new Avenger2("Antman!", "Capitan", "Scott Lang");
    console.log(antman2);
    console.log(Avenger2.avgAge);
    console.log(antman2.bio());
    console.log(Avenger2.getAcgAge());
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("Constructor Avenger llamado!");
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
        getFullName2() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
    }
    const wolverine = new Xmen("Wolverine", "Logan");
    console.log(wolverine);
    class Xmen2 extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log("Constructor Xmen llamado!");
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullName2());
        }
    }
    const wolverine2 = new Xmen2("Wolverine", "Logan", true);
    console.log(wolverine2);
    wolverine2.getFullNameDesdeXmen();
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("Constructor Avenger llamado!");
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
        getFullName2() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
    }
    const wolverine = new Xmen("Wolverine", "Logan");
    console.log(wolverine);
    class Xmen2 extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log("Constructor Xmen llamado!");
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullName2());
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            this.name = name;
        }
    }
    const wolverine2 = new Xmen2("Wolverine", "Logan", true);
    console.log(wolverine2);
    wolverine2.getFullNameDesdeXmen();
    console.log(wolverine2.fullName);
    wolverine2.fullName = "Paco";
    console.log(wolverine2.fullName);
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis(name) {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis("Soy Apocalipsis... el único");
            }
            return Apocalipsis.instance;
        }
        changeName(name) {
            this.name = name;
        }
    }
    const apocalipsis = Apocalipsis.callApocalipsis("Soy Apocalipsis... el único");
    console.log(apocalipsis);
    const apocalipsis1 = Apocalipsis.callApocalipsis("Soy Apocalipsis1... el único");
    apocalipsis1.changeName("Xavier");
    console.log(apocalipsis1);
})();
//# sourceMappingURL=main.js.map