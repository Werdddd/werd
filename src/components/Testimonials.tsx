import portfolio from "@/lib/portfolio-data";
import { Corners } from "./Blueprint";
import styles from "./Testimonials.module.css";
import shared from "@/styles/shared.module.css";

export function Testimonials() {
  return (
    <section id="testimonials" className={shared.container}>
      <h6 className={shared.eyebrow}>Testimonials</h6>
      <h2 className={shared.sectionHeading}>What people say</h2>
      <div className={styles.grid}>
        {portfolio.testimonials.map((testimonial) => (
          <div key={testimonial.name} className={`blueprint ${styles.card}`}>
            <Corners />
            <p className={styles.quote}>&quot;{testimonial.quote}&quot;</p>
            <div>
              <div className={styles.name}>{testimonial.name}</div>
              <div className={`text-muted ${styles.role}`}>{testimonial.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
