import { useStore } from "@/store";
import { Wall } from "@components/Wall";
import { Background } from "@components/Background";
import Paddle from "@components/Paddle";
import { Crab } from "@components/Crab";
import { BrickLine } from "@components/BrickLine";
import { Sensor } from "@components/Sensor";
import { Diamond } from "@components/Diamond";
import { Spikes } from "@components/Spikes";

export default function Level5() {
  const currentLevel = useStore((state) => state.level);
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

      <Paddle
        name="paddle-2"
        position={[0, currentLevel === 5 ? 3 : 2, 0]}
        maxDriftLeft={18}
        maxDriftRight={10.5}
      />

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

      <Diamond position={[-11, 16, 0]} />
      <Diamond position={[-13, 18, 0]} />
      <Diamond position={[2, 16, 0]} />
      <Diamond position={[4, 18, 0]} />

      <Diamond position={[-19.5, 30, 0]} />
      <Diamond position={[11, 30, 0]} />

      <Diamond position={[-19.5, 22, 0]} />
      <Diamond position={[-19.5, 20, 0]} />
      <Diamond position={[-19.5, 18, 0]} />
      <Diamond position={[11, 22, 0]} />
      <Diamond position={[11, 20, 0]} />
      <Diamond position={[11, 18, 0]} />

      <Spikes position={[-18, 1.3, -0.5]} />
      <Spikes position={[-14.5, 1.3, -0.5]} />
      <Spikes position={[-11, 1.3, -0.5]} />
      <Spikes position={[-7.5, 1.3, -0.5]} />
      <Spikes position={[7, 1.3, -0.5]} />
      <Spikes position={[10.5, 1.3, -0.5]} />

      <Spikes position={[-19, 30.7, -0.5]} rotation={180} />
      <Spikes position={[-15.5, 30.7, -0.5]} rotation={180} />
      <Spikes position={[10, 30.7, -0.5]} rotation={180} />
      <Spikes position={[6.5, 30.7, -0.5]} rotation={180} />
    </group>
  );
}
