(() => {
  // Se recomienda siempre usar constantes a menos que se
  // esté seguro que el valor en algún punto va a cambiar.
  const nombre: string = "Paco";

  const getName = (): void => {
    console.log("Viejo getName");
  };

  //   getName = () => {
  //     console.log("Nuevo getName");
  //   };

  // getName();
})();
