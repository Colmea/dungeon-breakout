import leftBg from "@assets/ui/boss-life-left.png";
import rightBg from "@assets/ui/boss-life-right.png";
import centerBg from "@assets/ui/boss-life-center.png";
import { useStore } from "@/store";
import CONFIG from "@/config";

const LIFE_BAR_WIDTH = 300;
const LIFE_BAR_HEIGHT = 80;
const MAX_LIFE =
  CONFIG.BOSS_CLAW_HEALTH + CONFIG.BOSS_CLAW_HEALTH + CONFIG.BOSS_BODY_HEALTH;

const calculateLifeBarWidth = (x: number) => (x * 83) / 100;

const BossLife = () => {
  const currentBossLife = useStore((state) => state.bossLife);
  const lifePercentage = (currentBossLife / MAX_LIFE) * 100;

  return (
    <div
      style={{
        backgroundImage: `url(${leftBg}), url(${rightBg}), url(${centerBg}`,
        backgroundRepeat: "no-repeat, no-repeat, repeat-x",
        backgroundPosition: "left, right, center",
        backgroundSize: `${LIFE_BAR_HEIGHT}px, ${LIFE_BAR_HEIGHT}px, ${LIFE_BAR_HEIGHT}px`,
        height: LIFE_BAR_HEIGHT + 5,
        position: "relative",
        width: LIFE_BAR_WIDTH,
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 0, 0, 0.9)",
          height: 4,
          position: "absolute",
          top: 38,
          left: 44,
          width: `${calculateLifeBarWidth(lifePercentage)}%`,
        }}
      />
    </div>
  );
};

export default BossLife;
