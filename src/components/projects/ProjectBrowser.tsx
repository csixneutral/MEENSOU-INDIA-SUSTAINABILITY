"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const filters = ["All", "Mangroves", "Cookstoves"] as const;

export function ProjectBrowser() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = useMemo(() => {
    if (filter === "Mangroves") return projects.filter((project) => project.slug === "sundari");
    if (filter === "Cookstoves") return projects.filter((project) => project.slug !== "sundari");
    return projects;
  }, [filter]);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="toolbar" aria-label="Filter projects">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
            className={cn(
              "border px-4 py-2 text-xs tracking-[0.14em] uppercase",
              filter === item ? "border-forest bg-forest text-ivory" : "border-charcoal/20",
            )}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-10 divide-y divide-charcoal/10 border-y border-charcoal/10">
        {visible.map((project) => (
          <article key={project.slug} className="grid gap-6 py-10 lg:grid-cols-12 lg:items-center">
            <div className="relative aspect-[16/10] overflow-hidden bg-sage/20 lg:col-span-5">
              <Image src={project.image} alt={project.imageAlt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
            <div className="lg:col-span-7">
              <p className="eyebrow text-forest/50">
                {project.index} · {project.location}
              </p>
              <h2 className="display mt-3 text-5xl text-forest">{project.name}</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-charcoal/75">{project.summary}</p>
              <p className="mt-4 text-sm text-charcoal/55">{project.status}</p>
              <Link href={`/projects/${project.slug}`} className="mt-6 inline-flex text-xs tracking-[0.16em] uppercase text-forest">
                Explore project
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
