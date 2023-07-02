(() => {
  // const abc = () => {};

  // La funcion Never no debe de terminar de manera exitosa
  const error = (message: string): never => {
    throw new Error(message);
  };

  error("Auxilio!");
  // Después de haber llamado a la función el código restante ya
  // no se ejecutará
  console.log("Hola Mundo");
})();
