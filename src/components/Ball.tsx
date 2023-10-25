// import { useTexture } from "@react-three/drei";
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

import ballHit from "@assets/sounds/ball-hit.mp3";

const BALL_SPEED = 12;
const BALL_SPAWN_POSITION = new THREE.Vector3(0, 10, 0);

export default function Ball() {
  const ballRef = useRef<RapierRigidBody>(null);

  const [playBallHit] = useSound(ballHit, {
    volume: 0.3,
  });

  //   const textureProps = useTexture({
  //     map: "/assets/ball.png",
  //   });

  const onFinish = ({ other }: CollisionEnterPayload) => {
    console.log("FINISH");
    other.rigidBody?.setTranslation(BALL_SPAWN_POSITION, true);
    other.rigidBody?.setLinvel({ x: 0, y: -BALL_SPEED, z: 0 }, true);
  };

  useEffect(() => {
    ballRef.current?.setLinvel({ x: 0, y: -BALL_SPEED, z: 0 }, true);
  }, []);

  // Move paddle with mouse
  useFrame(() => {
    if (!ballRef.current) return;
    const currentTranslation = ballRef.current.translation();
    currentTranslation.z = 0;
    ballRef.current.setTranslation(currentTranslation, true);
    // console.log("ballRer", ballRef.current.linvel());
    // ref.current.setRotation(
    //   quaternion.setFromEuler(euler.set(0, 0, (pointer.x * Math.PI) / 10)),
    //   true
    // );
  });

  return (
    <>
      <RigidBody
        name="ball"
        ref={ballRef}
        colliders="ball"
        mass={1}
        position={BALL_SPAWN_POSITION}
        lockRotations={false}
        friction={0}
        restitution={1}
        onCollisionEnter={() => playBallHit()}
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
