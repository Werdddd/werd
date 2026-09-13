"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ExperienceList } from "./ExperienceList";
import { fadeUp, staggerContainer, revealViewport } from "@/lib/motion";
import { useTiltParallax } from "@/lib/tilt";
import shared from "@/styles/shared.module.css";

export function Experience() {
  // staggerContainer has no y/opacity of its own — x and y both free here.
  const { x, y } = useTiltParallax(6);

  return (
    <motion.section
      id="experience"
      className={`${shared.container} reveal`}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      style={{ x, y }}
    >
      <motion.div variants={fadeUp} className={shared.sectionHeader}>
        <div>
          <h6 className={shared.eyebrow}>Experience</h6>
          <h2 className={shared.sectionHeading}>Where I&apos;ve worked</h2>
        </div>
        <Link className={shared.viewAll} href="/experience">
          View full history →
        </Link>
      </motion.div>
      <ExperienceList />
    </motion.section>
  );
}
