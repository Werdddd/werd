"use client";

import { motion } from "motion/react";
import portfolio from "@/lib/portfolio-data";
import { HeroPhoto } from "./HeroPhoto";
import { fadeUp, staggerContainer } from "@/lib/motion";
import styles from "./Hero.module.css";
import shared from "@/styles/shared.module.css";

export function Hero() {
  return (
    <motion.header
      className={`${styles.hero} reveal`}
      variants={staggerContainer(0.12, 0.15)}
      initial="hidden"
      animate="visible"
    >
      <div>
        
        <motion.h1 variants={fadeUp} className={styles.tagline}>
          {portfolio.tagline}
        </motion.h1>
        <motion.p variants={fadeUp} className={styles.subhead}>
          {portfolio.subhead}
        </motion.p>
        <motion.p variants={fadeUp} className={styles.bio}>
          {portfolio.bio}
        </motion.p>
        <motion.div variants={fadeUp} className={styles.actions}>
          <a className="btn btn-primary" href="#work">
            View work
          </a>
          <a className="btn btn-secondary" href="#contact">
            Get in touch
          </a>
        </motion.div>
      </div>
      <HeroPhoto className={styles.portrait} />
    </motion.header>
  );
}
