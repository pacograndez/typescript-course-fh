(() => {
  // function callBatman() {}
  function callBatman(): void {
    // return indica que la funcion no retonar nada aunque no es necesario
    return;
  }

  const callSuperman = (): void => {
    return;
  };

  const a = callBatman();
  const b = callSuperman();

  console.log({ a });
  console.log({ b });
})();
