import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageIntro } from "@/components/PageIntro";
import { TestimonialsGrid } from "@/components/TestimonialsGrid";
import portfolio from "@/lib/portfolio-data";
import shared from "@/styles/shared.module.css";

const allTestimonials = [...portfolio.testimonials, ...portfolio.fillerTestimonials];

export const metadata: Metadata = {
  title: `${portfolio.name} — Testimonials`,
  description: `What ${allTestimonials.length} collaborators say about working with ${portfolio.name}.`,
};

export default function TestimonialsPage() {
  return (
    <>
      <Nav />
      <PageIntro eyebrow="Testimonials" heading="What people say" />
      <section className={shared.container}>
        <TestimonialsGrid />
      </section>
      <Footer />
    </>
  );
}
