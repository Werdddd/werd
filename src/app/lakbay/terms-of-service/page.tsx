import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { lakbay } from "@/lib/lakbay";
import styles from "../lakbay.module.css";

export const metadata: Metadata = {
  title: "Lakbay — Terms of Service",
  description:
    "The terms that apply when you use the Lakbay travel companion app, including accounts, your content, acceptable use, and travel information disclaimers.",
  alternates: { canonical: "/lakbay/terms-of-service" },
};

export default function TermsOfServicePage() {
  const mail = (
    <a href={`mailto:${lakbay.contactEmail}`}>{lakbay.contactEmail}</a>
  );
  return (
    <>
      <PageIntro eyebrow="Lakbay" heading="Terms of Service" />
      <main className={`${styles.wrap} ${styles.prose}`}>
        <p className={`text-muted ${styles.meta}`}>
          Last updated: {lakbay.lastUpdated}
        </p>
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your use of Lakbay,
          a travel companion app that helps you plan trips, organize itineraries,
          and save photos and memories, owned and developed by {lakbay.developer}{" "}
          (&ldquo;we&rdquo;, &ldquo;us&rdquo;). Please read them carefully.
        </p>

        <h2>1. Acceptance of these Terms</h2>
        <p>
          By creating an account or using Lakbay, you agree to these Terms and to
          our <Link href="/lakbay/privacy-policy">Privacy Policy</Link>. If you
          do not agree, please do not use the app.
        </p>

        <h2>2. Eligibility</h2>
        <p>
          You must be at least 13 years old to use Lakbay. If you are under the
          age of majority where you live, you confirm that a parent or guardian
          is aware of and okay with your use of the app.
        </p>

        <h2>3. Your account</h2>
        <ul>
          <li>You sign in with Google or Apple. You are responsible for keeping that account secure.</li>
          <li>Give us accurate information and keep it up to date.</li>
          <li>You are responsible for activity that happens under your account. Tell us at {mail} if you think someone else has accessed it.</li>
          <li>You can delete your account at any time by following the steps in the Privacy Policy.</li>
        </ul>

        <h2>4. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Break the law or infringe anyone&rsquo;s rights, including copyright and privacy.</li>
          <li>Upload content that is illegal, harmful, hateful, harassing, or sexually explicit, or content you do not have the right to share.</li>
          <li>Try to access other users&rsquo; accounts or data, or interfere with or disrupt the app or its servers.</li>
          <li>Reverse engineer, scrape, or copy the app, except where the law allows it.</li>
          <li>Use the app to send spam or to mislead or defraud others.</li>
        </ul>

        <h2>5. Your content</h2>
        <p>
          You keep ownership of the trip details, photos, notes, and other
          content you add to Lakbay (&ldquo;Your Content&rdquo;). You give us a
          limited, non-exclusive, worldwide, royalty-free license to store,
          process, and display Your Content only as needed to run Lakbay for you.
          This license ends when you delete the content or your account, except
          for any short period needed to finish deleting it. You are responsible
          for Your Content and promise you have the rights to add it.
        </p>

        <h2>6. Travel information disclaimer</h2>
        <p>
          Lakbay is a planning and memory-keeping tool. We do not guarantee that
          any travel information in the app, including what you or others enter,
          is accurate, complete, or up to date. Always check details such as
          dates, times, bookings, entry requirements, and safety conditions with
          official sources. You travel at your own risk, and you are responsible
          for your own decisions, safety, and documents.
        </p>

        <h2>7. Third-party services</h2>
        <p>
          Lakbay relies on third-party services such as Google Sign-In, Sign in
          with Apple, Supabase, the Apple App Store, and Google Play. Your use of
          those services is subject to their own terms and policies. We are not
          responsible for them or for any problems they cause.
        </p>

        <h2>8. Intellectual property</h2>
        <p>
          The app, including its name, logo, design, and code, belongs to{" "}
          {lakbay.developer} and is protected by intellectual property laws. We
          give you a personal, non-exclusive, non-transferable, revocable license
          to use the app for your own non-commercial use under these Terms. No
          other rights are granted.
        </p>

        <h2>9. Termination</h2>
        <p>
          You can stop using Lakbay and delete your account at any time. We may
          suspend or end your access if you break these Terms, misuse the app, or
          if we need to for legal or security reasons, or if we stop offering the
          app. When your account ends, your right to use the app ends, and your
          data is handled as described in the Privacy Policy.
        </p>

        <h2>10. Disclaimer of warranties</h2>
        <p>
          Lakbay is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;.
          To the fullest extent the law allows, we make no warranties of any kind,
          express or implied, including about merchantability, fitness for a
          particular purpose, accuracy, or that the app will be uninterrupted,
          error-free, or that your content will never be lost. Please keep your
          own copies of photos and information that matter to you.
        </p>

        <h2>11. Limitation of liability</h2>
        <p>
          To the fullest extent the law allows, we are not liable for any
          indirect, incidental, special, consequential, or punitive damages, or
          for lost data, profits, or travel losses, arising from your use of
          Lakbay. Our total liability for any claim relating to the app will not
          exceed the amount you paid us for it in the past 12 months, or PHP 1,000
          if you paid nothing. Some places do not allow these limits, so they may
          not apply to you.
        </p>

        <h2>12. Changes to these Terms</h2>
        <p>
          We may update these Terms from time to time. We will change the
          &ldquo;Last updated&rdquo; date above and, for significant changes,
          let you know in the app or by email. If you keep using Lakbay after a
          change, you accept the updated Terms.
        </p>

        <h2>13. Governing law</h2>
        <p>
          These Terms are governed by the laws of the Republic of the
          Philippines, without regard to conflict-of-law rules. Any dispute will
          be handled by the proper courts of the Philippines. {/* TODO: Confirm governing law, and name a specific venue (e.g. a city) if you want one. */}
        </p>

        <h2>14. Contact</h2>
        <p>
          Questions about these Terms? Email {lakbay.developer} at {mail}.
        </p>
      </main>
    </>
  );
}
