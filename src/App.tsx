import * as THREE from "three";
import {
  AccumulativeShadows,
  OrthographicCamera,
  RandomizedLight,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";

import Game from "./Game";

const App = () => {
  return (
    <div style={{ height: "800px", width: "800px", margin: "auto" }}>
      <Canvas shadows camera={{ position: [0, 20, 45], fov: 50 }}>
        <ambientLight intensity={0.8} />

        <OrthographicCamera makeDefault zoom={20} position={[0, 17, 3]} />
        <AccumulativeShadows
          temporal
          frames={200}
          color="purple"
          colorBlend={0.5}
          opacity={1}
          scale={10}
          alphaTest={0.85}
        >
          <RandomizedLight
            amount={8}
            radius={5}
            ambient={0.8}
            position={[5, 3, 2]}
            bias={0.001}
          />
        </AccumulativeShadows>

        {/* <Light /> */}
        {/* <spotLight position={[50, 50, -30]} castShadow /> */}
        {/* <pointLight position={[-10, -10, -10]} color="red" intensity={5} /> */}
        {/* <pointLight position={[0, -5, 5]} intensity={0.5} /> */}
        {/* <directionalLight position={[0, -5, 0]} color="white" intensity={0} /> */}

        <CameraControl />
        <Physics gravity={[0, 0, 0]}>
          <Game />
        </Physics>
      </Canvas>
    </div>
  );
};

function CameraControl() {
  const [vec] = useState(() => new THREE.Vector3());
  const { camera } = useThree();

  useEffect(() => {
    // camera.lookAt(CAMERA_LOOKAT);
  }, [camera]);

  // useFrame(() =>
  //   camera.position.lerp(vec.set(mouse.x * 2, camera.position.y, 60), 0.05)
  // );
  return null;
  // <CameraShake
  //   maxYaw={0.01}
  //   maxPitch={0.01}
  //   maxRoll={0.01}
  //   yawFrequency={0.5}
  //   pitchFrequency={0.5}
  //   rollFrequency={0.4}
  // />
}

function Light() {
  const ref = useRef<any>();
  useFrame((_) => {
    if (!ref.current) return;

    ref.current.rotation.x = _.clock.elapsedTime;
  });

  return (
    <group ref={ref}>
      <rectAreaLight
        width={15}
        height={100}
        position={[30, 30, -10]}
        intensity={5}
        onUpdate={(self) => self.lookAt(0, 0, 0)}
      />
    </group>
  );
}

export default App;
