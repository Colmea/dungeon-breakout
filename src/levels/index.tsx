import Level1 from "./Level1";
import Level2 from "./Level2";
import Level3 from "./Level3";
import Level4 from "./Level4";
import Level5 from "./Level5";

const Levels = {
  1: {
    level: 1,
    name: "Another Brick In The Wall",
    Environment: Level1,
    cameraPosition: [0, 9.5, 3],
    isBossLevel: false,
  },
  2: {
    level: 2,
    name: "More Brick, More Fun",
    Environment: Level2,
    cameraPosition: [0, 34, 3],
    isBossLevel: false,
  },
  3: {
    level: 3,
    name: "Hold The Door",
    Environment: Level3,
    // cameraPosition: [-4, 90, 3],
    cameraPosition: [-4, 68, 3],
    isBossLevel: false,
  },
  4: {
    level: 4,
    name: "You. Are. Not. Prepared.",
    Environment: Level4,
    cameraPosition: [-4, 97.5, 3],
    isBossLevel: false,
  },
  5: {
    level: 5,
    name: "BRICK VENGERS: Endgame",
    Environment: Level5,
    cameraPosition: [-4, 130, 3],
    isBossLevel: true,
  },
};

export default Levels;
