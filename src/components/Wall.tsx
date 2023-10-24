import { Vector3 } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { degToRad } from "../utils";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Wall({
  position,
  rotation,
  length,
  width,
  color,
  texture,
}: {
  position: Vector3;
  rotation?: number;
  length?: number;
  width?: number;
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
      restitution={2}
      friction={0}
    >
      <mesh castShadow>
        <boxGeometry args={[length ?? 8, width ?? 1]} />
        <meshPhongMaterial
          {...textureProps}
          color={color ? color : undefined}
          opacity={0.9}
          transparent
        />
      </mesh>
    </RigidBody>
  );
}
