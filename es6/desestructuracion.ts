(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: true;
    poder: number;
  };
  const avengers: Avengers = {
    nick: "Samuel L. Jackson",
    ironman: "Robert Downey Jr.",
    vision: "Paul Bettany",
    activo: true,
    poder: 1500,
  };

  const { poder, vision } = avengers;

  console.log(poder.toFixed(2), vision.toUpperCase());

  const printAvenger = (avengers: Avengers) => {
    console.log(avengers.vision);
  };

  printAvenger(avengers);

  const printAvenger2 = ({ ironman, ...resto }: Avengers) => {
    console.log(ironman, resto);
  };

  printAvenger2(avengers);

  const avengersArr: string[] = ["Cap. América", "Ironman", "Hulk"];

  // const ironman = avengersArr[1];
  const [, ironman] = avengersArr;

  console.log(ironman);

  const avengersArr2: [string, boolean, number] = [
    "Cap. América",
    true,
    150.15,
  ];

  const [capitan, ironman2, seriaUnNumero] = avengersArr2;

  console.log({ capitan, ironman2, seriaUnNumero });
})();
