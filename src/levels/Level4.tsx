import { useStore } from "@/store";
import { Wall } from "@components/Wall";
import { Sensor } from "@components/Sensor";
import { Fog } from "@components/Fog";
import { Background } from "@components/Background";
import { Diamond } from "@components/Diamond";

export default function Level4() {
  const currentLevel = useStore((state) => state.level);

  const setLevel = useStore((state) => state.setLevel);

  return (
    <group position={[0, 77, 0]}>
      {currentLevel < 4 && (
        <Fog length={13} width={40} position={[0, 19.5, 1]} />
      )}

      <Sensor
        position={[0, 0, 0]}
        length={6}
        width={0.5}
        onEnter={() => {
          setLevel(4);
        }}
      />
      <Sensor
        position={[0, 37, 0]}
        length={6}
        width={0.5}
        onEnter={() => {
          setLevel(4);
        }}
      />

      <Background length={11} width={40} position={[0, 19, -5]} />

      <Wall rotation={-90} position={[-5.5, 35, 0]} length={5} />
      <Wall rotation={90} position={[5.5, 3, 0]} length={5} />

      <Diamond position={[-4, 10, 0]} />
      <Diamond position={[-2, 12, 0]} />
      <Diamond position={[0, 14, 0]} />
      <Diamond position={[2, 16, 0]} />
      <Diamond position={[4, 18, 0]} />

      <Diamond position={[2, 20, 0]} />
      <Diamond position={[0, 22, 0]} />
      <Diamond position={[-2, 24, 0]} />
      <Diamond position={[-4, 26, 0]} />

      <Diamond position={[-2, 28, 0]} />
      <Diamond position={[0, 30, 0]} />
      <Diamond position={[2, 32, 0]} />
      <Diamond position={[4, 34, 0]} />
    </group>
  );
}
