(() => {
  let nada: undefined = undefined;

  console.log({ nada });

  // strictNullChecks
  // let isActive: boolean = undefined;
  let isActive: boolean | undefined = undefined;

  console.log({ isActive });
})();
