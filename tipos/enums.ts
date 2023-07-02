(() => {
  //   enum AudioLevel {
  //     min, // 0
  //     medium, // 1
  //     max, // 2
  //   }

  enum AudioLevel {
    min = 1, // 0
    medium, // 1
    max = 10, // 2
  }

  // const currentAudio = AudioLevel.medium;
  let currentAudio = AudioLevel.max;

  console.log({ currentAudio });

  console.log({ AudioLevel });
})();
