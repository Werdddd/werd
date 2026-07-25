import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageIntro } from "@/components/PageIntro";
import { HackathonsList } from "@/components/HackathonsList";
import portfolio from "@/lib/portfolio-data";
import shared from "@/styles/shared.module.css";

export const metadata: Metadata = {
  title: `${portfolio.name} — Hackathons`,
  description: `${portfolio.hackathons.length} hackathon finishes by ${portfolio.name}, including champion and runner-up placements.`,
};

export default function HackathonsPage() {
  return (
    <>
      <Nav />
      <PageIntro eyebrow="Hackathons" heading="Podium finishes" />
      <section className={shared.container}>
        <HackathonsList />
      </section>
      <Footer />
    </>
  );
}
