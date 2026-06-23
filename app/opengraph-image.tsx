import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Clean Home Pros LLC - Professional residential cleaning";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(weight: 500 | 700): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@${weight}`;
  const css = await (
    await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0 Safari/537.36",
      },
    })
  ).text();
  const src = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype)'\)/);
  if (!src) throw new Error("Failed to parse Google Font CSS");
  return fetch(src[1]).then((r) => r.arrayBuffer());
}

export default async function Image() {
  const [regular, bold] = await Promise.all([loadFont(500), loadFont(700)]);

  const navy = "#012D63";
  const teal = "#047A95";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: navy,
          color: "#ffffff",
          padding: "72px 80px",
          fontFamily: "Jakarta",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              backgroundColor: teal,
              borderRadius: 999,
              padding: "14px 28px",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            CLEAN HOME PROS LLC
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            A Clean Home, Is A Happy Home.
          </div>

          <div
            style={{
              display: "flex",
              width: 140,
              height: 10,
              backgroundColor: teal,
              borderRadius: 6,
              marginTop: 32,
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 30,
            fontWeight: 500,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          <div style={{ display: "flex" }}>
            Professional residential cleaning
          </div>
          <div style={{ display: "flex" }}>
            Sugar Land, Missouri City, Richmond, Cinco Ranch, Katy, Bellaire,
            &middot; West University
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Jakarta", data: regular, weight: 500, style: "normal" },
        { name: "Jakarta", data: regular, weight: 700, style: "normal" },
      ],
    }
  );
}
