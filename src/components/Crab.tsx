import {
  BallCollider,
  RapierRigidBody,
  RigidBody,
  interactionGroups,
} from "@react-three/rapier";
import { Box, useTexture } from "@react-three/drei";
import * as THREE from "three";

import CONFIG from "@/config";
import { degToRad } from "@/utils";
import { useRef, useState } from "react";
import useMover, { MoverProps } from "@/hooks/useMover";
import useDestructible from "@/hooks/useDestructible";

const clawMoveProps: Omit<MoverProps, "ref"> = {
  direction: "x",
  speed: 6,
  offset: 3,
};

export function Crab({ position }: { position: [number, number, number] }) {
  const refCrab = useRef<THREE.Group>(null);

  const [isBodyAlive, setIsBodyAlive] = useState(true);
  const refBody = useRef<RapierRigidBody>(null);
  const refBodyMesh = useRef<THREE.Mesh>(null);

  const [isLeftClawAlive, setIsLeftClawAlive] = useState(true);
  const refClawLeft = useRef<RapierRigidBody>(null);
  const refClawLeftMesh = useRef<THREE.Mesh>(null);

  const [isRightClawAlive, setRightClawAlive] = useState(true);
  const refClawRight = useRef<RapierRigidBody>(null);
  const refClawRightMesh = useRef<THREE.Mesh>(null);

  useMover({
    isEnabled: isBodyAlive,
    ref: refBody,
    direction: "y",
    speed: 15,
    offset: 1.5,
  });

  useMover({
    isEnabled: isLeftClawAlive,
    ref: refClawLeft,
    ...clawMoveProps,
  });

  useMover({
    isEnabled: isRightClawAlive,
    ref: refClawRight,
    delay: 0.6,
    ...clawMoveProps,
  });

  const { onCollide: onBodyCollide } = useDestructible({
    isEnabled: !isLeftClawAlive && !isRightClawAlive,
    meshRef: refBodyMesh,
    health: 3,
    onDestruction: () => {
      setIsBodyAlive(false);
    },
  });

  const { onCollide: onLeftClawCollide } = useDestructible({
    meshRef: refClawLeftMesh,
    health: CONFIG.BOSS_CLAW_HEALTH,
    onDestruction: () => {
      setIsLeftClawAlive(false);
    },
  });
  const { onCollide: onRightClawCollide } = useDestructible({
    meshRef: refClawRightMesh,
    health: CONFIG.BOSS_CLAW_HEALTH,
    onDestruction: () => {
      setRightClawAlive(false);
    },
  });

  const textureBody = useTexture({
    map: "/assets/crab-body.png",
  });
  const textureClawLeft = useTexture({
    map: "/assets/crab-claw-left.png",
  });
  const textureClawRight = useTexture({
    map: "/assets/crab-claw-right.png",
  });

  return (
    <group ref={refCrab} position={position} rotation={[degToRad(90), 0, 0]}>
      {isBodyAlive && (
        <RigidBody
          ref={refBody}
          colliders={false}
          type="fixed"
          friction={0}
          restitution={1}
        >
          <BallCollider
            args={[3.5]}
            collisionGroups={interactionGroups(6, [0])}
            onCollisionEnter={onBodyCollide}
          />
          <Box ref={refBodyMesh} args={[9, 2, 9]}>
            <meshPhongMaterial {...textureBody} opacity={1} transparent />
          </Box>
        </RigidBody>
      )}

      {isLeftClawAlive && (
        <RigidBody
          ref={refClawLeft}
          type="fixed"
          colliders={false}
          position={[-2.5, 0, 3]}
          friction={0}
          restitution={1}
        >
          <BallCollider
            args={[1.8]}
            collisionGroups={interactionGroups(6, [0])}
            onCollisionEnter={onLeftClawCollide}
          />
          <Box ref={refClawLeftMesh} args={[3.5, 2, 3.5]}>
            <meshPhongMaterial {...textureClawLeft} opacity={1} transparent />
          </Box>
        </RigidBody>
      )}

      {isRightClawAlive && (
        <RigidBody
          ref={refClawRight}
          type="fixed"
          colliders={false}
          position={[2.5, 0, 3]}
          friction={0}
          restitution={1}
        >
          <BallCollider
            args={[1.8]}
            collisionGroups={interactionGroups(6, [0])}
            onCollisionEnter={onRightClawCollide}
          />
          <Box ref={refClawRightMesh} args={[3.5, 2, 3.5]}>
            <meshPhongMaterial {...textureClawRight} opacity={1} transparent />
          </Box>
        </RigidBody>
      )}
    </group>
  );
}
