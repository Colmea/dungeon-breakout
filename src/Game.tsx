import { useThree } from "@react-three/fiber";
import { useState, useEffect } from "react";
import * as THREE from "three";
import Ball from "./components/Ball";
import LEVELS from "./levels";

export default function Game() {
  const { camera } = useThree();
  const [level, setLevel] = useState<keyof typeof LEVELS>(1);

  useEffect(() => {
    // move camera to the level's position
    const levelObj = LEVELS[level];
    camera.position.lerp(new THREE.Vector3(...levelObj.cameraPosition), 0.05);
  }, [level]);

  return (
    <>
      {Object.values(LEVELS).map((level) => {
        const Environment = level.Environment;
        return <Environment key={level.name} />;
      })}

      <Ball onNewLevel={(newLevel) => setLevel(newLevel)} />
    </>
  );
}
