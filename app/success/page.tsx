"use client";

import Link from "next/link";
import { useEffect } from "react";
import { site } from "@/lib/site";
import { useCart } from "@/components/CartProvider";

export default function SuccessPage() {
  const { clear } = useCart();

  // Empty the cart once the purchase is complete.
  useEffect(() => {
    clear();
  }, [clear]);

  return (
    <div className="container-page py-24 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold text-3xl text-ink">
        ✓
      </div>
      <h1 className="mt-6 font-serif text-3xl font-bold text-ink sm:text-4xl">
        Thank you for your order!
      </h1>
      <p className="mx-auto mt-4 max-w-md text-neutral-600">
        Your payment was successful and a receipt is on its way to your email.
        We&apos;ll be in touch about your Triangle Card. If you have any questions,
        reach us at{" "}
        <a
          href={`mailto:${site.contactEmail}`}
          className="font-semibold text-gold-dark hover:underline"
        >
          {site.contactEmail}
        </a>
        .
      </p>
      <Link href="/" className="btn-gold mt-8">
        Back to home
      </Link>
    </div>
  );
}
