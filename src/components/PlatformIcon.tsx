export function PlatformIcon({ platform }: { platform: "Web" | "Mobile" }) {
  if (platform === "Mobile") {
    return (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="2" width="12" height="20" rx="2" />
        <line x1="11" y1="18" x2="13" y2="18" />
      </svg>
    );
  }
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 4 6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-6-4-9s1.5-6.4 4-9Z" />
    </svg>
  );
}
