import { Vector3 } from "@react-three/fiber";
import Destructible from "./Destructible";
import { useRef, useState } from "react";
import { useTexture } from "@react-three/drei";
import { degToRad } from "../utils";
import useMover from "../hooks/useMover";

export function DestructibleWall({
  position,
  rotation,
  length,
}: {
  position: Vector3;
  rotation?: number;
  length?: number;
}) {
  const [isAlive, setIsAlive] = useState(true);

  const textureProps = useTexture({
    map: "/assets/brick.png",
  });

  const ref = useRef<THREE.Mesh>(null);

  useMover(ref);

  return (
    <Destructible
      isAlive={isAlive}
      onDestruction={() => {
        setIsAlive(false);
      }}
    >
      {isAlive && (
        <mesh
          ref={ref}
          position={position}
          rotation={[0, 0, degToRad(rotation ?? 0)]}
        >
          <boxGeometry args={[length ?? 2.5, 1.8]} />
          <meshPhongMaterial {...textureProps} />
        </mesh>
      )}
    </Destructible>
  );
}
