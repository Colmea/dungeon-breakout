import { useFrame } from "@react-three/fiber";
import { Box, Torus } from "@react-three/drei";
import { useRef, useState } from "react";

import Destructible from "@components/Destructible";
import { degToRad } from "@/utils";
import useMeshMover from "@/hooks/useMeshMover";
import Outline from "@components/utils/Outline";

export function Key({
  position,
  onPickup,
}: {
  position: [number, number, number];
  onPickup?: () => void;
}) {
  const ref = useRef<THREE.Group>(null);
  const [isAlive, setIsAlive] = useState(true);

  useMeshMover({
    meshRef: ref,
    direction: "y",
    delay: 100,
  });

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <Destructible
      isAlive={isAlive}
      onDestruction={() => {
        setIsAlive(false);
        onPickup?.();
      }}
    >
      {isAlive && (
        <group
          ref={ref}
          scale={0.7}
          position={position}
          castShadow
          receiveShadow
        >
          <Torus
            args={[0.5, 0.2, 10, 8]}
            position={[0, 0, 0]}
            castShadow
            receiveShadow
          >
            <meshPhongMaterial color="orange" />
            <Outline />
          </Torus>
          <Box args={[0.2, 1.4, 0.3]} position={[0, -1.2, 0]} receiveShadow>
            <meshPhongMaterial color="orange" />
            <Outline />
          </Box>
          <Box
            args={[0.7, 0.3, 0.2]}
            position={[0.4, -1.1, 0]}
            rotation={[0, degToRad(0), 0]}
            receiveShadow
          >
            <meshPhongMaterial color="orange" />
            <Outline />
          </Box>
          <Box
            args={[0.7, 0.3, 0.2]}
            position={[0.4, -1.5, 0]}
            rotation={[0, degToRad(0), 0]}
            receiveShadow
          >
            <meshPhongMaterial color="orange" />
            <Outline />
          </Box>
        </group>
      )}
    </Destructible>
  );
}
