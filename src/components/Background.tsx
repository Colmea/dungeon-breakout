import { Vector3 } from "@react-three/fiber";

export function Background({
  position,
  length,
  width,
  isDark,
}: {
  position: Vector3;
  rotation?: number;
  length?: number;
  width?: number;
  isDark?: boolean;
}) {
  return (
    <mesh castShadow position={position}>
      <boxGeometry args={[length ?? 10, width ?? 10]} />
      <meshPhongMaterial
        color={isDark ? "#33323d" : "#f5f5f5"}
        opacity={1}
        transparent
      />
    </mesh>
  );
}
