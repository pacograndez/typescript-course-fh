"use strict";
(() => {
    let myCustomVariable = "Paco";
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "Brunce",
        age: 43,
        powers: [1],
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
