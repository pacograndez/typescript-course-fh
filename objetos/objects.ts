(() => {
  // let flash = {
  //   name: "Barry Allen",
  //   age: 24,
  //   powers: ["Super velocidad", "Viajar en el tiempo"],
  // };

  let flash: {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocidad", "Viajar en el tiempo"],
  };

  console.log({ flash });

  flash = {
    name: "Clark Kend",
    // age: 60,
    powers: ["Super fuerza"],
    getName() {
      return this.name;
    },
  };

  console.log({ flash });
  console.log(flash.getName());
})();
