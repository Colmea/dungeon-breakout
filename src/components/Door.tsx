import { Vector3, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import useSound from "use-sound";

import Destructible from "@components/Destructible";
import { degToRad } from "@/utils";
import doorHitSfx from "@assets/sounds/door-hit.mp3";

export function Door({
  position,
  rotation,
  isLocked = false,
}: {
  position: Vector3;
  rotation?: number;
  isLocked?: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isAlive, setIsAlive] = useState(true);
  const [isHit, setIsHit] = useState(false);

  const baseColor = isLocked ? "grey" : "white";

  const textureProps = useTexture({
    map: "/assets/door.png",
  });

  const [playDoorHitSfx] = useSound(doorHitSfx, {
    volume: 0.2,
  });

  useEffect(() => {
    if (isHit) {
      setTimeout(() => {
        setIsHit(false);
      }, 75);
    }
  });

  useFrame(() => {
    if (!meshRef.current) return;

    const material = meshRef.current.material as THREE.MeshPhongMaterial;

    material.color.lerp(new THREE.Color(isHit ? "red" : baseColor), 0.1);
  });

  const handleHit = () => {
    if (isLocked) return;

    setIsHit(true);
    playDoorHitSfx();
  };

  return (
    <Destructible
      isAlive={isAlive}
      isDestructible={!isLocked}
      health={2}
      onDestruction={() => {
        setIsAlive(false);
      }}
      onHit={handleHit}
    >
      {isAlive && (
        <mesh
          ref={meshRef}
          castShadow
          position={position}
          rotation={[0, 0, degToRad(rotation ?? 180)]}
        >
          <boxGeometry args={[9, 0.7]} />
          <meshPhongMaterial
            {...textureProps}
            color={baseColor}
            opacity={0.9}
            transparent
          />
        </mesh>
      )}
    </Destructible>
  );
}
