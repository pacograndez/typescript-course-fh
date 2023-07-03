(() => {
  //   const addNumber = (a: number, b: number) => {
  //     return a + b;
  //   };
  const addNumbers = (a: number, b: number) => a + b;
  const greet = (name: string) => `Hola ${name}`;
  const saveTheWorld = () => `El mundo está salvado`;

  let myFunction: Function;

  //   myFunction = 10;
  //   console.log(myFunction);

  myFunction = addNumbers;
  console.log(myFunction(1, 2));

  myFunction = greet;
  console.log(myFunction("Paco"));

  myFunction = saveTheWorld;
  console.log(myFunction());

  let myFunction2: (y: number, z: number) => number;

  myFunction2 = addNumbers;
  console.log(myFunction2(1, 2));

  let myFunction3: (y: string) => string;

  myFunction3 = greet;
  console.log(myFunction3("Paco"));

  let myFunction4: () => string;

  myFunction4 = saveTheWorld;
  console.log(myFunction4());
})();
