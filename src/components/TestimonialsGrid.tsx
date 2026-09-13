"use client";

import { motion } from "motion/react";
import { Corners } from "@/components/Blueprint";
import { fadeUp, staggerContainer, revealViewport } from "@/lib/motion";
import { useTiltParallax } from "@/lib/tilt";
import portfolio, { type Testimonial } from "@/lib/portfolio-data";
import styles from "@/app/testimonials/testimonials.module.css";

const allTestimonials = [...portfolio.testimonials, ...portfolio.fillerTestimonials];

// Pulled out so useTiltParallax (a hook) has a proper per-item component
// to live in — calling hooks inside allTestimonials.map() below would
// violate the rules of hooks.
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  // fadeUp owns y/opacity on this element, so only x/rotate are used here.
  const { x, rotateX, rotateY } = useTiltParallax(14, 2.5);

  return (
    <motion.div
      variants={fadeUp}
      className={`blueprint ${styles.card}`}
      style={{ x, rotateX, rotateY, transformPerspective: 700 }}
    >
      <Corners />
      <p className={styles.quote}>&quot;{testimonial.quote}&quot;</p>
      <div>
        <div className={styles.name}>{testimonial.name}</div>
        <div className={`text-muted ${styles.role}`}>{testimonial.role}</div>
      </div>
    </motion.div>
  );
}

export function TestimonialsGrid() {
  // staggerContainer has no y/opacity of its own — x and y both free here.
  const { x, y } = useTiltParallax(6);

  return (
    <motion.div
      className={`${styles.grid} reveal`}
      variants={staggerContainer(0.05)}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      style={{ x, y }}
    >
      {allTestimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.name} testimonial={testimonial} />
      ))}
    </motion.div>
  );
}
