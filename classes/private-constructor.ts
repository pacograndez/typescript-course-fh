(() => {
  // Singleton
  class Apocalipsis {
    static instance: Apocalipsis;

    private constructor(public name: string) {}

    static callApocalipsis(name: string): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis("Soy Apocalipsis... el único");
      }
      return Apocalipsis.instance;
    }

    changeName(name: string): void {
      this.name = name;
    }
  }

  // Constructor of class 'Apocalipsis' is private and only accessible within the class declaration.
  // const apocalipsis = new Apocalipsis("Soy Apocalipsis... el único");

  const apocalipsis = Apocalipsis.callApocalipsis(
    "Soy Apocalipsis... el único"
  );

  console.log(apocalipsis);

  const apocalipsis1 = Apocalipsis.callApocalipsis(
    "Soy Apocalipsis1... el único"
  );

  apocalipsis1.changeName("Xavier");

  console.log(apocalipsis1);
})();
