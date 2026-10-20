import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { lakbay } from "@/lib/lakbay";
import styles from "../lakbay.module.css";

export const metadata: Metadata = {
  title: "Lakbay — Privacy Policy",
  description:
    "How the Lakbay app collects, uses, stores, and protects your information, including Google and Apple sign-in data, and how to request deletion.",
  alternates: { canonical: "/lakbay/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  const mail = (
    <a href={`mailto:${lakbay.contactEmail}`}>{lakbay.contactEmail}</a>
  );
  return (
    <>
      <PageIntro eyebrow="Lakbay" heading="Privacy Policy" />
      <main className={`${styles.wrap} ${styles.prose}`}>
        <p className={`text-muted ${styles.meta}`}>
          Last updated: {lakbay.lastUpdated}
        </p>
        <p>
          Lakbay (&ldquo;Lakbay&rdquo;, &ldquo;the app&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;) is a travel companion app that helps you plan trips,
          organize itineraries, and save photos and memories from your travels.
          It is owned and developed by {lakbay.developer}. This policy explains
          what information we collect, why we collect it, and the choices you
          have. We only collect what we need to run the app.
        </p>

        <h2>1. Information we collect</h2>
        <h3>Account information</h3>
        <p>
          When you sign in with Google or Apple, we receive basic profile
          information from that provider: your name, your email address, and
          profile information the provider shares with us as part of sign-in.
        </p>
        <h3>Content you add</h3>
        <p>
          This includes the trip details, itineraries, photos, and notes that you
          choose to add to the app.
        </p>
        <p>
          We do not collect anything beyond this to operate Lakbay. We do not
          sell your information and we do not show ads.
        </p>
        {/* TODO: If you add analytics, crash reporting, push notifications, or
            device/location access, list them here and in Section 7. */}

        <h2>2. How we use your information</h2>
        <ul>
          <li>To verify your identity and create and secure your account.</li>
          <li>To store your trips, itineraries, photos, and notes and show them to you in the app.</li>
          <li>To contact you about your account, a data request, or an important change to the app or these policies.</li>
          <li>To keep the app working, fix problems, and protect it from misuse.</li>
        </ul>

        <h2>3. Google and Apple sign-in</h2>
        <p>
          Lakbay offers Sign in with Google and Sign in with Apple. We use these
          only to verify who you are and to create your account.
        </p>
        <ul>
          <li>
            <strong>Google:</strong> we access your name and email address only.
            We do not access your Google Drive, Gmail, contacts, calendar, or
            any other Google data.
          </li>
          <li>
            <strong>Apple:</strong> we receive your name and email address as
            shared by Apple. If you choose Apple&rsquo;s &ldquo;Hide My
            Email&rdquo; option, we receive Apple&rsquo;s private relay address
            instead of your real email.
          </li>
        </ul>

        <h3>Google API Services User Data Policy</h3>
        <p>
          Lakbay&rsquo;s use and transfer to any other app of information
          received from Google APIs will adhere to the{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements. In line with that policy:
        </p>
        <ul>
          <li>We use Google user data only to provide and improve the user-facing features of Lakbay described above.</li>
          <li>We do not transfer Google user data to others except as needed to provide the app (for example, to our hosting provider Supabase), to comply with the law, or as part of a merger or sale with notice to you.</li>
          <li>We do not use Google user data for serving ads, including retargeting or interest-based advertising.</li>
          <li>We do not allow humans to read Google user data unless we have your consent for specific data, it is necessary for security or to comply with law, or the data is aggregated and used for internal operations.</li>
        </ul>

        <h2>4. Where your data is stored: Supabase</h2>
        <p>
          Lakbay uses{" "}
          <a href="https://supabase.com" target="_blank" rel="noopener noreferrer">
            Supabase
          </a>{" "}
          for authentication and for storing your data, including your account
          record, trip content, and photos. Supabase acts as our service provider
          (data processor) and handles this data on our behalf. It may only use
          it to provide its services to us.
        </p>
        {/* TODO: Add the Supabase project region (where data is hosted) if you want to state it. */}

        <h2>5. Your photos and content</h2>
        <p>
          Your photos, notes, and trip details belong to you. We store them so
          you can see them in the app. We do not sell them, use them for
          advertising, or share them with other users or the public.
        </p>

        <h2>6. We do not sell your data</h2>
        <p>
          We do not sell, rent, or trade your personal data, and we do not share
          it for advertising. We only share it with the service providers
          described in this policy, when the law requires it, or with your
          consent.
        </p>

        <h2>7. Third-party services</h2>
        <p>Lakbay relies on these third parties to work:</p>
        <ul>
          <li><strong>Google Sign-In</strong> and <strong>Sign in with Apple</strong>, to verify your identity. Their own privacy policies apply to what they collect.</li>
          <li><strong>Supabase</strong>, for authentication and data storage.</li>
          <li><strong>Apple App Store</strong> and <strong>Google Play</strong>, which distribute the app and have their own privacy practices.</li>
        </ul>

        <h2>8. How long we keep your data</h2>
        <p>
          We keep your account information and content for as long as your
          account is active. When you ask us to delete your account, we delete
          your account information and the content you added, including photos,
          within 30 days. {/* TODO: Confirm 30 days is a timeline you can meet, or change it. */}
          We may keep limited information longer only if the law requires it.
        </p>

        <h2>9. Requesting account and data deletion</h2>
        <p>
          You can ask us to delete your account and all associated data at any
          time. Email {mail} from the email address linked to your account with
          the subject &ldquo;Lakbay account deletion&rdquo;. We may ask you to
          confirm it is you. We will confirm once the deletion is complete.
          You can use the same address to ask for a copy of your data or to
          correct it.
        </p>
        {/* TODO: If you add an in-app "Delete account" option, mention it here (Apple requires one for apps with account creation). */}

        <h2>10. Security</h2>
        <p>
          We take reasonable steps to protect your information, including relying
          on Supabase&rsquo;s security controls for authentication and storage.
          No system is completely secure, so we cannot guarantee absolute
          security. Please keep your Google or Apple account secure.
        </p>

        <h2>11. Children</h2>
        <p>
          Lakbay is for people aged 13 and older. We do not knowingly collect
          personal information from children under 13. If you believe a child
          under 13 has given us information, email {mail} and we will delete it.
        </p>

        <h2>12. Changes to this policy</h2>
        <p>
          We may update this policy from time to time. When we do, we will change
          the &ldquo;Last updated&rdquo; date above and, for significant changes,
          let you know in the app or by email. Continuing to use Lakbay after a
          change means you accept the updated policy.
        </p>

        <h2>13. Contact</h2>
        <p>
          Questions about this policy or your data? Email {lakbay.developer} at{" "}
          {mail}. See also our{" "}
          <Link href="/lakbay/terms-of-service">Terms of Service</Link>.
        </p>
      </main>
    </>
  );
}
