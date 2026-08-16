"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ExperienceList } from "./ExperienceList";
import { fadeUp, staggerContainer, revealViewport } from "@/lib/motion";
import shared from "@/styles/shared.module.css";

export function Experience() {
  return (
    <motion.section
      id="experience"
      className={`${shared.container} reveal`}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
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
