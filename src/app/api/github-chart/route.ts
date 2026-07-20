import { NextResponse } from "next/server";

export const revalidate = 3600;

const GITHUB_USERNAME = "Werdddd";
const ACCENT_COLOR = "5980a6";

export async function GET() {
  const res = await fetch(`https://ghchart.rshah.org/${ACCENT_COLOR}/${GITHUB_USERNAME}`, {
    next: { revalidate },
  });

  if (!res.ok) {
    return new NextResponse(null, { status: 502 });
  }

  const raw = await res.text();
  const noLabels = raw.replace(/<text[^>]*>[^<]*<\/text>/g, "");

  const rectPattern = /<rect[^>]*\sx="([\d.]+)"\s+y="([\d.]+)"\s+width="([\d.]+)"\s+height="([\d.]+)"/g;
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  for (const match of noLabels.matchAll(rectPattern)) {
    const [, x, y, w, h] = match;
    minX = Math.min(minX, parseFloat(x));
    minY = Math.min(minY, parseFloat(y));
    maxX = Math.max(maxX, parseFloat(x) + parseFloat(w));
    maxY = Math.max(maxY, parseFloat(y) + parseFloat(h));
  }

  let cropped = noLabels;
  if (Number.isFinite(minX) && Number.isFinite(minY)) {
    const padding = 2;
    const viewBox = `${minX - padding} ${minY - padding} ${maxX - minX + padding * 2} ${
      maxY - minY + padding * 2
    }`;
    cropped = noLabels.replace(
      /<svg[^>]*>/,
      `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" preserveAspectRatio="xMidYMid meet">`
    );
  }

  return new NextResponse(cropped, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
