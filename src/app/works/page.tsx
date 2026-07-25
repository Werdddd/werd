import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageIntro } from "@/components/PageIntro";
import { Corners } from "@/components/Blueprint";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PlatformIcon } from "@/components/PlatformIcon";
import portfolio from "@/lib/portfolio-data";
import shared from "@/styles/shared.module.css";
import styles from "./works.module.css";

export const metadata: Metadata = {
  title: `${portfolio.name} — Work`,
  description: `All ${portfolio.projects.length} projects by ${portfolio.name}, spanning web and mobile products built end to end.`,
};

export default function WorksPage() {
  return (
    <>
      <Nav />
      <PageIntro eyebrow="All work" heading="Projects, end to end" />
      <section className={shared.container}>
        <div className={styles.grid}>
          {portfolio.projects.map((project) => (
            <article key={project.num} className={`blueprint ${styles.card}`}>
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
                  <ImagePlaceholder
                    label="Project screenshot"
                    aspect="16 / 10"
                    className={styles.thumb}
                  />
                )}
                <span
                  className={`${styles.platform} ${
                    project.platform === "Mobile" ? styles.platformMobile : ""
                  }`}
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
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
