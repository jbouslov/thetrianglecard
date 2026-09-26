import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-gold/30 bg-ink text-white/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        {/* Brand */}
        <div>
          <p className="font-serif text-lg font-bold">
            <span className="text-white">The Triangle</span>{" "}
            <span className="text-gold">Card</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-white/60">{site.description}</p>
        </div>

        {/* Explore */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/products" className="hover:text-gold">Products</Link></li>
            <li><Link href="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link href="/locations" className="hover:text-gold">Locations</Link></li>
            <li><Link href="/faq" className="hover:text-gold">FAQ</Link></li>
            <li><Link href="/cart" className="hover:text-gold">Cart</Link></li>
          </ul>
        </div>

        {/* Contact + legal */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">Get in touch</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`mailto:${site.contactEmail}`} className="hover:text-gold">
                {site.contactEmail}
              </a>
            </li>
            <li className="text-white/60">{site.area}</li>
          </ul>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/privacy-policy" className="hover:text-gold">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-gold">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-white/50 sm:px-6">
          © {year} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
