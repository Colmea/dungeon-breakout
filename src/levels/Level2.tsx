import { Wall } from "../components/Wall";
import { Door } from "../components/Door";
import { Background } from "../components/Background";
import Paddle from "../components/Paddle";
import { Collider } from "../components/Collider";
import { useStore } from "../store";
import { Brick } from "../components/Brick";

export default function Level2() {
  const setLevel = useStore((state) => state.setLevel);

  return (
    <group position={[0, 27.5, 0]}>
      <Collider
        position={[0, 3, 0]}
        length={6}
        width={0.5}
        onEnter={() => {
          setLevel(2);
        }}
      />

      <Paddle name="paddle-2" position={[0, 2.5, 0]} maxDrift={10} />

      <Background length={26.1} width={24} position={[0, 11.8, -5]} />

      <Wall rotation={0} position={[-9, 0, 0]} />
      <Wall rotation={0} position={[9, 0, 0]} />

      <Wall rotation={-90} position={[-13.5, 4, 0]} />
      <Wall rotation={90} position={[13.5, 4, 0]} />
      <Wall rotation={-90} position={[-13.5, 12, 0]} />
      <Wall rotation={90} position={[13.5, 12, 0]} />
      <Wall rotation={-90} position={[-13.5, 20, 0]} />
      <Wall rotation={90} position={[13.5, 20, 0]} />

      <Wall rotation={-180} position={[-9, 24, 0]} />

      <Wall rotation={-180} position={[9, 24, 0]} />

      <Door position={[0, 23.9, 0]} />

      <Brick position={[-2.6, 13, 0]} />
      <Brick position={[0, 13, 0]} />
      <Brick position={[2.6, 13, 0]} />

      <Brick position={[-1.3, 15, 0]} />
      <Brick position={[1.3, 15, 0]} />

      <Brick position={[-2.6, 17, 0]} />
      <Brick position={[0, 17, 0]} />
      <Brick position={[2.6, 17, 0]} />
    </group>
  );
}
