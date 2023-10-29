import { useFrame } from "@react-three/fiber";
import { RapierRigidBody, vec3 } from "@react-three/rapier";
import * as THREE from "three";

export type MoverProps = {
  isEnabled?: boolean;
  ref: React.MutableRefObject<RapierRigidBody | null>;
  direction: "x" | "y";
  speed?: number;
  offset?: number;
  delay?: number;
};

const useMover = ({
  isEnabled = true,
  ref,
  direction,
  speed = 3,
  offset = 1,
  delay = 0,
}: MoverProps): void => {
  useFrame(({ clock }) => {
    if (!ref?.current || !isEnabled) return;

    const t = clock.getElapsedTime() - delay;
    const position = vec3(ref.current.translation());

    if (direction === "x") {
      const x = Math.sin(t * speed) * 0.005 * offset;

      const newPosition = position.add(new THREE.Vector3(x, 0, 0));

      ref.current.setTranslation(newPosition, true);

      return;
    } else {
      const y = Math.sin(t * speed) * 0.005 * offset;

      const newPosition = position.add(new THREE.Vector3(0, y, 0));

      ref.current.setTranslation(newPosition, true);

      return;
    }
  });
};

export default useMover;
