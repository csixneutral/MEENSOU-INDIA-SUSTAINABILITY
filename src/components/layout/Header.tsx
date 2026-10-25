"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";

export function Header() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const onPage = pathname === "/" || pathname === "/sustainability";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-auto mx-auto flex h-14 w-full max-w-[1440px] items-center justify-between rounded-full border border-charcoal/10 bg-white/75 px-3 shadow-[0_10px_40px_rgba(18,61,47,0.08)] backdrop-blur-xl md:px-4"
      >
        <a href={onPage ? "#content" : "/"} className="flex items-center gap-3 pl-1" aria-label="Meensou India">
          <Image src="/media/logo.png" alt="" width={32} height={32} className="size-8 rounded-full bg-ivory object-cover" priority />
          <span className="font-display text-sm tracking-[0.22em] text-forest">MEENSOU</span>
        </a>
        <a
          href={onPage ? "#contact" : "/#contact"}
          className="rounded-full bg-forest px-4 py-2 text-[0.68rem] font-semibold tracking-[0.16em] text-ivory uppercase"
        >
          Connect
        </a>
      </motion.div>
    </header>
  );
}
