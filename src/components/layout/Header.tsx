"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const pathname = usePathname();
  const onPage = pathname === "/" || pathname === "/sustainability";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-300 ${
        scrolled ? "bg-white text-charcoal shadow-[0_1px_0_rgba(32,44,43,0.08)]" : "bg-transparent text-ivory"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between">
        <a href={onPage ? "#content" : "/"} className="flex items-center gap-3" aria-label="Meensou India">
          <Image src="/media/logo.png" alt="" width={28} height={28} className="size-7 bg-ivory object-cover" priority />
          <span className="font-display text-[0.78rem] font-semibold tracking-[0.28em]">MEENSOU</span>
        </a>
        <a
          href={onPage ? "#contact" : "/#contact"}
          className={`border-b pb-0.5 text-[0.68rem] font-semibold tracking-[0.18em] uppercase ${scrolled ? "border-charcoal" : "border-gold"}`}
        >
          Connect
        </a>
      </div>
    </header>
  );
}
