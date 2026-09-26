"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import CartIcon from "./CartIcon";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/locations", label: "Locations" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/30 bg-ink text-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="font-serif text-xl font-bold tracking-wide">
            <span className="text-white">The Triangle</span>{" "}
            <span className="text-gold">Card</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/90 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side: cart + mobile menu button */}
        <div className="flex items-center gap-1">
          <CartIcon />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-gold/20 bg-ink md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-base font-medium text-white/90 transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
