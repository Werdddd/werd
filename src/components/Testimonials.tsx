"use client";

import Link from "next/link";
import { motion } from "motion/react";
import portfolio from "@/lib/portfolio-data";
import { Corners } from "./Blueprint";
import { fadeUp, staggerContainer, revealViewport } from "@/lib/motion";
import styles from "./Testimonials.module.css";
import shared from "@/styles/shared.module.css";

export function Testimonials() {
  const testimonials = portfolio.testimonials;

  return (
    <motion.section
      id="testimonials"
      className={`${shared.container} reveal`}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      <motion.div variants={fadeUp} className={shared.sectionHeader}>
        <div>
          <h6 className={shared.eyebrow}>Testimonials</h6>
          <h2 className={shared.sectionHeading}>What people say</h2>
        </div>
        <Link className={shared.viewAll} href="/testimonials">
          View all testimonials →
        </Link>
      </motion.div>
      <motion.div variants={fadeUp} className={styles.marquee}>
        <div className={styles.track}>
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <div
              key={`${testimonial.name}-${i}`}
              className={`blueprint ${styles.card}`}
              aria-hidden={i >= testimonials.length}
            >
              <Corners />
              <p className={styles.quote}>&quot;{testimonial.quote}&quot;</p>
              <div>
                <div className={styles.name}>{testimonial.name}</div>
                <div className={`text-muted ${styles.role}`}>{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
