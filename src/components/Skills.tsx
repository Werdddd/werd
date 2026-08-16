"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { SkillsGrid } from "./SkillsGrid";
import { fadeUp, staggerContainer, revealViewport } from "@/lib/motion";
import shared from "@/styles/shared.module.css";

export function Skills() {
  return (
    <motion.section
      id="skills"
      className={`${shared.container} reveal`}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      <motion.div variants={fadeUp} className={shared.sectionHeader}>
        <div>
          <h6 className={shared.eyebrow}>Stack</h6>
          <h2 className={shared.sectionHeading}>What I work with</h2>
        </div>
        <Link className={shared.viewAll} href="/tools">
          View full stack →
        </Link>
      </motion.div>
      <motion.div variants={fadeUp}>
        <SkillsGrid categorized={false} />
      </motion.div>
    </motion.section>
  );
}
