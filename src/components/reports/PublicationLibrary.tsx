"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { publicationCategories, publications } from "@/data/stories";
import { cn } from "@/lib/utils";

export function PublicationLibrary() {
  const [category, setCategory] = useState<(typeof publicationCategories)[number]>("All");
  const visible = useMemo(
    () => (category === "All" ? publications : publications.filter((item) => item.category === category)),
    [category],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="toolbar" aria-label="Filter publications">
        {publicationCategories.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
            className={cn(
              "border px-3 py-2 text-[0.7rem] tracking-[0.12em] uppercase",
              category === item ? "border-forest bg-forest text-ivory" : "border-charcoal/15",
            )}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-10 divide-y divide-charcoal/10 border-y border-charcoal/10">
        {visible.map((item) => (
          <article key={item.title} className="grid gap-4 py-8 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="text-sm text-charcoal/50">{item.year}</p>
              <p className="mt-2 text-xs tracking-[0.14em] uppercase text-forest/60">{item.category}</p>
            </div>
            <div className="md:col-span-6">
              <h2 className="font-display text-2xl text-forest">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-charcoal/75">{item.summary}</p>
            </div>
            <div className="md:col-span-3 md:text-right">
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-xs tracking-[0.14em] uppercase text-forest"
                  {...(item.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {item.action}
                </Link>
              ) : (
                <p className="text-xs tracking-[0.14em] uppercase text-charcoal/45">{item.action}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
