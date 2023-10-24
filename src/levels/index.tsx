import Level1 from "./Level1";
import Level2 from "./Level2";
import Level3 from "./Level3";

const Levels = {
  1: {
    level: 1,
    name: "A cute brick",
    Environment: Level1,
    cameraPosition: [0, 10, 3],
  },
  2: {
    level: 2,
    name: "Want more ?",
    Environment: Level2,
    cameraPosition: [0, 40, 3],
  },
  3: {
    level: 3,
    name: "Level 3",
    Environment: Level3,
    cameraPosition: [0, 90, 3],
  },
};

export default Levels;
