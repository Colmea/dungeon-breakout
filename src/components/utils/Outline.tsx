import { Outlines } from "@react-three/drei";

export default function Outline() {
  return (
    <Outlines
      thickness={3}
      angle={0}
      color="black"
      screenspace={true}
      opacity={1}
      transparent={false}
    />
  );
}
