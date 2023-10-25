import { Vector3 } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useState } from "react";
import Destructible from "@components/Destructible";
import { degToRad } from "@/utils";

export function Door({
  position,
  rotation,
}: {
  position: Vector3;
  rotation?: number;
  length?: number;
}) {
  const [isAlive, setIsAlive] = useState(true);

  const textureProps = useTexture({
    map: "/assets/door.png",
  });

  // textureProps.map.wrapS = textureProps.map.wrapT = THREE.RepeatWrapping;
  // textureProps.map.repeat.set(2, 1);

  return (
    <Destructible
      isAlive={isAlive}
      health={2}
      onDestruction={() => {
        setIsAlive(false);
      }}
    >
      {isAlive && (
        <mesh
          castShadow
          position={position}
          rotation={[0, 0, degToRad(rotation ?? 180)]}
        >
          <boxGeometry args={[8, 0.6]} />
          <meshPhongMaterial {...textureProps} opacity={0.9} transparent />
        </mesh>
      )}
    </Destructible>
  );
}
