"use client";

import { motion } from "motion/react";
import { Corners } from "@/components/Blueprint";
import { fadeUp, staggerContainer, revealViewport } from "@/lib/motion";
import portfolio from "@/lib/portfolio-data";
import styles from "@/app/testimonials/testimonials.module.css";

const allTestimonials = [...portfolio.testimonials, ...portfolio.fillerTestimonials];

export function TestimonialsGrid() {
  return (
    <motion.div
      className={`${styles.grid} reveal`}
      variants={staggerContainer(0.05)}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      {allTestimonials.map((testimonial) => (
        <motion.div key={testimonial.name} variants={fadeUp} className={`blueprint ${styles.card}`}>
          <Corners />
          <p className={styles.quote}>&quot;{testimonial.quote}&quot;</p>
          <div>
            <div className={styles.name}>{testimonial.name}</div>
            <div className={`text-muted ${styles.role}`}>{testimonial.role}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
