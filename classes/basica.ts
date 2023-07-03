(() => {
  class Avenger {
    private name: string;
    public team: string;
    public realName?: string;
    static avgAge: number = 35;

    constructor(name: string, team: string, realName?: string) {
      this.name = name;
      this.team = team;
      this.realName = realName;
    }
  }

  const antman: Avenger = new Avenger("Antman", "Capitan");

  console.log(antman);

  console.log(Avenger.avgAge);

  // Forma corta de TS para asignar propiedades

  class Avenger2 {
    // private name: string;
    // private team: string;
    // public realName?: string;
    static avgAge: number = 35;
    static getAcgAge() {
      return this.name;
    }

    constructor(
      private name: string,
      private team: string,
      public realName?: string // avgAge: number = 55
    ) {
      // Avenger2.avgAge = avgAge;
    }

    // Por defecto siempre se declaran como publicos
    public bio(): string {
      return `${this.name} (${this.team})`;
    }
  }

  const antman2: Avenger2 = new Avenger2("Antman!", "Capitan", "Scott Lang");

  console.log(antman2);

  console.log(Avenger2.avgAge);

  console.log(antman2.bio());

  console.log(Avenger2.getAcgAge());
})();
