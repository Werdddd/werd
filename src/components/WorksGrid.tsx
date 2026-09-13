"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Corners } from "@/components/Blueprint";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PlatformIcon } from "@/components/PlatformIcon";
import { fadeUp, staggerContainer, revealViewport } from "@/lib/motion";
import { useTiltParallax } from "@/lib/tilt";
import portfolio, { type Project } from "@/lib/portfolio-data";
import shared from "@/styles/shared.module.css";
import styles from "@/app/works/works.module.css";

// Pulled out so useTiltParallax (a hook) has a proper per-item component
// to live in — calling hooks inside portfolio.projects.map() below would
// violate the rules of hooks.
function ProjectCard({ project }: { project: Project }) {
  // fadeUp owns y/opacity on this element, so only x/rotate are used here.
  const { x, rotateX, rotateY } = useTiltParallax(16, 3);
  const style = { x, rotateX, rotateY, transformPerspective: 700 };

  const cardBody = (
    <>
      <Corners />
      <div className={styles.thumbWrap}>
        {project.image ? (
          <div
            className={`blueprint ${styles.thumb}`}
            style={{ aspectRatio: "16 / 10", position: "relative" }}
          >
            <Corners />
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 760px) 90vw, 420px"
              style={{ objectFit: "cover" }}
            />
          </div>
        ) : (
          <ImagePlaceholder label="Project screenshot" aspect="16 / 10" className={styles.thumb} />
        )}
        <span
          className={`${styles.platform} ${project.platform === "Mobile" ? styles.platformMobile : ""}`}
        >
          <PlatformIcon platform={project.platform} />
          {project.platform}
        </span>
      </div>
      <span className="card-kicker">{project.num}</span>
      <h3 className="card-title">{project.title}</h3>
      <p className="card-body">{project.blurb}</p>
      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag} className="tag tag-outline">
            {tag}
          </span>
        ))}
      </div>
      {project.link && <span className={shared.viewAll}>Visit ↗</span>}
    </>
  );

  return project.link ? (
    <motion.a
      variants={fadeUp}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`blueprint ${styles.card} ${styles.cardLink}`}
      style={style}
    >
      {cardBody}
    </motion.a>
  ) : (
    <motion.article variants={fadeUp} className={`blueprint ${styles.card}`} style={style}>
      {cardBody}
    </motion.article>
  );
}

export function WorksGrid() {
  // staggerContainer has no y/opacity of its own — x and y both free here.
  const { x, y } = useTiltParallax(6);

  return (
    <motion.div
      className={`${styles.grid} reveal`}
      variants={staggerContainer(0.06)}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      style={{ x, y }}
    >
      {portfolio.projects.map((project) => (
        <ProjectCard key={project.num} project={project} />
      ))}
    </motion.div>
  );
}
