"use client";

import { motion } from "motion/react";
import portfolio from "@/lib/portfolio-data";
import { Corners } from "./Blueprint";
import { fadeUp, staggerContainer, revealViewport } from "@/lib/motion";
import styles from "./About.module.css";
import shared from "@/styles/shared.module.css";

const [basedIn, focus, currently] = portfolio.facts;

export function About() {
  return (
    <motion.section
      id="about"
      className={`${shared.container} reveal`}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      <motion.h6 variants={fadeUp} className={shared.eyebrow}>
        About
      </motion.h6>
      <motion.h2 variants={fadeUp} className={shared.sectionHeading}>
        Precision as a working method
      </motion.h2>
      <motion.div className={styles.grid} variants={staggerContainer(0.08)}>
        <motion.div variants={fadeUp} className={`blueprint ${styles.fact}`}>
          <Corners />
          <span className="text-muted">{basedIn.k}</span>
          <div className={styles.mapVisual}>
            <span className={styles.mapPin}>
              <span className={styles.mapPinPing} />
              <span className={styles.mapPinDot} />
            </span>
          </div>
          <span className={styles.factValue}>{basedIn.v}</span>
          <span className={styles.coords}>14.6691° N, 120.9468° E</span>
        </motion.div>

        <motion.div variants={fadeUp} className={`blueprint ${styles.fact}`}>
          <Corners />
          <span className="text-muted">{focus.k}</span>
          <div className={styles.diagram}>
            <span className={`${styles.diagramBeam} ${styles.diagramBeamN}`} />
            <span className={`${styles.diagramBeam} ${styles.diagramBeamE}`} />
            <span className={`${styles.diagramBeam} ${styles.diagramBeamS}`} />
            <span className={`${styles.diagramBeam} ${styles.diagramBeamW}`} />
            <span className={styles.diagramTraveler} />
            <span className={`${styles.diagramLabel} ${styles.diagramN}`}>WEB</span>
            <span className={`${styles.diagramLabel} ${styles.diagramE}`}>MOBILE</span>
            <span className={`${styles.diagramLabel} ${styles.diagramS}`}>DESIGN</span>
            <span className={`${styles.diagramLabel} ${styles.diagramW}`}>AI</span>
          </div>
          <span className={styles.factValue}>{focus.v}</span>
        </motion.div>

        <motion.div variants={fadeUp} className={`blueprint ${styles.fact}`}>
          <Corners />
          <span className="text-muted">{currently.k}</span>
          <div className={styles.statusRow}>
            <span className={styles.statusDot}>
              <span className={styles.statusDotPing} />
            </span>
            <span className={styles.statusLabel}>Available</span>
          </div>
          <p className={styles.statusCopy}>{currently.v}</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
