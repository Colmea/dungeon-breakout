import { useFrame } from "@react-three/fiber";
import {
  RapierRigidBody,
  CollisionEnterPayload,
  RigidBody,
  CuboidCollider,
} from "@react-three/rapier";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import useSound from "use-sound";

import CONFIG from "@/Config";
import ballHit from "@assets/sounds/ball-hit.mp3";

const ANGLE_LIMIT_RAD = (CONFIG.BALL_MAX_ANGLE * Math.PI) / 180;

export default function Ball() {
  const ballRef = useRef<RapierRigidBody>(null);

  const [playBallHit] = useSound(ballHit, {
    volume: 0.3,
  });

  const handleCollision = () => {
    playBallHit();

    if (ballRef.current) {
      const velocity = ballRef.current.linvel();
      const angleFromVertical = Math.atan2(
        Math.abs(velocity.x),
        Math.abs(velocity.y)
      ); // Calculate the angle from vertical

      // Determine the directions of the original velocities
      const verticalDirection = Math.sign(velocity.y);
      const horizontalDirection = Math.sign(velocity.x);

      // If angle is greater than ANGLE_LIMIT from vertical
      if (angleFromVertical > ANGLE_LIMIT_RAD) {
        const adjustedVelocity = new THREE.Vector3();

        // Adjust the velocity to ANGLE_LIMIT from vertical
        const xComponent = horizontalDirection * Math.tan(ANGLE_LIMIT_RAD);

        adjustedVelocity.set(xComponent, verticalDirection, 0);
        adjustedVelocity.normalize().multiplyScalar(CONFIG.BALL_SPEED); // Maintain the original speed
        ballRef.current.setLinvel(adjustedVelocity, true);
      }
    }
  };

  const onFinish = ({ other }: CollisionEnterPayload) => {
    console.log("FINISH");
    other.rigidBody?.setTranslation(CONFIG.BALL_INITIAL_POSITION, true);
    other.rigidBody?.setLinvel({ x: 0, y: -CONFIG.BALL_SPEED, z: 0 }, true);
  };

  // Start ball movement
  useEffect(() => {
    ballRef.current?.setLinvel({ x: 0, y: CONFIG.BALL_SPEED, z: 0 }, true);
  }, []);

  // Ensure ball stays on the same plane
  useFrame(() => {
    if (!ballRef.current) return;
    const currentTranslation = ballRef.current.translation();
    currentTranslation.z = 0;
    ballRef.current.setTranslation(currentTranslation, true);
  });

  return (
    <>
      <RigidBody
        name="ball"
        ref={ballRef}
        colliders="ball"
        mass={1}
        position={CONFIG.BALL_INITIAL_POSITION}
        lockRotations={false}
        friction={0}
        restitution={1}
        onCollisionEnter={handleCollision}
      >
        <mesh castShadow>
          <sphereGeometry args={[0.7, 16, 16]} />
          <meshStandardMaterial color="brown" opacity={0.8} transparent />
        </mesh>
      </RigidBody>
      <RigidBody
        name="floor"
        type="fixed"
        colliders={false}
        position={[0, -5, 0]}
        restitution={1}
        onCollisionEnter={onFinish}
      >
        <CuboidCollider args={[30, 2, 30]} />
      </RigidBody>
    </>
  );
}
