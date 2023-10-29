import { useTexture } from "@react-three/drei";
import { useCallback } from "react";
import { IntersectionEnterPayload, RigidBody } from "@react-three/rapier";
import useSound from "use-sound";

import damageFx from "@assets/sounds/door-destruct.mp3";
import { useStore } from "@/store";
import { degToRad } from "@/utils";

type Props = {
  position: [number, number, number];
  rotation?: number;
};

export function Spikes({ position, rotation }: Props) {
  const takeLife = useStore((state) => state.takeLife);

  const textureProps = useTexture({
    map: "/assets/spikes.png",
  });

  const [playDamageFx] = useSound(damageFx, {
    volume: 0.2,
  });

  const handleHit = useCallback(
    ({ other }: IntersectionEnterPayload) => {
      if (other.rigidBody && other.rigidBodyObject?.name === "ball") {
        playDamageFx();

        takeLife();
      }
    },
    [playDamageFx, takeLife]
  );

  return (
    <RigidBody
      position={position}
      rotation={[0, 0, degToRad(rotation ?? 0)]}
      sensor
      onIntersectionEnter={handleHit}
    >
      <mesh>
        <boxGeometry args={[3.2, 1.6]} />
        <meshPhongMaterial {...textureProps} transparent />
      </mesh>
    </RigidBody>
  );
}
