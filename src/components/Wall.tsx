import { Vector3 } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

import { degToRad } from "@/utils";

export function Wall({
  position,
  rotation,
  length,
  color,
  texture,
}: {
  position: Vector3;
  rotation?: number;
  length?: number;
  color?: string;
  texture?: Record<string, string>;
}) {
  // Load texture assets/brick.png and apply it to the wall

  const textureProps = useTexture(
    texture ?? {
      map: "/assets/wall.png",
    }
  );

  textureProps.map.wrapS = textureProps.map.wrapT = THREE.RepeatWrapping;
  textureProps.map.repeat.set(2, 1);

  return (
    <RigidBody
      colliders="cuboid"
      type="fixed"
      position={position}
      rotation={[0, 0, degToRad(rotation ?? 0)]}
      restitution={1}
      friction={0}
    >
      {Array.from({ length: length ?? 1 }, (_, i) => (
        <mesh castShadow key={i} position={[i * 8, 0, 0]}>
          <boxGeometry args={[8, 1]} />
          <meshPhongMaterial
            {...textureProps}
            color={color ? color : undefined}
            opacity={1}
            transparent
          />
        </mesh>
      ))}
    </RigidBody>
  );
}
