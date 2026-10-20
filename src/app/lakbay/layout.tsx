import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { LakbayFooter } from "@/components/LakbayFooter";
import { lakbay } from "@/lib/lakbay";

export const metadata: Metadata = {
  metadataBase: new URL(lakbay.origin),
  robots: { index: true, follow: true },
  openGraph: {
    siteName: lakbay.name,
    type: "website",
    images: [{ url: lakbay.logo, width: 1500, height: 1500, alt: "Lakbay logo" }],
  },
};

export default function LakbayLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Nav />
      {children}
      <LakbayFooter />
    </>
  );
}
