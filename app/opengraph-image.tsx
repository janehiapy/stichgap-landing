import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FFFFFF",
          color: "#013774",
          padding: 64,
          fontFamily: "Inter, Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", left: 0, top: 0, width: 280, height: 280, background: "#A8E6CF" }} />
        <div style={{ position: "absolute", left: 280, top: 0, width: 280, height: 280, background: "#0056FF" }} />
        <div style={{ position: "absolute", right: 0, top: 0, width: 280, height: 280, background: "#FB7D5D" }} />
        <div style={{ position: "absolute", left: 560, top: 140, width: 120, height: 120, borderRadius: 999, background: "#013774" }} />
        <div style={{ position: "absolute", left: 600, top: 180, width: 40, height: 40, borderRadius: 999, background: "#A8E6CF" }} />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, position: "relative", color: "#013774" }}>
          <span>StichGap</span>
          <span style={{ color: "#0056FF" }}>Coming soon</span>
        </div>
        <div style={{ fontSize: 92, lineHeight: 0.95, letterSpacing: -5, maxWidth: 920, position: "relative", color: "#013774" }}>
          Daily profit control for F&B owners.
        </div>
        <div style={{ color: "#0056FF", fontSize: 28, position: "relative" }}>
          AI-powered prime cost visibility and owner actions.
        </div>
      </div>
    ),
    size,
  );
}
