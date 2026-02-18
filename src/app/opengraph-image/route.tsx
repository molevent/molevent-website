import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#000000",
          padding: "60px",
          fontFamily: "Inter, sans-serif",
          position: "relative",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundSize: "40px 40px",
            backgroundImage:
              "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
            display: "flex",
          }}
        />

        {/* Top section */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", zIndex: 1 }}>
          <div
            style={{
              width: "16px",
              height: "16px",
              backgroundColor: "#dc2626",
              display: "flex",
            }}
          />
          <span
            style={{
              color: "#ffffff",
              fontSize: "24px",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              textTransform: "uppercase" as const,
            }}
          >
            MOLEVENT.TECH
          </span>
          <span
            style={{
              color: "#666666",
              fontSize: "14px",
              fontFamily: "monospace",
              letterSpacing: "0.1em",
              marginLeft: "12px",
            }}
          >
            SYSTEM.ARCHITECTURE.INTERFACE
          </span>
        </div>

        {/* Center - Main text */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0px", zIndex: 1 }}>
          <span
            style={{
              color: "#ffffff",
              fontSize: "96px",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: "0.9",
            }}
          >
            SYSTEM.
          </span>
          <span
            style={{
              color: "#ffffff",
              fontSize: "96px",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: "0.9",
              paddingLeft: "80px",
            }}
          >
            ARCHITECTURE.
          </span>
          <span
            style={{
              color: "#ffffff",
              fontSize: "96px",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: "0.9",
              paddingLeft: "160px",
            }}
          >
            INTERFACE.
          </span>
        </div>

        {/* Bottom section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #333",
            paddingTop: "20px",
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: "#28af60",
                display: "flex",
              }}
            />
            <span
              style={{
                color: "#666",
                fontSize: "14px",
                fontFamily: "monospace",
                letterSpacing: "0.1em",
              }}
            >
              EST. 2026 // CHIANG MAI, THAILAND
            </span>
          </div>
          <span
            style={{
              color: "#28af60",
              fontSize: "14px",
              fontFamily: "monospace",
              letterSpacing: "0.1em",
            }}
          >
            ALL SYSTEMS ONLINE
          </span>
        </div>

        {/* Green accent line at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            backgroundColor: "#28af60",
            display: "flex",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
