import { useStore } from "../store";
import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import LEVELS from "../levels";
import BossLife from "./BossLife";
import HudElement from "./HudElement";
import Button from "@/ui/Button";
import Panel from "@/ui/Panel";
import logo from "@assets/logo.png";
import diamondAsset from "@assets/diamond.png";
import ballAsset from "@assets/ball.png";

export default function Hud() {
  const lifes = useStore((state) => state.lifes);
  const diamonds = useStore((state) => state.diamonds);
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
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        >
          <Panel>
            <div style={{ marginTop: -150 }}>
              <img src={logo} style={{ width: 220 }} />
            </div>

            <p
              style={{
                backgroundColor: "rgba(206, 117, 0, 0.1)",
                borderRadius: 5,
                padding: 3,
              }}
            >
              <strong>Move</strong> the paddle with your <strong>mouse</strong>{" "}
              to break the bricks
            </p>
            <p
              style={{
                backgroundColor: "rgba(206, 117, 0, 0.1)",
                borderRadius: 5,
                padding: 3,
              }}
            >
              Watch out for <strong>wooden stakes</strong>
            </p>

            <p style={{ fontSize: "0.8em", marginTop: 60 }}>
              Made by{" "}
              <a
                href="https://twitter.com/Colmeo"
                target="_blank"
                style={{ color: "#1C9BEF" }}
              >
                @Colmeo
              </a>{" "}
              for react-jam 2023
            </p>

            {/* <button onClick={() => startGame()}>sdf</button> */}
          </Panel>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={() => startGame()} />
          </div>
        </div>
      )}

      <div style={{ position: "absolute", width: "100%", zIndex: 100 }}>
        <div
          style={{
            margin: "auto",
            maxWidth: 1000,
            display: "flex",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <HudElement icon={ballAsset} iconSize={28} text={lifes} />
          <HudElement icon={diamondAsset} text={diamonds} />
        </div>
      </div>
      {currentLevel === 5 && (
        <div
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            zIndex: 1,
            top: 0,
          }}
        >
          <BossLife />
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
