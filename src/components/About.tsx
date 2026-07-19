import portfolio from "@/lib/portfolio-data";
import { Corners } from "./Blueprint";
import styles from "./About.module.css";
import shared from "@/styles/shared.module.css";

export function About() {
  return (
    <section id="about" className={`${shared.container} ${styles.about}`}>
      <div>
        <h6 className={shared.eyebrow}>About</h6>
        <h2>Precision as a working method</h2>
        <p className={styles.bio}>{portfolio.bio}</p>
      </div>
      <div className={`blueprint ${styles.facts}`}>
        <Corners />
        {portfolio.facts.map((fact) => (
          <div key={fact.k} className={styles.factRow}>
            <span className="text-muted">{fact.k}</span>
            <span className={styles.factValue}>{fact.v}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
