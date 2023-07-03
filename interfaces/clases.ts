(() => {
  interface Xmen {
    name: string;
    realName: string;
    mutantPower(id: number): void;
  }

  class Mutant implements Xmen {
    public name: string;
    public realName: string;

    mutantPower(id: number): string {
      // throw new Error("Method not implemented.");
      return this.name + " " + this.realName;
    }
  }
})();
