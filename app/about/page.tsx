import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${site.name} and our mission to support local restaurants in ${site.area}.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink py-16 text-white">
        <div className="container-page">
          <h1 className="font-serif text-4xl font-bold">About Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Supporting local restaurants across {site.area}, one card at a time.
          </p>
        </div>
      </section>

      <div className="container-page py-16">
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-neutral-700">
          <p>
            {/* TODO: Replace this placeholder story with your real founding story. */}
            The Triangle Card started with a simple idea: make it easy to enjoy
            the incredible local restaurants around Cary, Apex, and Morrisville
            while saving money and supporting the small businesses that make our
            community special.
          </p>
          <p>
            Every card features 11 handpicked local restaurants, each offering a
            reusable coupon you can use again and again throughout the year. It&apos;s
            a win-win: you discover new favorites and save on the ones you already
            love, and local restaurants get more people through their doors.
          </p>
          <p>
            We&apos;re proud to be part of the Triangle community, and we&apos;re grateful to
            every restaurant partner and cardholder who makes this possible.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link href="/products" className="btn-gold">
            Get your card — ${site.price}
          </Link>
        </div>
      </div>
    </>
  );
}
