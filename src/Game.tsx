import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import Ball from "@components/Ball";
import LEVELS from "@/levels";
import { useStore } from "@/store";

export default function Game() {
  const { camera } = useThree();
  const currentLevel = useStore((state) => state.level);

  useFrame(() => {
    // move camera to the level's position
    const levelObj = LEVELS[currentLevel];

    const currentCameraPosition = camera.position;
    const newCameraPosition = new THREE.Vector3(...levelObj.cameraPosition);

    // check if camera is already at the new position
    if (currentCameraPosition.distanceTo(newCameraPosition) < 0.1) return;

    camera.position.lerp(newCameraPosition, 0.05);
  });

  return (
    <>
      {Object.values(LEVELS).map((level) => {
        if (
          level.level !== 1 &&
          (level.level < currentLevel - 1 || level.level > currentLevel + 1)
        )
          return;
        const Environment = level.Environment;
        return <Environment key={level.name} />;
      })}

      <Ball />
    </>
  );
}
