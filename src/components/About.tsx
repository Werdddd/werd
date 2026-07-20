import portfolio from "@/lib/portfolio-data";
import { Corners } from "./Blueprint";
import styles from "./About.module.css";
import shared from "@/styles/shared.module.css";

export function About() {
  return (
    <section id="about" className={shared.container} data-reveal>
      <h6 className={shared.eyebrow}>About</h6>
      <h2 className={shared.sectionHeading}>Precision as a working method</h2>
      <div className={styles.grid}>
        {portfolio.facts.map((fact) => (
          <div key={fact.k} className={`blueprint ${styles.fact}`}>
            <Corners />
            <span className="text-muted">{fact.k}</span>
            <span className={styles.factValue}>{fact.v}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
