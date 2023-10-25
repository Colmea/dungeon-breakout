import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type Props = {
  meshRef: React.MutableRefObject<THREE.Mesh | null>;
  direction: "x" | "y";
  speed?: number;
  offset?: number;
};

const useMover = ({
  meshRef,
  direction,
  speed = 3,
  offset = 1,
}: Props): void => {
  useFrame(({ clock }) => {
    if (!meshRef?.current) return;

    const t = clock.getElapsedTime();

    if (direction === "x") {
      const x = Math.sin(t * speed) * 0.005 * offset;
      const newX = meshRef.current?.position.x + x;
      meshRef.current?.position.setX(newX);

      return;
    } else {
      const y = Math.sin(t * speed) * 0.005 * offset;

      const newY = meshRef.current?.position.y + y;
      meshRef.current?.position.setY(newY);

      return;
    }
  });
};

export default useMover;
