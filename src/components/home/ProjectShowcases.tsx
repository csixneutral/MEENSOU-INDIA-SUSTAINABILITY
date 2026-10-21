import Image from "next/image";
import { projects } from "@/data/projects";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { Status } from "@/components/shared/Status";
import { cn } from "@/lib/utils";

export function ProjectShowcases() {
  return (
    <section className="bg-white" aria-labelledby="projects-heading">
      <div className="shell py-20 md:py-28">
        <p className="eyebrow text-forest/60">Flagship projects</p>
        <h2 id="projects-heading" className="display mt-4 max-w-4xl text-[clamp(2.5rem,5vw,4.8rem)] text-forest">
          Projects Creating Change Where It Matters.
        </h2>
      </div>
      <div>
        {projects.map((project, index) => (
          <article key={project.slug} className="grid lg:min-h-[86vh] lg:grid-cols-2">
            <div className={cn("relative min-h-[420px]", index % 2 === 1 && "lg:order-2")}>
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className={cn("flex flex-col justify-center bg-ivory px-6 py-16 md:px-14", index % 2 === 1 && "lg:order-1")}>
              <p className="eyebrow text-forest/60">
                {project.index} · {project.location}
              </p>
              <h3 className="display mt-4 text-[clamp(2.6rem,4vw,4.5rem)] text-forest">{project.name}</h3>
              <p className="mt-3 text-sm tracking-[0.14em] uppercase text-forest/70">{project.focus}</p>
              <p className="mt-6 max-w-xl text-lg leading-8 text-charcoal/80">{project.summary}</p>
              <dl className="mt-8 grid max-w-xl grid-cols-2 gap-x-6 gap-y-6 border-t border-charcoal/15 pt-6">
                {project.metrics.slice(0, 4).map((metric) => (
                  <div key={metric.label}>
                    <Status status={metric.status} />
                    <dt className="display mt-2 text-3xl text-forest">{metric.value}</dt>
                    <dd className="mt-1 text-sm text-charcoal/70">{metric.label}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <ButtonLink href={`/projects/${project.slug}`} variant="dark">
                  Explore Project
                </ButtonLink>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
