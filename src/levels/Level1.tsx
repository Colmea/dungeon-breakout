import { Wall } from "../components/Wall";
import { DestructibleWall } from "../components/Brick";
import { Door } from "../components/Door";
import { Background } from "../components/Background";
import Paddle from "../components/Paddle";
import { Collider } from "../components/Collider";

export default function Level1() {
  return (
    <group position={[0, 0, 0]}>
      <Paddle name="paddle-1" position={[0, 0, 0]} maxDrift={2} />
      <Background isDark length={50} width={50} position={[0, 20, -5]} />
      <Background length={10} width={32} position={[0, 12, -5]} />

      <Wall rotation={-90} position={[-5, 1, 0]} />
      <Wall rotation={-90} position={[-5, 9, 0]} />
      <Wall rotation={-90} position={[-5, 16, 0]} />
      <Wall rotation={-90} position={[-5, 24, 0]} />

      <Wall rotation={90} position={[5, 1, 0]} />
      <Wall rotation={90} position={[5, 9, 0]} />
      <Wall rotation={90} position={[5, 16, 0]} />
      <Wall rotation={90} position={[5, 24, 0]} />

      <DestructibleWall position={[-2.6, 13, 0]} />
      <DestructibleWall position={[0, 13, 0]} />
      <DestructibleWall position={[2.6, 13, 0]} />

      <DestructibleWall position={[-1.3, 15, 0]} />
      <DestructibleWall position={[1.3, 15, 0]} />

      <DestructibleWall position={[-2.6, 17, 0]} />
      <DestructibleWall position={[0, 17, 0]} />
      <DestructibleWall position={[2.6, 17, 0]} />

      <Door position={[0, 28, 0]} />
    </group>
  );
}
