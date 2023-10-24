// import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  RapierRigidBody,
  CollisionEnterPayload,
  RigidBody,
  CuboidCollider,
} from "@react-three/rapier";
import { useRef, useEffect } from "react";
import Levels from "../levels";

const BALL_SPEED = 25;

type Props = {
  onNewLevel: (newLevel: keyof typeof Levels) => void;
};

export default function Ball({ onNewLevel }: Props) {
  const ballRef = useRef<RapierRigidBody>(null);

  //   const textureProps = useTexture({
  //     map: "/assets/ball.png",
  //   });

  const onFinish = ({ other }: CollisionEnterPayload) => {
    console.log("FINISH");
    other.rigidBody?.setTranslation({ x: 0, y: 10, z: 0 }, true);
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

  // check if ball enter a new level (if it's Y position is greater than minY of a level)
  useFrame(() => {
    if (!ballRef.current) return;
    const currentTranslation = ballRef.current.translation();
    if (currentTranslation.y > 28) {
      console.log("enter new level");
      onNewLevel(2);
    }
  });

  return (
    <>
      <RigidBody
        name="ball"
        ref={ballRef}
        colliders="ball"
        mass={0}
        position={[0, 10, 0]}
        lockRotations={false}
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
