import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="prose-page">
      <h1>Privacy Policy</h1>
      <p className="text-sm text-neutral-500">Last updated: September 26, 2026</p>

      <p>
        {site.name} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the website{" "}
        {site.url} (the &quot;Site&quot;). This Privacy Policy explains how we collect,
        use, and protect information when you use our Site.
      </p>

      <h2>Information We Collect</h2>
      <p>We may collect the following information:</p>
      <ul>
        <li>
          <strong>Information you provide.</strong> When you contact us or purchase a
          card, we may collect your name, email address, and any details you choose
          to share with us.
        </li>
        <li>
          <strong>Payment information.</strong> If and when online purchasing is
          enabled, payments are processed by a third-party payment provider. We do not
          store your full payment card details on our servers.
        </li>
        <li>
          <strong>Usage data.</strong> Like most websites, we may automatically collect
          basic information such as your browser type, device, and pages visited to help
          us improve the Site.
        </li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To provide and operate the Site and fulfill your orders.</li>
        <li>To respond to your questions and provide customer support.</li>
        <li>To improve our Site and services.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2>Cookies</h2>
      <p>
        The Site may use cookies and similar technologies (including local storage,
        which we use to remember the contents of your cart). You can control cookies
        through your browser settings.
      </p>

      <h2>Sharing Your Information</h2>
      <p>
        We do not sell your personal information. We may share information with
        service providers who help us operate the Site (such as payment processors and
        hosting providers), or when required by law.
      </p>

      <h2>Data Security</h2>
      <p>
        We take reasonable measures to protect your information, but no method of
        transmission over the internet is completely secure.
      </p>

      <h2>Your Rights</h2>
      <p>
        You may request access to, correction of, or deletion of your personal
        information by contacting us.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Our Site is not directed to children under 13, and we do not knowingly collect
        personal information from children.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be posted on
        this page with an updated date.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, contact us at{" "}
        <a href={`mailto:${site.contactEmail}`} className="text-gold-dark hover:underline">
          {site.contactEmail}
        </a>
        .
      </p>

      <p className="mt-8 text-sm italic text-neutral-500">
        This template is provided for convenience and is not legal advice. Please have
        it reviewed by a qualified professional before launch.
      </p>
    </div>
  );
}
