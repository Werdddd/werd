import portfolio from "@/lib/portfolio-data";
import { Corners } from "./Blueprint";
import { ImagePlaceholder } from "./ImagePlaceholder";
import styles from "./Work.module.css";
import shared from "@/styles/shared.module.css";

export function Work() {
  return (
    <section id="work" className={shared.container}>
      <h6 className={shared.eyebrow}>Selected work</h6>
      <h2 className={shared.sectionHeading}>Five projects, end to end</h2>
      <div className={styles.grid}>
        {portfolio.projects.map((project) => (
          <div key={project.num} className={`blueprint ${styles.card}`}>
            <Corners />
            <ImagePlaceholder
              label="Project screenshot"
              aspect="16 / 10"
              className={styles.thumb}
            />
            <span className="card-kicker">{project.num} — case study</span>
            <h3 className="card-title">{project.title}</h3>
            <p className="card-body">{project.blurb}</p>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className="tag tag-outline">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
