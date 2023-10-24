import Level1 from "./Level1";
import Level2 from "./Level2";

const Levels = {
  1: {
    name: "A cute brick",
    Environment: Level1,
    cameraPosition: [0, 17, 3],
  },
  2: {
    name: "Want more ?",
    Environment: Level2,
    cameraPosition: [0, 40, 3],
  },
};

export default Levels;
