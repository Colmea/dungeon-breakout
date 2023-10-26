import Level1 from "./Level1";
import Level2 from "./Level2";
import Level3 from "./Level3";

const Levels = {
  1: {
    level: 1,
    name: "Another Brick In The Wall",
    Environment: Level1,
    cameraPosition: [0, 10, 3],
  },
  2: {
    level: 2,
    name: "More Brick, More Fun",
    Environment: Level2,
    cameraPosition: [0, 40, 3],
  },
  3: {
    level: 3,
    name: "Hold The Door",
    Environment: Level3,
    cameraPosition: [-4, 68, 3],
  },
};

export default Levels;
