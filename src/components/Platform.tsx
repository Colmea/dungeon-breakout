import { Vector3 } from "@react-three/fiber";
import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useTexture } from "@react-three/drei";
import { useRef } from "react";

import { degToRad } from "@/utils";
import useMover from "@/hooks/useMover";

export function Platform({
  position,
  rotation,
  length = 4.8,
  offset = 3,
}: {
  position: Vector3;
  rotation?: number;
  length?: number;
  offset?: number;
}) {
  const textureProps = useTexture({
    map: "/assets/platform.png",
  });

  const ref = useRef<RapierRigidBody>(null);

  useMover({
    ref: ref,
    direction: "x",
    offset: offset,
    speed: 0.5,
  });

  return (
    <RigidBody
      ref={ref}
      colliders="cuboid"
      type="fixed"
      position={position}
      rotation={[0, 0, degToRad(rotation ?? 0)]}
      restitution={1}
      friction={0}
    >
      <mesh castShadow>
        <boxGeometry args={[length ?? 4.8, 0.6]} />
        <meshPhongMaterial {...textureProps} opacity={1} transparent />
      </mesh>
    </RigidBody>
  );
}
