import { useFrame } from "@react-three/fiber";
import { CollisionEnterPayload } from "@react-three/rapier";
import { useEffect, useState } from "react";
import * as THREE from "three";
import useSound from "use-sound";

import stabFx from "@assets/sounds/door-destruct.mp3";

type Options = {
  isEnabled?: boolean;
  meshRef: React.MutableRefObject<THREE.Mesh | null>;
  health?: number;
  onHit?: () => void;
  onDestruction?: () => void;
};

const useDestructible = ({
  isEnabled = true,
  meshRef,
  health = 1,
  onHit,
  onDestruction,
}: Options) => {
  const [isHit, setIsHit] = useState(false);
  const [currentHealth, setCurrentHealth] = useState(health);

  const [playStabFx] = useSound(stabFx, {
    volume: 1,
  });

  const onCollide = ({ other }: CollisionEnterPayload) => {
    if (isEnabled && other.rigidBodyObject?.name === "ball") {
      playStabFx();

      setCurrentHealth((prev) => prev - 1);
      setIsHit(true);
      onHit?.();
    }
  };

  useEffect(() => {
    if (isHit) {
      setTimeout(() => {
        setIsHit(false);
      }, 150);
    }
  }, [isHit]);

  // Handle destruction
  useEffect(() => {
    if (currentHealth <= 0) {
      setTimeout(() => {
        onDestruction?.();
      }, 50);
    }
  });

  useFrame(() => {
    if (!meshRef.current) return;

    const material = meshRef.current.material as THREE.MeshPhongMaterial;

    material.emissive.lerp(new THREE.Color(isHit ? 0xffffff : 0x000000), 0.1);
  });

  return {
    onCollide,
  };
};

export default useDestructible;
