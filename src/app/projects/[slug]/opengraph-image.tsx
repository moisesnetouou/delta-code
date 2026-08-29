import { ImageResponse } from "next/og";
import { caseStudyProjects } from "@/data/projects";
import { dictionaries } from "@/i18n/dictionary";

export const alt = "Case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({ slug: project.id }));
}

interface OpengraphImageProps {
  params: Promise<{ slug: string }>;
}

export default async function OpengraphImage({ params }: OpengraphImageProps) {
  const { slug } = await params;
  const project = caseStudyProjects.find((item) => item.id === slug);
  const copy = dictionaries.pt.projects.items[slug];

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px",
        background:
          "linear-gradient(135deg, #050508 0%, #0a0a14 55%, #10101c 100%)",
        color: "#f0f0f5",
        fontFamily: "sans-serif",
        borderTop: `10px solid ${project?.accent ?? "#00d9ff"}`,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 30, letterSpacing: 4, color: "#c0c0c8" }}>
          {dictionaries.pt.projects.heading.toUpperCase()}
        </div>
        <div
          style={{
            fontSize: 92,
            fontWeight: 700,
            lineHeight: 1,
            marginTop: 28,
          }}
        >
          {copy?.title ?? slug}
        </div>
        <div style={{ fontSize: 40, color: "#00d9ff", marginTop: 28 }}>
          {copy?.tagline ?? ""}
        </div>
      </div>

      <div style={{ display: "flex", fontSize: 28, color: "#c0c0c8" }}>
        <span>Moisés Neto</span>
        <span style={{ margin: "0 16px", color: "#00d9ff" }}>Δ</span>
        <span>{project?.technologies.slice(0, 4).join(" · ") ?? ""}</span>
      </div>
    </div>,
    { ...size },
  );
}
