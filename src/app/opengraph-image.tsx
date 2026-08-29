import { ImageResponse } from "next/og";

export const alt = "Moisés Neto - Engenheiro de Software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background:
          "linear-gradient(135deg, #050508 0%, #0a0a14 55%, #10101c 100%)",
        color: "#f0f0f5",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 34,
          letterSpacing: 2,
          color: "#00d9ff",
          marginBottom: 24,
        }}
      >
        Δ
      </div>
      <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1 }}>
        Moisés Neto
      </div>
      <div style={{ fontSize: 42, color: "#00d9ff", marginTop: 24 }}>
        Engenheiro de Software · React · Next.js · Node.js
      </div>
      <div style={{ fontSize: 30, color: "#c0c0c8", marginTop: 28 }}>
        Do requisito à produção: interface, API, testes e deploy
      </div>
    </div>,
    { ...size },
  );
}
