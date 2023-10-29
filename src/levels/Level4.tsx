import { useStore } from "@/store";
import { Wall } from "@components/Wall";
import { Sensor } from "@components/Sensor";
import { Fog } from "@components/Fog";
import { Background } from "@components/Background";

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
    </group>
  );
}
