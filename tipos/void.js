"use strict";
(() => {
    // function callBatman() {}
    function callBatman() {
        // return indica que la funcion no retonar nada aunque no es necesario
        return;
    }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    const b = callSuperman();
    console.log({ a });
    console.log({ b });
})();
