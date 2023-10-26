import { useFrame } from "@react-three/fiber";
import { Box, useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";
import useSound from "use-sound";
import * as THREE from "three";

import { degToRad } from "@/utils";
import Outline from "@components/utils/Outline";
import buttonHit from "@assets/sounds/button-press.mp3";

export function Button({
  position,
  rotation,
  onPress,
}: {
  position: [number, number, number];
  rotation?: number;
  onPress?: () => void;
}) {
  const ref = useRef<THREE.Group>(null);
  const [isHit, setIsHit] = useState(false);

  const textureProps = useTexture({
    map: "/assets/button.png",
  });

  const [playButtonFx] = useSound(buttonHit, {
    volume: 1,
  });

  const handlePress = () => {
    setIsHit(true);
    onPress?.();
    playButtonFx();
  };

  useEffect(() => {
    if (isHit) {
      setTimeout(() => {
        setIsHit(false);
      }, 300);
    }
  });

  useFrame(() => {
    if (!ref.current) return;

    ref.current.position.lerp(new THREE.Vector3(0, isHit ? -0.3 : 0, 0), 0.1);
  });

  return (
    <RigidBody
      colliders="cuboid"
      type="fixed"
      position={position}
      rotation={[0, 0, degToRad(rotation ?? 0)]}
      restitution={1}
      friction={0}
      onCollisionEnter={handlePress}
    >
      <group ref={ref} scale={1} castShadow receiveShadow>
        <Box args={[2.5, 1.2, 0.3]} position={[0, 0, 0]} receiveShadow>
          <meshPhongMaterial {...textureProps} transparent />
          <Outline />
        </Box>
      </group>
    </RigidBody>
  );
}
