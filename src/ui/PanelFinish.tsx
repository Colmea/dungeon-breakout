import HudElement from "@/ui/HudElement";
import Panel from "./Panel";
import logoAsset from "@assets/logo.png";
import diamondAsset from "@assets/diamond.png";
import { useStore } from "@/store";

export default function PanelFinish() {
  const diamonds = useStore((state) => state.diamonds);

  return (
    <Panel>
      <div style={{ marginTop: -150 }}>
        <img src={logoAsset} style={{ width: 220 }} />
      </div>
      <div style={{ fontFamily: "Pixelify Sans", fontSize: "2rem" }}>
        GAME OVER
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <HudElement icon={diamondAsset} text={diamonds} />
      </div>
      <p style={{ fontSize: "0.8em", marginTop: 50 }}>
        Made by{" "}
        <a
          href="https://twitter.com/Colmeo"
          target="_blank"
          style={{ color: "#1C9BEF" }}
        >
          @Colmeo
        </a>{" "}
        for react-jam 2023
      </p>
    </Panel>
  );
}
