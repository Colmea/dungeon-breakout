import { Vector3 } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useCallback, useRef, useState } from "react";
import { IntersectionEnterPayload, RigidBody } from "@react-three/rapier";
import useSound from "use-sound";

import useMeshMover from "@/hooks/useMeshMover";
import collectFx from "@assets/sounds/collect.mp3";
import { useStore } from "@/store";

export function Diamond({ position }: { position: Vector3 }) {
  const collectDiamond = useStore((state) => state.collectDiamond);
  const [isAlive, setIsAlive] = useState(true);

  const textureProps = useTexture({
    map: "/assets/diamond.png",
  });

  const [playCollectFx] = useSound(collectFx, {
    volume: 0.2,
  });

  const ref = useRef<THREE.Mesh>(null);

  useMeshMover({
    meshRef: ref,
    direction: "y",
    speed: 5,
    offset: 3,
    delay: 1,
  });

  const handleHit = useCallback(
    ({ other }: IntersectionEnterPayload) => {
      if (other.rigidBody && other.rigidBodyObject?.name === "ball") {
        playCollectFx();
        setIsAlive(false);
        collectDiamond();
      }
    },
    [collectDiamond, playCollectFx]
  );

  console.log("diamond render");
  return (
    <>
      {isAlive && (
        <RigidBody position={position} sensor onIntersectionEnter={handleHit}>
          <mesh ref={ref}>
            <boxGeometry args={[2, 2]} />
            <meshPhongMaterial {...textureProps} transparent />
          </mesh>
        </RigidBody>
      )}
    </>
  );
}
