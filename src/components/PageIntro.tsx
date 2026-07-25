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
    <header className={`${shared.container} ${styles.intro}`} data-reveal>
      <h6 className={shared.eyebrow}>{eyebrow}</h6>
      <h1 className={styles.heading}>{heading}</h1>
    </header>
  );
}
