import Panel from "./Panel";
import logo from "@assets/logo.png";

export default function PanelStart() {
  return (
    <Panel>
      <div style={{ marginTop: -150 }}>
        <img src={logo} style={{ width: 220 }} />
      </div>

      <p
        style={{
          backgroundColor: "rgba(206, 117, 0, 0.1)",
          borderRadius: 5,
          padding: 3,
        }}
      >
        <strong>Move</strong> the paddle with your <strong>mouse</strong> to
        break the bricks
      </p>
      <p
        style={{
          backgroundColor: "rgba(206, 117, 0, 0.1)",
          borderRadius: 5,
          padding: 3,
        }}
      >
        Watch out for <strong>wooden stakes</strong>
      </p>

      <p style={{ fontSize: "0.8em", marginTop: 60 }}>
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
