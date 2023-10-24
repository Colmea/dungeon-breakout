import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import Ball from "./components/Ball";
import LEVELS from "./levels";
import { useStore } from "./store";

export default function Game() {
  const { camera } = useThree();
  const level = useStore((state) => state.level);

  useFrame(() => {
    console.log("NEW LEVEL", level);
    // move camera to the level's position
    const levelObj = LEVELS[level];
    const newCameraPosition = new THREE.Vector3(...levelObj.cameraPosition);
    console.log("newCameraPosition", newCameraPosition);

    camera.position.lerp(newCameraPosition, 0.05);
  });

  return (
    <>
      {Object.values(LEVELS).map((level) => {
        const Environment = level.Environment;
        return <Environment key={level.name} />;
      })}

      <Ball />
    </>
  );
}
