import { useStore } from "@/store";
import { Wall } from "@components/Wall";
import { Door } from "@components/Door";
import { Background } from "@components/Background";
import Paddle from "@components/Paddle";
import { BrickLine } from "@components/BrickLine";
import { Key } from "@components/Key";

export default function Level2() {
  const hasKey = useStore((state) => state.hasKey);
  // const setLevel = useStore((state) => state.setLevel);
  const pickupKey = useStore((state) => state.pickupKey);

  return (
    <group position={[0, 52, 0]}>
      <Paddle position={[0, 2, 0]} maxDrift={18} />

      <Background length={35} width={24} position={[-4, 12, -5]} />
      <Background length={9} width={8} position={[-17, 28, -5]} />

      <Wall rotation={0} position={[-17, 0, 0]} length={2} />
      <Wall rotation={0} position={[9, 0, 0]} />

      <Wall rotation={-90} position={[-21.5, 28, 0]} length={4} />
      <Wall rotation={90} position={[13.5, 4, 0]} length={3} />

      <Wall rotation={-180} position={[-17, 32, 0]} />
      <Wall rotation={90} position={[-12.5, 28, 0]} />

      <Wall rotation={-180} position={[-9, 24, 0]} />
      <Wall rotation={-180} position={[9, 24, 0]} />

      <Door isLocked={!hasKey} position={[0, 23.8, 0]} />

      <BrickLine position={[-9, 10, 0]} quantity={8} />
      <BrickLine position={[-10.5, 12, 0]} quantity={9} />
      <BrickLine position={[-9, 14, 0]} quantity={8} />

      <Key position={[-17, 29, 0]} onPickup={pickupKey} />
    </group>
  );
}
