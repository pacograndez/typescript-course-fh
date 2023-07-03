(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log("Constructor Avenger llamado!");
    }

    // Cuando es private solo se puede acceder desde la misma clase
    private getFullName(): string {
      return `${this.name} ${this.realName}`;
    }

    // Cuando es protected se puede acceder desde la clase la cual hereda o extiende
    protected getFullName2(): string {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {}

  const wolverine = new Xmen("Wolverine", "Logan");

  console.log(wolverine);

  class Xmen2 extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      console.log("Constructor Xmen llamado!");
    }

    getFullNameDesdeXmen(): void {
      console.log(super.getFullName2());
    }

    get fullName(): string {
      return `${this.name} - ${this.realName}`;
    }

    set fullName(name: string) {
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
