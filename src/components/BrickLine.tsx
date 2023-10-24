import { Brick } from "./Brick";

export function BrickLine({
  position,
  rotation,
  quantity,
}: {
  position: [number, number, number];
  rotation?: number;
  quantity?: number;
}) {
  return (
    <>
      {Array.from({ length: quantity ?? 1 }).map((_, index) => {
        return (
          <Brick
            key={index}
            position={[position[0] + index * 2.6, position[1], position[2]]}
            rotation={rotation}
          />
        );
      })}
    </>
  );
}
