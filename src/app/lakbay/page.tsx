import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Corners } from "@/components/Blueprint";
import { lakbay } from "@/lib/lakbay";
import styles from "./lakbay.module.css";

export const metadata: Metadata = {
  title: "Lakbay — Your travel companion",
  description:
    "Lakbay is a travel companion app for planning trips solo or with your crew: shared itineraries that work offline, group voting, outfits, travel documents, split expenses, and shareable trip cards.",
  alternates: { canonical: "/lakbay" },
};

type Feature = {
  emoji: string;
  title: string;
  body: string;
  /** One or two screenshots; omitted for features drawn in CSS. */
  shots?: { src: string; alt: string }[];
};

const features: Feature[] = [
  {
    emoji: "✈️",
    title: "Plan your next adventure solo or with your crew",
    body: "Start a trip for yourself or the whole group and keep every plan, flight, and cost in one place.",
    shots: [{ src: "/projects/lakbay-home.webp", alt: "Lakbay home screen with top picks and all trips" }],
  },
  {
    emoji: "📲",
    title: "Bring everyone on board with a single scan",
    body: "Share a QR code or invite link and your travelers join the trip in seconds.",
    shots: [{ src: "/projects/lakbay-invite.webp", alt: "Trip invite screen with a QR code and traveler list" }],
  },
  {
    emoji: "🗳️",
    title: "Vote on destinations, activities, and plans",
    body: "Let the whole group weigh in before anything gets booked, so the plan works for everyone.",
  },
  {
    emoji: "🗺️",
    title: "Build your itinerary, even offline",
    body: "Lay out each day stop by stop. Changes made offline are saved and sync once you're back online.",
    shots: [
      { src: "/projects/lakbay-itinerary.webp", alt: "Day-by-day itinerary for a Boracay trip" },
      { src: "/projects/lakbay-offline.webp", alt: "Trip overview with an offline banner saying changes will sync later" },
    ],
  },
  {
    emoji: "👗",
    title: "Plan and organize your outfits for every day",
    body: "Pick an outfit for each day of the trip and keep your packing list right beside it.",
    shots: [{ src: "/projects/lakbay-outfit.webp", alt: "Outfit planner listing an outfit for each trip day" }],
  },
  {
    emoji: "📁",
    title: "Keep important travel documents in one place",
    body: "Bookings, passports, receipts, and insurance, with private files that only you can see.",
    shots: [{ src: "/projects/lakbay-documents.webp", alt: "Documents screen grouped into bookings, passports, receipts, and insurance" }],
  },
  {
    emoji: "💸",
    title: "Split expenses and track everyone’s share",
    body: "Log costs as you go, see what each person owes, convert currencies, and settle up.",
    shots: [{ src: "/projects/lakbay-expenses.webp", alt: "Expenses screen showing total spent and each traveler's share" }],
  },
  {
    emoji: "🎫",
    title: "Turn your trip into a postcard, map, or boarding pass",
    body: "Generate a shareable card sized for your story or feed, ready to send to friends.",
    shots: [{ src: "/projects/lakbay-share.webp", alt: "Share trip screen with a boarding pass style trip card" }],
  },
  {
    emoji: "🔎",
    title: "Discover your next lakad",
    body: "Browse trip ideas and highlights for inspiration, then turn one into your own plan with a tap.",
    shots: [{ src: "/projects/lakbay-discover.webp", alt: "Discover screen with trip ideas for El Nido and Siargao" }],
  },
];

const heroShots = [
  { src: "/projects/lakbay-discover.webp", alt: "", cls: styles.phoneLeft },
  { src: "/projects/lakbay-home.webp", alt: "Lakbay home screen", cls: styles.phoneCenter },
  { src: "/projects/lakbay-itinerary.webp", alt: "", cls: styles.phoneRight },
];

const ROUTE = "M8 176 C 150 -10, 410 -10, 552 150";
const PLANE =
  "M13 0 L-3 -2.2 L-8 -11 L-11 -11 L-8 -2.2 L-14 -2.2 L-16.5 -6.5 L-18.5 -6.5 L-17 0 L-18.5 6.5 L-16.5 6.5 L-14 2.2 L-8 2.2 L-11 11 L-8 11 L-3 2.2 Z";

const pollOptions = [
  { name: "El Nido", votes: 4, pct: 100 },
  { name: "Siargao", votes: 3, pct: 75 },
  { name: "Boracay", votes: 1, pct: 25 },
];

export default function LakbayPage() {
  const [andrew, hazel] = lakbay.developers;

  return (
    <main className={styles.page}>
      {/* — Hero — */}
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <div className={styles.logo}>
            <Image
              src={lakbay.logo}
              alt="Lakbay"
              fill
              sizes="(max-width: 480px) 100vw, 380px"
              priority
            />
          </div>
          <h6 className={styles.eyebrow}>
            <span className={styles.liveDot} aria-hidden="true" />
            Travel companion · Now on the App Store
          </h6>
          <h1 className={styles.title}>Bound for the world.</h1>
          <p className={styles.lead}>
            Plan trips solo or with your crew. Lakbay keeps your itinerary,
            outfits, documents, and shared expenses in one app, and gets
            everyone on board with a single scan.
          </p>
          <div className={styles.actions}>
            <a className="btn btn-primary" href="/lakbay/download">
              <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M16.37 12.6c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.77-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-2.99-.79-1.54.02-2.96.9-3.75 2.27-1.6 2.78-.41 6.89 1.15 9.14.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.77-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.39-.92-2.41-3.66zM14.1 5.86c.63-.77 1.06-1.83.94-2.89-.91.04-2.01.61-2.66 1.37-.58.67-1.1 1.76-.96 2.8 1.01.08 2.05-.52 2.68-1.28z"
                />
              </svg>
              Download on the App Store
            </a>
            {/* TODO: replace "#" with the Google Play listing URL once the app is live. */}
            <a className="btn btn-secondary" href="#">
              Get it on Google Play
            </a>
          </div>
          <p className={styles.credit}>
            Designed and developed by {andrew} &amp; {hazel}
          </p>
        </div>

        <div className={styles.heroVisual}>
          <svg className={styles.route} viewBox="0 0 560 200" aria-hidden="true">
            <path d={ROUTE} className={styles.routeLine} />
            <g className={styles.planeMoving}>
              <path d={PLANE} className={styles.plane} />
              <animateMotion dur="7s" repeatCount="indefinite" rotate="auto" path={ROUTE} />
            </g>
            <path d={PLANE} className={`${styles.plane} ${styles.planeStatic}`} transform="translate(280 52)" />
          </svg>
          {heroShots.map((shot) => (
            <div key={shot.src} className={`${styles.phone} ${shot.cls}`}>
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 900px) 45vw, 260px"
                priority
              />
            </div>
          ))}
        </div>
      </section>

      {/* — Features — */}
      <section className={styles.section}>
        <h6 className={styles.eyebrow}>Features</h6>
        <h2 className={styles.sectionHeading}>Everything the trip needs, in one app</h2>
        <ul className={styles.features}>
          {features.map((f) => (
            <li key={f.title} className={`blueprint ${styles.card}`}>
              <Corners />
              <div className={styles.media}>
                {f.shots ? (
                  f.shots.map((shot, i) => (
                    <div
                      key={shot.src}
                      className={`${styles.mediaPhone} ${
                        f.shots!.length > 1 ? (i === 0 ? styles.duoA : styles.duoB) : ""
                      }`}
                    >
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        fill
                        sizes="(max-width: 600px) 60vw, 220px"
                      />
                    </div>
                  ))
                ) : (
                  <div className={styles.poll} aria-hidden="true">
                    <span className={styles.pollKicker}>Group vote</span>
                    <span className={styles.pollTitle}>Where to next?</span>
                    {pollOptions.map((o, i) => (
                      <span
                        key={o.name}
                        className={`${styles.pollOption} ${i === 0 ? styles.pollLead : ""}`}
                      >
                        <span className={styles.pollRow}>
                          <span>{o.name}</span>
                          <span>{o.votes}</span>
                        </span>
                        <span className={styles.pollBar}>
                          <span style={{ width: `${o.pct}%` }} />
                        </span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className={styles.cardBody}>
                <span className={styles.emoji} aria-hidden="true">
                  {f.emoji}
                </span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* — Team — */}
      <section className={styles.section}>
        <h6 className={styles.eyebrow}>The team</h6>
        <h2 className={styles.sectionHeading}>Made by two travelers</h2>
        <div className={styles.team}>
          {[andrew, hazel].map((name) => (
            <div key={name} className={`blueprint ${styles.member}`}>
              <Corners />
              <span className={styles.initials} aria-hidden="true">
                {name
                  .split(" ")
                  .map((p) => p[0])
                  .join("")}
              </span>
              <span>
                <span className={styles.memberName}>{name}</span>
                <span className={styles.memberRole}>Developer</span>
              </span>
              {name === andrew && (
                <Link href="/" className={styles.memberLink}>
                  Portfolio →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* — Data, legal, contact — */}
      <section className={`${styles.section} ${styles.info}`}>
        <div>
          <h2 className={styles.infoHeading}>Sign in and your data</h2>
          <div className={styles.callout}>
            <p>
              Lakbay uses Google Sign-In only to verify your identity and create
              your account. We access your{" "}
              <strong>name and email address only</strong>. We do not sell your
              data, and there are no ads in Lakbay.
            </p>
            <p style={{ marginBottom: 0 }}>
              You can also sign in with Apple. Read the{" "}
              <Link href="/lakbay/privacy-policy">Privacy Policy</Link> for the
              full details.
            </p>
          </div>
        </div>
        <div>
          <h2 className={styles.infoHeading}>Legal and contact</h2>
          <p>
            <Link href="/lakbay/privacy-policy">Privacy Policy</Link> ·{" "}
            <Link href="/lakbay/terms-of-service">Terms of Service</Link>
          </p>
          <p>
            Questions, feedback, or data requests? Email{" "}
            <a href={`mailto:${lakbay.contactEmail}`}>{lakbay.contactEmail}</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
