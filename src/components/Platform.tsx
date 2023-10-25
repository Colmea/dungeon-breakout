import { Vector3 } from "@react-three/fiber";

import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { degToRad } from "../utils";
import useMover from "../hooks/useMover";
import { RigidBody } from "@react-three/rapier";

export function Platform({
  position,
  rotation,
}: {
  position: Vector3;
  rotation?: number;
}) {
  const textureProps = useTexture({
    map: "/assets/platform.png",
  });

  const ref = useRef<THREE.Mesh>(null);

  useMover({
    meshRef: ref,
    direction: "x",
    offset: 3,
    speed: 0.5,
  });

  return (
    <RigidBody
      colliders="cuboid"
      type="fixed"
      position={position}
      rotation={[0, 0, degToRad(rotation ?? 0)]}
      restitution={1}
      friction={0}
    >
      <mesh castShadow ref={ref}>
        <boxGeometry args={[4.8, 0.6]} />
        <meshPhongMaterial {...textureProps} opacity={1} transparent />
      </mesh>
    </RigidBody>
  );
}
