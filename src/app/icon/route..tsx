import { ImageResponse } from "next/og";

export const runtime = "edge"; // Ensures it runs on the Edge for faster performance

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

// Image generation API Route
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          border: "2px solid #0055A5",
          color: "#C8090F",
          fontWeight: "bold",
        }}
      >
        A
      </div>
    ),
    {
      width: size.width,
      height: size.height,
    }
  );
}
