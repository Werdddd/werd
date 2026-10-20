import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { lakbay } from "@/lib/lakbay";
import styles from "./lakbay.module.css";

export const metadata: Metadata = {
  title: "Lakbay — Your travel companion",
  description:
    "Lakbay is a travel companion app for iOS and Android that helps you plan trips, organize itineraries, and keep your photos and memories in one place.",
  alternates: { canonical: "/lakbay" },
};

const features = [
  {
    title: "Plan your trips",
    body: "Set up a trip and keep the details you need in one place.",
  },
  {
    title: "Organize itineraries",
    body: "Arrange your days and plans so you always know what comes next.",
  },
  {
    title: "Save photos",
    body: "Keep the photos from your travels together with the trip they belong to.",
  },
  {
    title: "Keep memories",
    body: "Add notes to remember the moments that made each trip special.",
  },
];

export default function LakbayPage() {
  return (
    <>
      <PageIntro eyebrow="Mobile app" heading="Lakbay" />
      <main className={styles.wrap}>
        <div className={styles.logo}>
          <Image
            src={lakbay.logo}
            alt="Lakbay logo"
            fill
            sizes="(max-width: 480px) 100vw, 420px"
            priority
          />
        </div>
        <p className={styles.tagline}>
          Your travel companion for planning trips and keeping memories.
        </p>
        <p>
          Lakbay is an iOS and Android app that helps you plan trips, organize
          your itineraries, and save the photos and memories from your travels,
          all in one place.
        </p>

        <div className={styles.actions}>
          {/* TODO: replace "#" with the App Store listing URL once the app is live. */}
          <a className="btn btn-primary" href="#">
            Download on the App Store
          </a>
          {/* TODO: replace "#" with the Google Play listing URL once the app is live. */}
          <a className="btn btn-secondary" href="#">
            Get it on Google Play
          </a>
        </div>

        <h2>What you can do</h2>
        <ul className={styles.features}>
          {features.map((f) => (
            <li key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </li>
          ))}
        </ul>

        <h2>Sign in and your data</h2>
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

        <h2>Legal and contact</h2>
        <p>
          <Link href="/lakbay/privacy-policy">Privacy Policy</Link> ·{" "}
          <Link href="/lakbay/terms-of-service">Terms of Service</Link>
        </p>
        <p>
          Questions, feedback, or data requests? Email{" "}
          <a href={`mailto:${lakbay.contactEmail}`}>{lakbay.contactEmail}</a>.
        </p>
        <p className="text-muted">Lakbay is developed by {lakbay.developer}.</p>
      </main>
    </>
  );
}
