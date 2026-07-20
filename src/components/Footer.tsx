import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={`nav ${styles.footer}`} data-reveal>
      <span className="text-muted" style={{ fontSize: 13 }}>
        © {year} Andrew Emmanuel Robles
      </span>
      <span className={`text-muted ${styles.note}`}>
        Built with Next.js — Industry design system
      </span>
    </footer>
  );
}
