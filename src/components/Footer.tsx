import styles from "./Footer.module.css";
import { LiveViewers } from "./LiveViewers";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={`nav ${styles.footer}`}>
      <span className="text-muted" style={{ fontSize: 13 }}>
        © {year} Andrew Emmanuel Robles
      </span>
      <div className={styles.right}>
        <LiveViewers />
        <SocialLinks />
      </div>
    </footer>
  );
}
