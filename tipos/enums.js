"use strict";
(() => {
    //   enum AudioLevel {
    //     min, // 0
    //     medium, // 1
    //     max, // 2
    //   }
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    // const currentAudio = AudioLevel.medium;
    let currentAudio = AudioLevel.max;
    console.log({ currentAudio });
    console.log({ AudioLevel });
})();
