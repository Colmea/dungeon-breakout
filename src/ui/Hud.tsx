import { useStore } from "../store";
import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import LEVELS from "../levels";

export default function Hud() {
  const currentLevel = useStore((state) => state.level);
  const [showLevel, setShowLevel] = useState(false);

  useEffect(() => {
    setShowLevel(true);
    const timeout = setTimeout(() => setShowLevel(false), 3000);
    return () => clearTimeout(timeout);
  }, [currentLevel]);

  const levelSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: showLevel ? 1 : 0 },
  });

  return (
    <div style={{ position: "absolute", zIndex: 20, width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 80,
          textAlign: "center",
        }}
      >
        <animated.div style={levelSpring}>
          <div
            style={{
              fontSize: "3rem",
              textShadow: "2px 2px 2px rgba(0,0,55,0.3)",
            }}
          >
            <strong>CHAPTER {currentLevel}</strong>
            <div
              style={{
                fontFamily: "Pixelify Sans",
              }}
            >
              {LEVELS[currentLevel].name}
            </div>
          </div>
        </animated.div>
      </div>
    </div>
  );
}
