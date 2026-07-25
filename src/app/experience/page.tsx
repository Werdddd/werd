import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageIntro } from "@/components/PageIntro";
import { ExperienceList } from "@/components/ExperienceList";
import portfolio from "@/lib/portfolio-data";
import shared from "@/styles/shared.module.css";

export const metadata: Metadata = {
  title: `${portfolio.name} — Experience`,
  description: `The full work history of ${portfolio.name} across ${portfolio.experience.length} roles in full-stack development and UI/UX design.`,
};

export default function ExperiencePage() {
  return (
    <>
      <Nav />
      <PageIntro eyebrow="Experience" heading="Where I've worked" />
      <section className={shared.container}>
        <ExperienceList />
      </section>
      <Footer />
    </>
  );
}
