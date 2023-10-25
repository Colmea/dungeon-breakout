import { useStore } from "@/store";
import { Wall } from "@components/Wall";
import { Door } from "@components/Door";
import { Background } from "@components/Background";
import Paddle from "@components/Paddle";
import { Sensor } from "@components/Sensor";
import { BrickLine } from "@components/BrickLine";

export default function Level2() {
  const setLevel = useStore((state) => state.setLevel);

  return (
    <group position={[0, 52, 0]}>
      <Sensor
        position={[0, 3, 0]}
        length={6}
        width={0.5}
        onEnter={() => {
          setLevel(2);
        }}
      />

      <Paddle
        hasRotation
        name="paddle-2"
        position={[0, 2.5, 0]}
        maxDrift={10}
      />

      <Background length={26.1} width={23.5} position={[0, 12, -5]} />

      <Wall rotation={-180} position={[-9, 24, 0]} />

      <Wall rotation={-180} position={[9, 24, 0]} />

      <Door position={[0, 23.9, 0]} />

      <BrickLine position={[-9, 10, 0]} quantity={8} />
      <BrickLine position={[-10.5, 12, 0]} quantity={9} />
      <BrickLine position={[-9, 14, 0]} quantity={8} />
    </group>
  );
}
