import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { sdgs } from "@/data/impact";
import { Status } from "@/components/shared/Status";
import { ButtonLink } from "@/components/shared/ButtonLink";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { images: [project.image] },
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const relatedGoals = sdgs.filter((goal) => project.sdgs.includes(goal.number));

  return (
    <article>
      <header className="relative min-h-[70vh] bg-charcoal text-ivory">
        <Image src={project.heroImage} alt={project.imageAlt} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/45 to-charcoal/25" />
        <div className="shell relative flex min-h-[70vh] flex-col justify-end py-16">
          <p className="eyebrow text-gold">
            {project.index} · {project.location}
          </p>
          <h1 className="display mt-4 max-w-4xl text-[clamp(3rem,7vw,6.5rem)]">{project.name}</h1>
          <p className="mt-4 max-w-xl text-lg text-ivory/85">{project.focus}</p>
        </div>
      </header>
      <section className="bg-ivory py-16">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-lg leading-8 text-charcoal/80">{project.description}</p>
            <p className="mt-6 text-sm text-charcoal/55">{project.since}</p>
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <p className="eyebrow text-forest/50">Status</p>
            <p className="mt-3 font-display text-2xl text-forest">{project.status}</p>
            <ul className="mt-6 space-y-2 text-sm">
              {project.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="underline decoration-gold underline-offset-4" target="_blank" rel="noreferrer">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <dl className="shell mt-14 grid gap-8 border-t border-charcoal/10 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <Status status={metric.status} />
              <dt className="display mt-3 text-4xl text-forest">{metric.value}</dt>
              <dd className="mt-2 text-sm text-charcoal/70">{metric.label}</dd>
              <dd className="mt-2 text-sm leading-6 text-charcoal/55">{metric.note}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="bg-white py-20">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <h2 className="display text-5xl text-forest lg:col-span-4">How it is carried out</h2>
          <ol className="lg:col-span-8">
            {project.approach.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[auto_1fr] gap-5 border-t border-charcoal/10 py-6">
                <span className="font-serif text-3xl text-gold">0{index + 1}</span>
                <div>
                  <h3 className="font-display text-2xl text-forest">{step.title}</h3>
                  <p className="mt-2 leading-7 text-charcoal/75">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="bg-forest py-16 text-ivory">
        <div className="shell">
          <h2 className="display text-4xl">Places named in the project record</h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            {project.places.map((place) => (
              <li key={place} className="border border-white/20 px-4 py-2 text-sm">
                {place}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-ivory py-16">
        <div className="shell">
          <h2 className="display text-4xl text-forest">Field record</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {project.gallery.map((image) => (
              <figure key={image.src} className="relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
                </div>
                <figcaption className="mt-3 text-sm text-charcoal/70">
                  {image.caption} · {image.place}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="shell">
          <h2 className="display text-4xl text-forest">Goals this project speaks to</h2>
          <p className="mt-3 max-w-2xl text-sm text-charcoal/60">Contribution only. Not a United Nations endorsement.</p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {relatedGoals.map((goal) => (
              <li key={goal.number} className="grid grid-cols-[auto_1fr] gap-4 border border-charcoal/10 p-4">
                <span className="flex h-10 w-10 items-center justify-center text-white" style={{ background: goal.color }}>
                  {goal.number}
                </span>
                <div>
                  <p className="font-display text-lg text-forest">{goal.title}</p>
                  <p className="mt-1 text-sm leading-6 text-charcoal/70">{goal.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <ButtonLink href="/contact?topic=project">Discuss this project</ButtonLink>
          </div>
        </div>
      </section>
    </article>
  );
}
