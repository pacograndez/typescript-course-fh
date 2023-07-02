"use strict";
(() => {
    // const hero = ["Dr Strage", 100];
    const hero = ["Dr Strage", 100, true];
    // hero[0] = 50;/ error
    // hero[1] = 'Ironman';/ error
    hero[0] = "Ironman";
    hero[1] = 50;
    hero[2] = false;
    console.log({ hero });
})();
