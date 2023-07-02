"use strict";
(() => {
    // let avengers;
    let avengers = 10;
    console.log({ avengers });
    const villians = 20;
    console.log({ villians });
    if (avengers < villians) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Nos salvamos");
    }
    // avengers = 123;
    // avengers = Number("123");
    avengers = Number("55A");
    console.log({ avengers });
})();
