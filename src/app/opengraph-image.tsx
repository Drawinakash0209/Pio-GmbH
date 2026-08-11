import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getAllContent } from "@/lib/db";

export const alt = "Pio GmbH — International Expertise. German Reliability.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [qalisso, bloved, content] = await Promise.all([
    readFile(join(process.cwd(), "src/app/fonts/Qalisso.otf")),
    readFile(join(process.cwd(), "src/app/fonts/Bloved.ttf")),
    getAllContent(),
  ]);

  const badge = content["nav.tagline"] ?? "Mülheim · Germany";
  const accent = content["footer.tagline"] ?? "Engineered for Excellence.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 96px",
          background: "#141616",
          backgroundImage:
            "linear-gradient(to right, rgba(202,243,0,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(202,243,0,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            padding: "10px 24px",
            borderRadius: 999,
            background: "#1a1c1c",
            marginBottom: 40,
          }}
        >
          <span style={{ fontFamily: "Qalisso", fontSize: 22, color: "#caf300" }}>{badge}</span>
        </div>
        <div style={{ display: "flex", fontFamily: "Qalisso", fontSize: 104, color: "#f5f5f5", lineHeight: 1.05 }}>
          Pio GmbH
        </div>
        <div style={{ display: "flex", fontFamily: "Bloved", fontSize: 56, color: "#caf300", marginTop: 20 }}>
          {accent}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Qalisso", data: qalisso, style: "normal" },
        { name: "Bloved", data: bloved, style: "normal" },
      ],
    }
  );
}
