import { useEffect, useState } from "react";
import { HudElementContainer, Icon } from "./HudElement.style";

type Props = {
  text: string | number;
  icon?: string;
  iconSize?: number;
};

export default function HudElement({ text, icon, iconSize }: Props) {
  const [blink, setBlink] = useState<boolean>(false);

  useEffect(() => {
    setBlink(true);
  }, [text]);

  return (
    <HudElementContainer $blink={blink} onAnimationEnd={() => setBlink(false)}>
      {icon && <Icon src={icon} $blink={blink} $size={iconSize} />}
      {text}
    </HudElementContainer>
  );
}
