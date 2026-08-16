import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageIntro } from "@/components/PageIntro";
import { WorksGrid } from "@/components/WorksGrid";
import portfolio from "@/lib/portfolio-data";
import shared from "@/styles/shared.module.css";

export const metadata: Metadata = {
  title: `${portfolio.name} — Projects`,
  description: `All ${portfolio.projects.length} projects by ${portfolio.name}, spanning web and mobile products built end to end.`,
};

export default function WorksPage() {
  return (
    <>
      <Nav />
      <PageIntro eyebrow="All projects" heading="Projects, end to end" />
      <section className={shared.container}>
        <WorksGrid />
      </section>
      <Footer />
    </>
  );
}
