(() => {
  type Avengers = {
    name: string;
    weapon: string;
  };

  const ironman: Avengers = {
    name: "Ironman",
    weapon: "Armorsuit",
  };

  const captainAmerica: Avengers = {
    name: "Capitan América",
    weapon: "Shield",
  };

  const thor: Avengers = {
    name: "Thor",
    weapon: "Mjolnir",
  };

  const avengers: Avengers[] = [ironman, captainAmerica, thor];

  //   for (let index = 0; index < avengers.length; index++) {
  //     const element = avengers[index];
  //   }

  for (const avenger of avengers) {
    console.log(avenger);
  }
})();
