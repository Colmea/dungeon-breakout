import { useStore } from "../store";
import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import LEVELS from "../levels";

export default function Hud() {
  const currentLevel = useStore((state) => state.level);
  const hasGameStarted = useStore((state) => state.started);
  const startGame = useStore((state) => state.startGame);

  const [showLevel, setShowLevel] = useState(false);

  useEffect(() => {
    if (!hasGameStarted) return;

    setShowLevel(true);
    const timeout = setTimeout(() => setShowLevel(false), 5000);
    return () => clearTimeout(timeout);
  }, [currentLevel, hasGameStarted]);

  const levelSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: showLevel ? 1 : 0 },
  });

  return (
    <>
      {!hasGameStarted && (
        <div
          style={{
            position: "absolute",
            zIndex: 20,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              textAlign: "center",
              backgroundColor: "rgba(0,0,0,0.7)",
              padding: "50px",
            }}
          >
            <button onClick={() => startGame()}>PLAY</button>
          </div>
        </div>
      )}
      <div style={{ position: "absolute", zIndex: 20, width: "100%" }}>
        <animated.div style={levelSpring}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 80,
              textAlign: "center",
              backgroundColor: "rgba(0,0,0,0.7)",
              padding: "10px",
            }}
          >
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
          </div>
        </animated.div>
      </div>
    </>
  );
}
