import { Vector3 } from "@react-three/fiber";

export function Fog({
  position,
  length,
  width,
}: {
  position: Vector3;
  length?: number;
  width?: number;
}) {
  return (
    <mesh castShadow receiveShadow position={position}>
      <boxGeometry args={[length ?? 10, width ?? 10]} />
      <meshPhongMaterial color={"#33323d"} opacity={0.9} transparent />
    </mesh>
  );
}
