import { useStore } from "@/store";
import { Wall } from "@components/Wall";
import { Door } from "@components/Door";
import { Background } from "@components/Background";
import Paddle from "@components/Paddle";
import { Sensor } from "@components/Sensor";
import { BrickLine } from "@components/BrickLine";
import { Platform } from "@components/Platform";
import { Fog } from "@components/Fog";

export default function Level2() {
  const currentLevel = useStore((state) => state.level);
  const setLevel = useStore((state) => state.setLevel);

  return (
    <group position={[0, 27.5, 0]}>
      {currentLevel < 2 && (
        <Fog length={28} width={24} position={[0, 12.4, 1]} />
      )}

      <Background length={26.1} width={25} position={[0, 12.7, -5]} />

      <Sensor
        position={[0, 2, 0]}
        length={6}
        width={0.5}
        onEnter={() => {
          setLevel(2);
        }}
      />
      <Sensor
        position={[0, 23, 0]}
        length={6}
        width={0.5}
        onEnter={() => {
          setLevel(2);
        }}
      />

      <Paddle name="paddle-2" position={[0, 2, 0]} maxDrift={10} />

      <Wall rotation={0} position={[-9, 0, 0]} />
      <Wall rotation={0} position={[9, 0, 0]} />

      <Wall rotation={-180} position={[-9, 24, 0]} />

      <Wall rotation={-180} position={[9, 24, 0]} />
      <Wall rotation={-90} position={[-13.5, 20, 0]} length={3} />
      <Wall rotation={90} position={[13.5, 4, 0]} length={3} />

      <Door position={[0, 23.9, 0]} />

      <BrickLine position={[-9, 10, 0]} quantity={8} />
      <BrickLine position={[-10.5, 12, 0]} quantity={9} />
      <BrickLine position={[-9, 14, 0]} quantity={8} />

      <Platform position={[-3.5, 20, 0]} rotation={180} />
    </group>
  );
}
