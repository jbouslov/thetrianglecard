import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${site.name}.`,
};

export default function TermsOfServicePage() {
  return (
    <div className="prose-page">
      <h1>Terms of Service</h1>
      <p className="text-sm text-neutral-500">Last updated: September 26, 2026</p>

      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of the {site.name}{" "}
        website ({site.url}) and the purchase and use of The Triangle Card. By using
        our Site or purchasing a card, you agree to these Terms.
      </p>

      <h2>The Triangle Card</h2>
      <p>
        The Triangle Card is a reusable coupon card featuring participating local
        restaurants in {site.area}. Offers are provided by the participating
        restaurants and are subject to each restaurant&apos;s terms and availability.
      </p>
      <ul>
        <li>Each card is valid for the period stated on the card or at purchase.</li>
        <li>
          Offers may not be combined with other promotions unless stated by the
          restaurant.
        </li>
        <li>
          Participating restaurants and their offers may change without notice.
        </li>
        <li>The card has no cash value and is non-refundable once used.</li>
      </ul>

      <h2>Purchases</h2>
      <p>
        Prices are listed in U.S. dollars. When online purchasing is enabled, payment
        is processed by a third-party provider, and your order is subject to these
        Terms and the provider&apos;s terms.
      </p>

      <h2>Refunds</h2>
      <p>
        {/* TODO: Confirm your real refund policy. */}
        Please contact us at {site.contactEmail} with any issues regarding your order.
        Refund eligibility may depend on whether the card has been used.
      </p>

      <h2>Acceptable Use</h2>
      <p>
        You agree not to misuse the Site, attempt to gain unauthorized access, or use
        the card fraudulently. We reserve the right to void cards obtained or used in
        violation of these Terms.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content on this Site, including text, graphics, and logos, is the property
        of {site.name} or its partners and may not be used without permission.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        The Site and card are provided &quot;as is.&quot; To the fullest extent permitted by
        law, {site.name} is not liable for any indirect or consequential damages
        arising from your use of the Site or card. We are not responsible for the
        quality of food or service at participating restaurants.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Continued use of the Site after
        changes constitutes acceptance of the updated Terms.
      </p>

      <h2>Contact Us</h2>
      <p>
        Questions about these Terms? Contact us at{" "}
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
