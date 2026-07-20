import portfolio from "@/lib/portfolio-data";
import { HeroSlideshow } from "./HeroSlideshow";
import styles from "./Hero.module.css";
import shared from "@/styles/shared.module.css";

export function Hero() {
  return (
    <header className={styles.hero} data-reveal>
      <div>
        <h6 className={shared.eyebrow}>{portfolio.role}</h6>
        <h1 className={styles.tagline}>{portfolio.tagline}</h1>
        <p className={styles.subhead}>{portfolio.subhead}</p>
        <p className={styles.bio}>{portfolio.bio}</p>
        <div className={styles.actions}>
          <a className="btn btn-primary" href="#work">
            View work
          </a>
          <a className="btn btn-secondary" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
      <HeroSlideshow className={styles.portrait} />
    </header>
  );
}
