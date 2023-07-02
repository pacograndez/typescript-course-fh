(() => {
  //   const batman = "Batman";
  //   const linternaVerde = "Linterna Verde";
  //   const volcanNegro = `Héroe: Volcan Negro`;

  const batman: string = "Batman";
  const linternaVerde: string = "Linterna Verde";
  const volcanNegro: string = `Héroe: Volcan Negro`;

  // const abc = 123;

  console.log(batman.toUpperCase());

  console.log(`I'm ${batman}`);

  // console.log(`I'm ${batman}, ${abc.toString()}`);

  // console.log(batman[10].toUpperCase());
  console.log(batman[10]?.toUpperCase() || "No está presente");
})();
