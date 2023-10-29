import {
  AccumulativeShadows,
  OrthographicCamera,
  RandomizedLight,
} from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { useEffect } from "react";
import useSound from "use-sound";

import CONFIG from "@/config";
import { useStore } from "@/store";
import Game from "@/Game";
import Hud from "@/ui/Hud";
import LEVELS from "@/levels";
import soundtrack from "@assets/soundtracks/soundtrack-001.mp3";
import soundtrackBoss from "@assets/soundtracks/soundtrack-boss.mp3";

const App = () => {
  const hasGameStarted = useStore((state) => state.started);
  const currentLevel = useStore((state) => state.level);
  const isBossLevel = LEVELS[currentLevel].isBossLevel;

  const [playSoundtrack, { sound: soundtrackSound }] = useSound(soundtrack, {
    volume: 0,
    loop: true,
  });
  const [playSoundtrackBoss, { sound: sountrackBossSound }] = useSound(
    soundtrackBoss,
    {
      volume: 0,
      loop: true,
    }
  );

  useEffect(() => {
    if (hasGameStarted && soundtrackSound) {
      playSoundtrack();
      playSoundtrackBoss();

      // console.log("soundtrack", soundtrackSound);
      // soundtrackSound.fade(0, 0.5, 1000);
    }
  }, [hasGameStarted, playSoundtrack, playSoundtrackBoss, soundtrackSound]);

  useEffect(() => {
    if (!soundtrackSound || !sountrackBossSound) return;

    if (isBossLevel) {
      soundtrackSound.fade(0.5, 0, 1000);
      sountrackBossSound.fade(0, 0.5, 1000);
    } else {
      soundtrackSound.fade(0, 0.5, 1000);
      sountrackBossSound.fade(0.5, 0, 1000);
    }
  }, [isBossLevel, soundtrackSound, sountrackBossSound]);

  return (
    <>
      <Hud />
      <div
        style={{
          position: "relative",
          height: "800px",
          width: "800px",
          margin: "auto",
        }}
      >
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

          <CameraControl />
          <Physics debug={CONFIG.DEBUG} gravity={[0, 0, 0]}>
            <Game />
          </Physics>
        </Canvas>
      </div>
    </>
  );
};

function CameraControl() {
  // const [vec] = useState(() => new THREE.Vector3());
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

export default App;
