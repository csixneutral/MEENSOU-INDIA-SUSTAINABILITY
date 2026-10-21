"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function MaskImage({
  src,
  alt,
  sizes,
  className = "",
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
}) {
  const frame = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = frame.current;
    if (!node) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        node,
        { clipPath: "inset(14% 0 0 0)" },
        {
          clipPath: "inset(0% 0 0 0)",
          duration: 1.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: node,
            start: "top 82%",
            once: true,
          },
        },
      );
    });
    return () => mm.revert();
  }, []);

  return (
    <div ref={frame} className={`relative h-full min-h-[420px] overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
    </div>
  );
}
