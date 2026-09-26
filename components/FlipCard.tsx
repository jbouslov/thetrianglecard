"use client";

import Image from "next/image";
import { useState } from "react";

// Interactive card that flips from front to back on hover (desktop) or tap
// (mobile/touch) to reveal the participating restaurants and deals.
export default function FlipCard({
  className = "",
}: {
  className?: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`[perspective:1400px] ${className}`}>
      {/*
        The interaction handlers live on THIS box, which is normalized to the
        card's exact ratio (no transparent padding), so it only flips when the
        card itself is hovered/tapped — not the surrounding space or caption.
      */}
      <div
        className="relative w-full cursor-pointer overflow-hidden rounded-2xl shadow-2xl [transform-style:preserve-3d] transition-transform duration-700 ease-out"
        style={{
          aspectRatio: "1512 / 953",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        onClick={() => setFlipped((v) => !v)}
        role="button"
        tabIndex={0}
        aria-label="The Triangle Card — flip to see the restaurants and deals"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setFlipped((v) => !v);
          }
        }}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <Image
            src="/card-front.png"
            alt="The Triangle Card — front"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <Image
            src="/card-back.png"
            alt="The Triangle Card — back, showing participating restaurants and deals"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <p className="mt-3 text-center text-sm text-current opacity-60">
        Hover or tap to flip
      </p>
    </div>
  );
}
