import styles from "./SocialLinks.module.css";

const links = [
  {
    name: "GitHub",
    href: "https://github.com/Werdddd",
    icon: (
      <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.5 0-.24-.01-1.04-.01-1.9-2.78.62-3.37-1.22-3.37-1.22-.46-1.2-1.11-1.52-1.11-1.52-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.36 1.11 2.94.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.78-4.57 5.04.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .28.18.6.69.5A10.2 10.2 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z" />
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/andrew-emmanuel-robles/",
    icon: (
      <path d="M6.94 8.5H3.56V21h3.38V8.5ZM5.25 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM21 21v-7.02c0-3.76-2.01-5.51-4.69-5.51-2.16 0-3.13 1.19-3.67 2.02V8.5h-3.38c.04.96 0 12.5 0 12.5h3.38v-6.98c0-.37.03-.75.14-1.02.3-.75 1-1.53 2.16-1.53 1.52 0 2.13 1.16 2.13 2.86V21H21Z" />
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/drew_robles23/",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </g>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/andrewemmanuel.robles",
    icon: (
      <path d="M14.5 21v-7.5h2.5l.5-3h-3V8.5c0-.87.24-1.46 1.5-1.46H17.5V4.34C17.24 4.31 16.36 4.23 15.33 4.23c-2.15 0-3.63 1.31-3.63 3.72V10.5H9v3h2.7V21h2.8Z" />
    ),
  },
];

export function SocialLinks() {
  return (
    <div className={styles.social}>
      {links.map(({ name, href, icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          title={name}
          className={styles.link}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            {icon}
          </svg>
        </a>
      ))}
    </div>
  );
}
