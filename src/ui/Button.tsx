import { Image } from "./Button.style";
import buttonPlay from "@assets/ui/play-btn.png";

type Props = {
  onClick: () => void;
};

export default function Panel({ onClick }: Props) {
  return (
    <div onClick={onClick} style={{ display: "flex" }}>
      <Image src={buttonPlay} />
    </div>
  );
}
