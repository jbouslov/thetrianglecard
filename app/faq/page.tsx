import type { Metadata } from "next";
import { site } from "@/lib/site";
import { restaurants } from "@/lib/restaurants";
import FAQItem from "@/components/FAQItem";

const count = restaurants.length;

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about The Triangle Card.",
};

// TODO: Update these answers to match your real card terms.
const faqs = [
  {
    question: "What is The Triangle Card?",
    answer: `The Triangle Card is a reusable coupon card featuring ${count} local restaurants in ${site.area}. For a one-time price of $${site.price}, you get access to deals you can use throughout the year.`,
  },
  {
    question: "How much does it cost?",
    answer: `Each card is $${site.price}. With reusable coupons at ${count} restaurants, the card easily pays for itself.`,
  },
  {
    question: "How do the reusable coupons work?",
    answer:
      "Simply present your Triangle Card at any participating restaurant to redeem that restaurant's offer. Unlike single-use coupons, you can use each deal again and again while the card is valid.",
  },
  {
    question: "Where can I use the card?",
    answer:
      "At all participating restaurants listed on our Locations page. Just show your card when you order or pay.",
  },
  {
    question: "Does the card expire?",
    answer:
      "Each card is valid for one year from the date of purchase. Check the card and each restaurant's terms for details.",
  },
  {
    question: "How do I buy a card?",
    answer: `You can purchase online right here on the site, or reach out to us at ${site.contactEmail} and we'll help you get one.`,
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-ink py-16 text-white">
        <div className="container-page">
          <h1 className="font-serif text-4xl font-bold">Frequently Asked Questions</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Everything you need to know about The Triangle Card.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        {faqs.map((f) => (
          <FAQItem key={f.question} question={f.question} answer={f.answer} />
        ))}

        <p className="mt-10 text-center text-neutral-600">
          Still have questions?{" "}
          <a href={`mailto:${site.contactEmail}`} className="font-semibold text-gold-dark hover:underline">
            Email us
          </a>
          .
        </p>
      </div>
    </>
  );
}
