import portfolio from "@/lib/portfolio-data";
import styles from "./Writing.module.css";
import shared from "@/styles/shared.module.css";

export function Writing() {
  return (
    <section id="writing" className={shared.container}>
      <h6 className={shared.eyebrow}>Writing</h6>
      <h2 className={shared.sectionHeading}>Notes from the work</h2>
      <div className={styles.list}>
        {portfolio.posts.map((post) => (
          <a key={post.title} href="#" className={styles.row}>
            <span className="text-muted" style={{ fontSize: 13 }}>
              {post.date}
            </span>
            <div>
              <h4 className={styles.title}>{post.title}</h4>
              <p className="card-body">{post.excerpt}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
