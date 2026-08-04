import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageIntro } from "@/components/PageIntro";
import { Corners } from "@/components/Blueprint";
import portfolio from "@/lib/portfolio-data";
import shared from "@/styles/shared.module.css";
import styles from "./testimonials.module.css";

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
        <div className={styles.grid}>
          {allTestimonials.map((testimonial) => (
            <div key={testimonial.name} className={`blueprint ${styles.card}`}>
              <Corners />
              <p className={styles.quote}>&quot;{testimonial.quote}&quot;</p>
              <div>
                <div className={styles.name}>{testimonial.name}</div>
                <div className={`text-muted ${styles.role}`}>{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
