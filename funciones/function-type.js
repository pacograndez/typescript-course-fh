"use strict";
(() => {
    //   const addNumber = (a: number, b: number) => {
    //     return a + b;
    //   };
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado`;
    let myFunction;
    //   myFunction = 10;
    //   console.log(myFunction);
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction("Paco"));
    myFunction = saveTheWorld;
    console.log(myFunction());
    let myFunction2;
    myFunction2 = addNumbers;
    console.log(myFunction2(1, 2));
    let myFunction3;
    myFunction3 = greet;
    console.log(myFunction3("Paco"));
    let myFunction4;
    myFunction4 = saveTheWorld;
    console.log(myFunction4());
})();
