import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { Status } from "@/components/shared/Status";
import { headlineMetrics, reportingNotes } from "@/data/impact";
import { projects } from "@/data/projects";
import { Technology } from "@/components/home/Technology";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "Reported results, targets and unpublished items from Meensou India’s mangrove and cookstove projects, with sources and known conflicts.",
  alternates: { canonical: "/impact" },
};

export default function ImpactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our impact"
        title="What is reported, what is still a target, and what is not published."
        lede="International partners should be able to see the difference. This page keeps those categories apart."
      />
      <section className="bg-ivory py-16">
        <div className="shell grid gap-px bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-3">
          {headlineMetrics.map((metric) => (
            <article key={metric.id} className="bg-ivory p-7">
              <Status status={metric.status} />
              <p className="display mt-4 text-5xl text-forest">{metric.value}</p>
              <h2 className="mt-3 text-lg">{metric.label}</h2>
              <p className="mt-3 text-sm leading-6 text-charcoal/70">{metric.detail}</p>
              <p className="mt-4 text-xs tracking-[0.12em] uppercase text-charcoal/45">{metric.source}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="shell">
          <h2 className="display text-5xl text-forest">Project-level results</h2>
          <div className="mt-12 space-y-16">
            {projects.map((project) => (
              <article key={project.slug}>
                <p className="eyebrow text-forest/50">{project.location}</p>
                <h3 className="display mt-3 text-4xl text-forest">{project.name}</h3>
                <p className="mt-3 max-w-3xl text-charcoal/75">{project.description}</p>
                <dl className="mt-8 divide-y divide-charcoal/10 border-y border-charcoal/10">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="grid gap-2 py-4 md:grid-cols-12 md:items-baseline">
                      <dt className="font-display text-2xl text-forest md:col-span-3">{metric.value}</dt>
                      <dd className="text-sm md:col-span-4">{metric.label}</dd>
                      <dd className="text-sm text-charcoal/60 md:col-span-5">
                        <Status status={metric.status} />
                        <span className="mt-1 block">{metric.note}</span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Technology />
      <section className="bg-ivory py-20">
        <div className="shell max-w-4xl">
          <h2 className="display text-5xl text-forest">How to read these figures</h2>
          <ol className="mt-8 space-y-5">
            {reportingNotes.map((note, index) => (
              <li key={note} className="grid grid-cols-[auto_1fr] gap-4 border-t border-charcoal/10 pt-5">
                <span className="font-serif text-2xl text-gold">0{index + 1}</span>
                <p className="leading-7 text-charcoal/80">{note}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
