"use strict";
(() => {
    // let isSuperman = true;
    let isSuperman = true;
    let isBatman = false;
    // isSuperman = true && false;
    isSuperman = isBatman ? true : false;
    console.log({ isBatman });
    console.log({ isSuperman });
})();
