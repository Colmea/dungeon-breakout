import { Wall } from "../components/Wall";
import { Brick } from "../components/Brick";
import { Door } from "../components/Door";
import { Background } from "../components/Background";
import Paddle from "../components/Paddle";

export default function Level1() {
  return (
    <group position={[0, 0, 0]}>
      <Paddle name="paddle-1" position={[0, 0, 0]} maxDrift={2} />
      <Background isDark length={50} width={150} position={[0, 20, -5]} />
      <Background length={10} width={38} position={[0, 9, -5]} />

      <Wall rotation={-90} position={[-5, -7, 0]} />
      <Wall rotation={-90} position={[-5, 1, 0]} />
      <Wall rotation={-90} position={[-5, 9, 0]} />
      <Wall rotation={-90} position={[-5, 16, 0]} />
      <Wall rotation={-90} position={[-5, 24, 0]} />

      <Wall rotation={90} position={[5, -7, 0]} />
      <Wall rotation={90} position={[5, 1, 0]} />
      <Wall rotation={90} position={[5, 9, 0]} />
      <Wall rotation={90} position={[5, 16, 0]} />
      <Wall rotation={90} position={[5, 24, 0]} />

      <Brick position={[-2.6, 13, 0]} />
      <Brick position={[0, 13, 0]} />
      <Brick position={[2.6, 13, 0]} />

      <Brick position={[-1.3, 15, 0]} />
      <Brick position={[1.3, 15, 0]} />

      <Brick position={[-2.6, 17, 0]} />
      <Brick position={[0, 17, 0]} />
      <Brick position={[2.6, 17, 0]} />

      <Door position={[0, 28, 0]} />
    </group>
  );
}
