import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  CollisionEnterPayload,
  RapierRigidBody,
  RigidBody,
} from "@react-three/rapier";
import { useRef } from "react";
import * as THREE from "three";

const PADDLE_WIDTH = 4.8;
const PADDLE_VELICITY_ADJUSTMENT_FACTOR = 10;

type Props = {
  name: string;
  position: THREE.Vector3 | [number, number, number];
  maxDrift: number;
  hasRotation?: boolean;
};

export default function Paddle({
  name,
  position,
  maxDrift,
  hasRotation,
}: Props) {
  const ref = useRef<RapierRigidBody>(null);
  const quaternion = new THREE.Quaternion();
  const euler = new THREE.Euler();

  const textureProps = useTexture({
    map: "/assets/paddle.png",
  });

  useFrame(({ pointer, viewport }) => {
    if (!ref.current) return;

    const currentTranslation = ref.current.translation();
    let newX = (pointer.x * viewport.width) / 2;

    // ensure the paddle doesn't drift too far
    if (newX > maxDrift) {
      newX = maxDrift;
    } else if (newX < -maxDrift) {
      newX = -maxDrift;
    }

    ref.current.setTranslation(
      {
        x: newX,
        y: currentTranslation.y,
        z: currentTranslation.z,
      },
      true
    );

    if (hasRotation) {
      ref.current.setRotation(
        quaternion.setFromEuler(euler.set(0, 0, (pointer.x * Math.PI) / 10)),
        true
      );
    }
  });

  const onCollision = ({ other, target }: CollisionEnterPayload) => {
    // If the ball hits the paddle
    if (other.rigidBody && other.rigidBodyObject?.name === "ball") {
      // calculate the position of the ball relative to the paddle center
      const ballPosition = other.rigidBody?.translation();
      const paddlePosition = target.rigidBody?.translation();

      const ballVelocity = other.rigidBody?.linvel();

      if (ballPosition && paddlePosition && ballVelocity) {
        const relativeX = ballPosition.x - paddlePosition.x;

        const normalizedPosition = relativeX / (PADDLE_WIDTH / 2);

        // Adjust the x-component of the ball's velocity
        ballVelocity.x +=
          normalizedPosition * PADDLE_VELICITY_ADJUSTMENT_FACTOR;

        other.rigidBody.setLinvel(ballVelocity, true);
      }
    }
  };

  return (
    <RigidBody
      name={name}
      ref={ref}
      colliders="cuboid"
      onCollisionEnter={onCollision}
      type="fixed"
      restitution={2}
      friction={0}
      lockRotations={true}
    >
      <mesh castShadow position={position}>
        <boxGeometry args={[PADDLE_WIDTH, 1.6, 1]} />
        <meshStandardMaterial {...textureProps} transparent />
      </mesh>
    </RigidBody>
  );
}
