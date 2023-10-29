import { useStore } from "@/store";
import { Wall } from "@components/Wall";
import { Door } from "@components/Door";
import { Background } from "@components/Background";
import Paddle from "@components/Paddle";
import { BrickLine } from "@components/BrickLine";
import { Key } from "@components/Key";
import { Platform } from "@components/Platform";
import { Button } from "@components/Button";
import { useState } from "react";
import { Sensor } from "@/components/Sensor";
import { Diamond } from "@components/Diamond";

export default function Level3() {
  const hasKey = useStore((state) => state.hasKey);

  const setLevel = useStore((state) => state.setLevel);
  const pickupKey = useStore((state) => state.pickupKey);

  const [isDoorOpen, setIsDoorOpen] = useState(false);

  return (
    <group position={[0, 52, 0]}>
      <Sensor
        position={[0, 2, 0]}
        length={6}
        width={0.5}
        onEnter={() => {
          setLevel(3);
        }}
      />
      <Sensor
        position={[0, 23, 0]}
        length={6}
        width={0.5}
        onEnter={() => {
          setLevel(3);
        }}
      />

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

      <BrickLine position={[-19.5, 14, 0]} quantity={5} />
      <BrickLine position={[-16, 16, 0]} quantity={5} />
      <BrickLine position={[-19.5, 18, 0]} quantity={5} />

      <BrickLine position={[0.5, 14, 0]} quantity={5} />
      <BrickLine position={[-3, 16, 0]} quantity={5} />
      <BrickLine position={[0.5, 18, 0]} quantity={5} />

      {!isDoorOpen && (
        <Platform
          position={[-17, 23.8, 0]}
          length={8}
          rotation={180}
          offset={0}
        />
      )}

      <Button
        onPress={() => setIsDoorOpen(true)}
        rotation={180}
        position={[-11.5, 23, 0]}
      />
      <Key position={[-17, 29, 0]} onPickup={pickupKey} />

      <Diamond position={[-19.5, 16.2, 0]} />
      <Diamond position={[10.5, 16.2, 0]} />

      <Diamond position={[-6.5, 13.5, 0]} />
      <Diamond position={[-4.5, 13.5, 0]} />
      <Diamond position={[-2.5, 13.5, 0]} />
      <Diamond position={[-6.5, 18.5, 0]} />
      <Diamond position={[-4.5, 18.5, 0]} />
      <Diamond position={[-2.5, 18.5, 0]} />

      <Diamond position={[-20, 30.5, 0]} />
      <Diamond position={[-14, 30.5, 0]} />
    </group>
  );
}
