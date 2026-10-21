"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { id: "overview", label: "Overview" },
  { id: "impact", label: "Our Impact" },
  { id: "pillars", label: "ESG Pillars" },
  { id: "projects", label: "Projects" },
  { id: "communities", label: "Communities" },
  { id: "reports", label: "Reports" },
];

export function SectionNav() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const nodes = links
      .map((link) => document.getElementById(link.id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.15, 0.4] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="On this page"
      className="sticky top-[4.5rem] z-40 border-b border-charcoal/10 bg-ivory/90 backdrop-blur"
    >
      <ul className="shell flex gap-1 overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {links.map((link) => (
          <li key={link.id} className="shrink-0">
            <a
              href={`#${link.id}`}
              aria-current={active === link.id ? "true" : undefined}
              className={cn(
                "inline-flex px-3 py-2 text-[0.68rem] tracking-[0.16em] uppercase",
                active === link.id ? "text-forest shadow-[inset_0_-2px_0_#d8a95d]" : "text-charcoal/55 hover:text-forest",
              )}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
