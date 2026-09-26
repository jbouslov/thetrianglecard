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
    <div className={className}>
      {/*
        STATIC hitbox wrapper. The hover handlers live here and this box never
        moves, so entering flips and leaving THIS box flips back — no glitching
        from the rotating card changing its own hitbox. It holds the 3D
        perspective and its size is fixed by the card's aspect ratio.
      */}
      <div
        className="relative w-full cursor-pointer [perspective:1400px]"
        style={{ aspectRatio: "1512 / 953" }}
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
        {/*
          The flipper rotates. It must NOT have overflow clipping, or the browser
          flattens the 3D context and the back face shows the (mirrored) front.
          Rounded corners are applied to each face instead.
        */}
        <div
          className="absolute inset-0 [transform-style:preserve-3d] transition-transform duration-700 ease-out"
          style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
        >
          {/* Front */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-2xl [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
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
          <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-2xl [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)]">
            <Image
              src="/card-back.png"
              alt="The Triangle Card — back, showing participating restaurants and deals"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-sm text-current opacity-60">
        Hover or tap to flip
      </p>
    </div>
  );
}
