import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageIntro } from "@/components/PageIntro";
import { SkillsGrid } from "@/components/SkillsGrid";
import portfolio from "@/lib/portfolio-data";
import shared from "@/styles/shared.module.css";

export const metadata: Metadata = {
  title: `${portfolio.name} — Tools`,
  description: `The ${portfolio.skills.length} languages, frameworks, and tools ${portfolio.name} builds and designs with.`,
};

export default function ToolsPage() {
  return (
    <>
      <Nav />
      <PageIntro eyebrow="Skills & tools" heading="What I work with" />
      <section className={shared.container}>
        <SkillsGrid />
      </section>
      <Footer />
    </>
  );
}
