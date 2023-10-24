import { Wall } from "../components/Wall";
import { DestructibleWall } from "../components/Brick";
import { Door } from "../components/Door";
import { Background } from "../components/Background";
import Paddle from "../components/Paddle";
import { Collider } from "../components/Collider";

export default function Level2() {
  return (
    <group position={[0, 27.5, 0]}>
      <Collider
        position={[0, 2.5, 0]}
        length={6}
        width={0.5}
        onEnter={() => console.log("YEYEEY")}
      />

      <Paddle name="paddle-2" position={[0, 2.5, 0]} maxDrift={10} />
      {/* <Background isDark length={50} width={50} position={[0, 20, -5]} /> */}
      <Background length={26.1} width={20} position={[0, 10.4, -5]} />

      <Wall rotation={0} position={[-9, 0, 0]} />
      <Wall rotation={0} position={[9, 0, 0]} />

      <Wall rotation={-90} position={[-13.5, 4, 0]} />
      <Wall rotation={90} position={[13.5, 4, 0]} />
      <Wall rotation={-90} position={[-13.5, 12, 0]} />
      <Wall rotation={90} position={[13.5, 12, 0]} />

      {/* <DestructibleWall position={[-2.6, 13, 0]} />
      <DestructibleWall position={[0, 13, 0]} />
      <DestructibleWall position={[2.6, 13, 0]} />

      <DestructibleWall position={[-1.3, 15, 0]} />
      <DestructibleWall position={[1.3, 15, 0]} />

      <DestructibleWall position={[-2.6, 17, 0]} />
      <DestructibleWall position={[0, 17, 0]} />
      <DestructibleWall position={[2.6, 17, 0]} /> */}

      <Door position={[0, 28, 0]} />
    </group>
  );
}
