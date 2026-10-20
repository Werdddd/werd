import Link from "next/link";
import { lakbay, lakbayLinks } from "@/lib/lakbay";
import styles from "./LakbayFooter.module.css";

export function LakbayFooter() {
  return (
    <footer className={`nav ${styles.footer}`}>
      <span className="text-muted" style={{ fontSize: 13 }}>
        © {new Date().getFullYear()} {lakbay.developer}
      </span>
      <div className={styles.links}>
        {lakbayLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
        <a href={`mailto:${lakbay.contactEmail}`}>{lakbay.contactEmail}</a>
      </div>
    </footer>
  );
}
