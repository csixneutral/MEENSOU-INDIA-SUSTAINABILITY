"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const onPage = pathname === "/" || pathname === "/sustainability";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-ivory/95 text-forest shadow-[0_1px_0_rgba(32,44,43,0.08)] backdrop-blur" : "text-ivory",
      )}
    >
      <div className="shell flex h-16 items-center justify-between">
        <a href={onPage ? "#content" : "/"} className="flex items-center gap-3" aria-label="Meensou India">
          <Image src="/media/logo.png" alt="" width={32} height={32} className="h-8 w-8 bg-ivory object-cover" priority />
          <span className="font-display text-sm tracking-[0.22em]">MEENSOU</span>
        </a>
        <a
          href={onPage ? "#contact" : "/#contact"}
          className={cn(
            "text-[0.72rem] tracking-[0.16em] uppercase",
            scrolled ? "text-forest" : "text-ivory",
          )}
        >
          Connect
        </a>
      </div>
    </header>
  );
}
