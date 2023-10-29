import { useStore } from "@/store";
import { Wall } from "@components/Wall";
import { Background } from "@components/Background";
import Paddle from "@components/Paddle";
import { Crab } from "@components/Crab";
import { BrickLine } from "@components/BrickLine";
import { Sensor } from "@components/Sensor";

export default function Level5() {
  const setLevel = useStore((state) => state.setLevel);

  return (
    <group position={[0.5, 115.5, 0]}>
      <Sensor
        position={[0, 0, 0]}
        length={6}
        width={0.5}
        onEnter={() => {
          setLevel(5);
        }}
      />

      <Background length={34} width={32} position={[-4, 16, -1]} />

      <Paddle name="paddle-2" position={[0, 2, 0]} maxDrift={15} />

      <Wall rotation={0} position={[-18, 0, 0]} length={2} />
      <Wall rotation={0} position={[9, 0, 0]} length={1} />

      <Wall rotation={-90} position={[-21.5, 28, 0]} length={4} />
      <Wall rotation={90} position={[13, 4, 0]} length={4} />

      <Wall rotation={-180} position={[8.5, 32, 0]} length={4} />
      <Wall rotation={-180} position={[-17, 32, 0]} length={1} />

      <Crab position={[-4.5, 20, 0]} />

      <BrickLine position={[-17, 10, 0]} quantity={4} />
      <BrickLine position={[-18, 12, 0]} quantity={4} />

      <BrickLine position={[-4.2, 10.5, 0]} />
      <BrickLine position={[-6, 13, 0]} />
      <BrickLine position={[-2.5, 13, 0]} />

      <BrickLine position={[0, 10, 0]} quantity={4} />
      <BrickLine position={[2, 12, 0]} quantity={4} />

      <BrickLine position={[-17, 27, 0]} quantity={4} />
      <BrickLine position={[-18, 25, 0]} quantity={4} />

      <BrickLine position={[0, 27, 0]} quantity={4} />
      <BrickLine position={[2, 25, 0]} quantity={4} />
    </group>
  );
}
