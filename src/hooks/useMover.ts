import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const useMover = (meshRef: React.MutableRefObject<THREE.Mesh | null>): void => {
  useFrame(({ clock }) => {
    if (!meshRef?.current) return;

    const t = clock.getElapsedTime();
    const y = Math.sin(t * 4) * 0.005;

    const newY = meshRef.current?.position.y + y;
    meshRef.current?.position.setY(newY);
  });
};

export default useMover;
