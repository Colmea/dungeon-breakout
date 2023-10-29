import { useStore } from "@/store";
import { Wall } from "@components/Wall";
import { Brick } from "@components/Brick";
import { Door } from "@components/Door";
import { Background } from "@components/Background";
import Paddle from "@components/Paddle";
import { Sensor } from "@/components/Sensor";
import { Diamond } from "@components/Diamond";
import { Spikes } from "@components/Spikes";

export default function Level1() {
  const setLevel = useStore((state) => state.setLevel);

  return (
    <group position={[0, 0, 0]}>
      <Sensor
        position={[0, 27, 0]}
        length={6}
        width={0.5}
        onEnter={() => {
          setLevel(1);
        }}
      />

      <Paddle
        name="paddle-1"
        position={[0, 0, 0]}
        maxDriftLeft={2}
        maxDriftRight={2}
      />
      <Background isDark length={50} width={250} position={[0, 50, -5]} />
      <Background length={10} width={39} position={[0, 9, -5]} />

      <Spikes position={[-3, -9.2, -0.5]} />
      <Spikes position={[0, -9.2, -0.5]} />
      <Spikes position={[3, -9.2, -0.5]} />

      <Wall rotation={0} position={[-1, -10.5, 0]} />
      <Wall rotation={0} position={[1, -10.5, 0]} />

      <Wall rotation={-90} position={[-5, 24, 0]} length={5} />
      <Wall rotation={90} position={[5, -8, 0]} length={5} />

      <Brick position={[-2.6, 13, 0]} />
      <Brick position={[0, 13, 0]} />
      <Brick position={[2.6, 13, 0]} />

      <Brick position={[-1.3, 15, 0]} />
      <Brick position={[1.3, 15, 0]} />

      <Brick position={[-2.6, 17, 0]} />
      <Brick position={[0, 17, 0]} />
      <Brick position={[2.6, 17, 0]} />

      <Diamond position={[-2.5, 20, 0]} />
      <Diamond position={[0, 20, 0]} />
      <Diamond position={[2.5, 20, 0]} />

      <Door position={[0, 27.5, 0]} />
    </group>
  );
}
