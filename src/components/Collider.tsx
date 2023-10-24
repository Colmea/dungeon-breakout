import { Vector3 } from "@react-three/fiber";
import {
  CuboidCollider,
  IntersectionEnterPayload,
  RigidBody,
} from "@react-three/rapier";

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
        rotation={[0, 0, rotation ?? 0]}
        args={[length ?? 1, width ?? 1, 1]}
        sensor
        onIntersectionEnter={({ other }: IntersectionEnterPayload) => {
          if (other.rigidBody && other.rigidBodyObject?.name === "ball") {
            onEnter();
          }
        }}
      />
    </RigidBody>
  );
}
