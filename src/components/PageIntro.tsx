"use client";

import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import styles from "./PageIntro.module.css";
import shared from "@/styles/shared.module.css";

export function PageIntro({
  eyebrow,
  heading,
}: {
  eyebrow: string;
  heading: string;
}) {
  return (
    <motion.header
      className={`${shared.container} ${styles.intro} reveal`}
      variants={staggerContainer(0.1)}
      initial="hidden"
      animate="visible"
    >
      <motion.h6 variants={fadeUp} className={shared.eyebrow}>
        {eyebrow}
      </motion.h6>
      <motion.h1 variants={fadeUp} className={styles.heading}>
        {heading}
      </motion.h1>
    </motion.header>
  );
}
