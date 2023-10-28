import panelBg from "@assets/ui/panel-bg.png";

export default function Panel({ children }) {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundImage: `url(${panelBg})`,
        backgroundSize: "cover",
        width: 300,
        height: 300,
        padding: 70,
        color: "black",
        fontSize: "0.8rem",
      }}
    >
      <div style={{ padding: "0 20px" }}>{children}</div>
    </div>
  );
}
