import { Vector3 } from "@react-three/fiber";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { degToRad } from "../utils";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Collider({
  position,
  rotation,
  length,
  width,
  onEnter,
}: {
  onEnter: () => void;
  position: Vector3;
  rotation?: number;
  length?: number;
  width?: number;
}) {
  return (
    <RigidBody>
      <CuboidCollider
        position={position}
        args={[length ?? 1, width ?? 1, 1]}
        sensor
        onIntersectionEnter={onEnter}
      />
    </RigidBody>
  );
}
