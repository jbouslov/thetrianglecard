"use client";

import { useState } from "react";

export default function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-black/10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-lg font-medium text-ink">{question}</span>
        <span className="ml-4 flex-none text-2xl text-gold-dark">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && <p className="pb-5 text-neutral-600">{answer}</p>}
    </div>
  );
}
