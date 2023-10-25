import {
  CollisionEnterPayload,
  RapierRigidBody,
  RigidBody,
} from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";

type DestructibleProps = {
  children: React.ReactNode;
  isAlive: boolean;
  health?: number;
  onDestruction: () => void;
  onHit?: () => void;
};

const Destructible = ({
  children,
  isAlive,
  health,
  onDestruction,
  onHit,
}: DestructibleProps) => {
  const ref = useRef<RapierRigidBody>(null);
  const [currentHealth, setCurrentHealth] = useState(health ?? 1);

  // Handle collisions
  const handleCollision = ({ other }: CollisionEnterPayload) => {
    if (other.rigidBodyObject?.name === "ball") {
      setCurrentHealth((prev) => prev - 1);

      onHit?.();
    }
  };

  // Handle destruction
  useEffect(() => {
    if (currentHealth <= 0) {
      setTimeout(() => {
        onDestruction();
      }, 50);
    }
  });

  if (!isAlive) return null;

  return (
    <RigidBody
      ref={ref}
      args={[0, 0]}
      position={[0, 0, 0]}
      //   angularDamping={0.5}
      type="fixed"
      onCollisionEnter={handleCollision}
      colliders="cuboid"
      restitution={1}
      friction={0}
      lockRotations={false}
    >
      {children}
    </RigidBody>
  );
};

export default Destructible;
