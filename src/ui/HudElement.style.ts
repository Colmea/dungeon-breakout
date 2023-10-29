import styled from "styled-components";

import bgHud from "@assets/ui/bg-hud.png";

export const HudElementContainer = styled.div<{ $blink?: boolean }>`
  position: relative;
  margin-top: 5px;
  width: 70px;
  height: 68px;
  background-size: cover;
  background-image: url(${bgHud});
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-family: Pixelify Sans;
  color: rgba(255, 255, 255, 0.7);
  animation: ${({ $blink }) => ($blink ? "blink 1s linear" : "none")};

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Icon = styled.img<{ $blink?: boolean; $size?: number }>`
  position: absolute;
  width: ${({ $size }) => ($size ? `${$size}px` : "40px")};
  top: -10px;
  animation: ${({ $blink }) => ($blink ? `iconBlink 0.3s linear` : "none")};

  @keyframes iconBlink {
    0% {
      width: 40px;
    }
    50% {
      width: 70px;
    }
    100% {
      width: 40px;
    }
  }
`;
