import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { ScrollReveal } from "@/components/ScrollReveal";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "Andrew Emmanuel Robles — Software Engineer & UI/UX Designer",
  description:
    "Portfolio of Andrew Emmanuel Robles: software engineer and UI/UX designer building considered, precise interfaces and the systems underneath them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body>
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
