namespace Validations {
  //   const validateText = (text: string): boolean => {
  //     // if (text.length > 3) {
  //     //   return true;
  //     // } else {
  //     //   return false;
  //     // }

  //     return text.length > 3 ? true : false;
  //   };

  export const validateText = (text: string): boolean => {
    // if (text.length > 3) {
    //   return true;
    // } else {
    //   return false;
    // }

    return text.length > 3 ? true : false;
  };

  const validateDate = (fecha: Date): boolean => {
    return isNaN(fecha.valueOf()) ? false : true;
  };
}

console.log(Validations.validateText("Paco"));
console.log(Validations.validateText("Pa"));
