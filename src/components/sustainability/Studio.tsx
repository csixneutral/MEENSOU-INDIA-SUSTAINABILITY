"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { offices, site, sundariFieldOffices } from "@/data/site";
import { reportingNotes, sdgs } from "@/data/impact";
import { projects as flagshipProjects } from "@/data/projects";
import { stories } from "@/data/stories";
import { CountUp } from "@/components/shared/CountUp";
import { Status } from "@/components/shared/Status";
import { ParallaxImage } from "@/components/shared/ParallaxImage";
import { ImpactMap } from "@/components/home/ImpactMap";
import { Technology } from "@/components/home/Technology";

const ease = [0.22, 1, 0.36, 1] as const;

const metrics = [
  {
    end: 34818,
    suffix: "",
    label: "Clean cookstoves distributed",
    note: "20,818 Utkal Uday and 14,000 Koshal, as published.",
  },
  {
    end: 45000,
    suffix: "+",
    label: "Households benefited",
    note: "Families reached, from the company projects overview.",
  },
  {
    end: 1.2,
    decimals: 1,
    suffix: "M+",
    label: "Mangrove saplings planted",
    note: "Reported planting. Three million is the stated ambition.",
  },
  {
    end: 2000,
    suffix: "+",
    label: "Communities engaged",
    note: "Villages reached across the published portfolio.",
  },
];

const pillars = [
  {
    id: "climate",
    index: "01",
    title: "Environmental responsibility",
    text: "Native mangrove restoration in the Indian Sundarbans, nursery stock for replanting, and a cookstove programme that lowers the wood a household burns.",
    href: "#projects",
  },
  {
    id: "community",
    index: "02",
    title: "Social responsibility",
    text: "Rural and tribal households, cleaner kitchens, training on the tidal flat, and consultations held in the villages the projects affect.",
    href: "#communities",
  },
  {
    id: "governance",
    index: "03",
    title: "Governance and transparency",
    text: "Satellite checks, field forms, GPS and return visits. Figures on this page stay labeled as reported, targeted, or not yet published.",
    href: "#reports",
  },
];

const records = [
  {
    title: "Project Sundari public brief",
    detail: "Area, species, nurseries, blocks and the VCS / VM0033 framework.",
    href: "https://www.meensou.com/sundari-details/",
  },
  {
    title: "Utkal Uday project site",
    detail: "Districts, stove total and stated cookstove performance.",
    href: "https://utkaluday.net/",
  },
  {
    title: "Koshal project site",
    detail: "Linked from Meensou. Distribution figures used here come from meensou.com/projects.",
    href: "https://www.koshal.info/",
  },
];

const portraits = stories.filter((story) => story.image);
const writtenStories = stories.filter((story) => !story.image);

const sundariNurseries = [
  "Banashyam Nagar",
  "Bipradaspur",
  "DS Gosaba",
  "G-Plot",
  "Herembogopalpur",
  "Kachukhali",
  "Moushuni",
  "Rangabelia",
  "Rudranagar",
  "Shibrampur",
];

function Rise({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function Studio() {
  const reduce = useReducedMotion();

  return (
    <div className="sustainability-page">
      <section className="relative pt-28 pb-24 md:pt-32 md:pb-32">
        <div className="shell">
          <motion.div
            initial={reduce ? false : "hidden"}
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
            }}
          >
            <motion.p
              variants={reduce ? undefined : { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
              className="eyebrow text-forest/60"
            >
              Sustainability · Meensou India
            </motion.p>
            <motion.h1
              variants={reduce ? undefined : { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } } }}
              className="mt-5 font-serif text-[clamp(2.8rem,5.6vw,5.6rem)] leading-[0.92] text-balance text-forest"
            >
              Our planet.
              <span className="block italic">Our people.</span>
              <span className="block">Our responsibility.</span>
            </motion.h1>
          </motion.div>
          <div className="mt-10 grid items-end gap-10 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-5"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
          >
            <p className="max-w-md text-lg leading-8 text-charcoal/75">
              {site.tagline} Mangrove restoration on the Sundarbans coast, and cleaner kitchens across rural Odisha. The figures here are the ones Meensou has published.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a
                href="#impact"
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                className="rounded-full bg-forest px-5 py-3 text-[0.72rem] font-semibold tracking-[0.16em] text-ivory uppercase"
              >
                See the record
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                className="rounded-full border border-forest/20 bg-white/70 px-5 py-3 text-[0.72rem] font-semibold tracking-[0.16em] text-forest uppercase"
              >
                Projects
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="relative lg:col-span-7"
            initial={reduce ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-forest sm:aspect-[5/4] lg:aspect-[4/5]">
              <ParallaxImage
                src="/media/field-community.jpg"
                alt="Young mangrove saplings in tidal channels, with forest beyond, in the Indian Sundarbans"
                priority
                sizes="(min-width: 1024px) 46vw, 100vw"
              />
            </div>
            <motion.aside
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease }}
              className="absolute -bottom-6 left-4 max-w-xs rounded-3xl border border-white/70 bg-white/90 p-5 shadow-[0_20px_50px_rgba(18,61,47,0.16)] backdrop-blur md:left-8"
            >
              <p className="eyebrow text-gold">Reported</p>
              <p className="mt-2 font-serif text-4xl text-forest">1.2M+</p>
              <p className="mt-1 text-sm leading-6 text-charcoal/70">Mangrove saplings planted. Three million remains the stated ambition.</p>
            </motion.aside>
          </motion.div>
          </div>
        </div>
      </section>

      <section id="overview" className="py-20 md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:items-center">
          <Rise className="lg:col-span-5">
            <p className="eyebrow text-forest/55">Commitment</p>
            <h2 className="mt-4 font-serif text-[clamp(2.4rem,4.6vw,4.4rem)] leading-[0.96] text-forest">
              A climate result and a household result, designed as one piece of work.
            </h2>
          </Rise>
          <Rise delay={0.08} className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-5 text-lg leading-8 text-charcoal/78">
              <p>
                Meensou India Private Limited works in the Sundarbans and in rural Odisha. Carbon work runs through mangrove restoration, and through the replacement of smoky wood fires with the Prathamesh-1 improved cookstove.
              </p>
              <p>
                No issued credit total is published, so none is shown. Training, nurseries and follow-up are how the work is meant to last.
              </p>
            </div>
            <a href="#impact" className="mt-8 inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.16em] text-forest uppercase">
              Explore the impact
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </Rise>
        </div>
      </section>

      <section id="impact" className="pb-20 md:pb-28">
        <div className="shell">
          <Rise>
            <p className="eyebrow text-forest/55">Impact</p>
            <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2.4rem,4.6vw,4.4rem)] leading-[0.96] text-forest">
              Published figures, labeled as they stand.
            </h2>
          </Rise>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric, index) => (
              <Rise key={metric.label} delay={index * 0.05}>
                <motion.article
                  whileHover={reduce ? undefined : { y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="flex h-full flex-col rounded-[1.6rem] border border-charcoal/10 bg-white p-6 shadow-[0_10px_30px_rgba(18,61,47,0.05)]"
                >
                  <p className="text-sm text-charcoal/60">{metric.label}</p>
                  <p className="mt-4 font-serif text-5xl text-forest">
                    <CountUp end={metric.end} suffix={metric.suffix} decimals={metric.decimals} label={metric.label} />
                  </p>
                  <p className="mt-4 text-sm leading-6 text-charcoal/60">{metric.note}</p>
                </motion.article>
              </Rise>
            ))}
          </div>
          <Rise className="mt-4">
            <article className="rounded-[1.6rem] border border-dashed border-forest/25 bg-white/50 p-6 md:flex md:items-end md:justify-between">
              <div>
                <p className="eyebrow text-forest/50">Not published</p>
                <p className="mt-3 font-serif text-4xl text-forest/40">—</p>
                <p className="mt-2 max-w-xl text-sm leading-6 text-charcoal/65">
                  Verified emission reductions. No issued tonne total is published. This space stays empty until one is.
                </p>
              </div>
            </article>
          </Rise>
          <ol className="mt-10 max-w-3xl space-y-4">
            {reportingNotes.map((note) => (
              <li key={note} className="border-t border-charcoal/10 pt-4 text-sm leading-7 text-charcoal/65">
                {note}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="pillars" className="pb-20 md:pb-28">
        <div className="shell">
          <Rise className="max-w-2xl">
            <p className="eyebrow text-forest/55">ESG</p>
            <h2 className="mt-4 font-serif text-[clamp(2.4rem,4.6vw,4.4rem)] leading-[0.96] text-forest">
              Three doors into the same work.
            </h2>
          </Rise>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <Rise key={pillar.id} delay={index * 0.06}>
                <motion.article
                  id={pillar.id}
                  whileHover={reduce ? undefined : { y: -8 }}
                  className="flex min-h-[340px] flex-col justify-between rounded-[1.8rem] bg-forest p-7 text-ivory"
                >
                  <div>
                    <p className="font-serif text-3xl text-gold">{pillar.index}</p>
                    <h3 className="mt-6 font-serif text-4xl leading-none">{pillar.title}</h3>
                    <p className="mt-5 text-sm leading-7 text-ivory/75">{pillar.text}</p>
                  </div>
                  <a href={pillar.href} className="mt-8 inline-flex items-center gap-2 text-[0.72rem] tracking-[0.16em] uppercase text-gold">
                    Open
                    <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                </motion.article>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="pb-8">
        <div className="shell">
          <Rise>
            <p className="eyebrow text-forest/55">Projects</p>
            <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2.4rem,4.6vw,4.4rem)] leading-[0.96] text-forest">
              The three programmes on the public record.
            </h2>
          </Rise>
          <div className="mt-14 space-y-20">
            {flagshipProjects.map((project, index) => (
              <article key={project.slug} className="border-t border-charcoal/10 pt-10">
                <div className="grid items-stretch gap-8 lg:grid-cols-12">
                  <Rise className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative min-h-[420px] overflow-hidden rounded-[1.8rem] bg-forest">
                      <ParallaxImage src={project.image} alt={project.imageAlt} sizes="(min-width: 1024px) 40vw, 100vw" />
                    </div>
                  </Rise>
                  <div className="lg:col-span-7">
                    <p className="eyebrow text-forest/50">{project.location}</p>
                    <h3 className="mt-3 font-serif text-5xl text-forest">{project.name}</h3>
                    <p className="mt-3 text-sm tracking-[0.14em] uppercase text-charcoal/55">{project.focus}</p>
                    <p className="mt-2 text-sm text-charcoal/50">{project.since}</p>
                    <p className="mt-5 text-base leading-8 text-charcoal/80">{project.description}</p>
                    <p className="mt-4 text-sm text-forest">{project.status}</p>
                    <ul className="mt-5 flex flex-wrap gap-3">
                      {project.links.map((link) => (
                        <li key={link.href}>
                          <a href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-forest/15 px-4 py-2 text-[0.72rem] tracking-[0.14em] text-forest uppercase">
                            {link.label}
                            <ArrowUpRight className="size-3.5" aria-hidden />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-3xl bg-white p-5">
                      <Status status={metric.status} />
                      <dt className="mt-3 font-serif text-3xl text-forest">{metric.value}</dt>
                      <dd className="mt-1 text-sm text-charcoal/75">{metric.label}</dd>
                      <dd className="mt-2 text-sm leading-6 text-charcoal/55">{metric.note}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-10 grid gap-8 lg:grid-cols-2">
                  <div>
                    <h4 className="font-serif text-2xl text-forest">How it is carried out</h4>
                    <ol className="mt-5 space-y-5">
                      {project.approach.map((step, stepIndex) => (
                        <li key={step.title} className="grid grid-cols-[auto_1fr] gap-4">
                          <span className="font-serif text-gold">0{stepIndex + 1}</span>
                          <div>
                            <p className="text-forest">{step.title}</p>
                            <p className="mt-1 text-sm leading-6 text-charcoal/70">{step.text}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl text-forest">Places named in the record</h4>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.places.map((place) => (
                        <li key={place} className="rounded-full bg-white px-3 py-2 text-sm text-forest">
                          {place}
                        </li>
                      ))}
                    </ul>
                    {project.slug === "sundari" ? (
                      <div className="mt-8">
                        <h4 className="font-serif text-2xl text-forest">Nurseries named on the project page</h4>
                        <p className="mt-2 text-sm leading-6 text-charcoal/60">Ten locations are named within a network reported as 11 nurseries.</p>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {sundariNurseries.map((nursery) => (
                            <li key={nursery} className="rounded-full bg-white px-3 py-2 text-sm">{nursery}</li>
                          ))}
                        </ul>
                        <h4 className="mt-8 font-serif text-2xl text-forest">Field offices</h4>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {sundariFieldOffices.map((office) => (
                            <li key={office} className="rounded-full bg-white px-3 py-2 text-sm">{office}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ImpactMap />
      <Technology />

      <section id="communities" className="py-20 md:py-28">
        <div className="shell">
          <Rise className="max-w-2xl">
            <p className="eyebrow text-forest/55">Communities</p>
            <h2 className="mt-4 font-serif text-[clamp(2.4rem,4.6vw,4.4rem)] leading-[0.96] text-forest">
              Field records, without invented quotations.
            </h2>
            <p className="mt-5 text-lg leading-8 text-charcoal/75">
              These are field records Meensou has published. Quotations are not written for people who did not give them.
            </p>
          </Rise>
          <div className="mt-12 grid gap-4 md:grid-cols-12">
            {portraits.map((story, index) => (
              <Rise
                key={story.id}
                className={index === 0 ? "md:col-span-7" : index === 1 ? "md:col-span-5" : "md:col-span-4"}
              >
                <figure className="overflow-hidden rounded-[1.6rem] bg-white">
                  <div className={`relative ${index === 0 ? "min-h-[460px]" : "min-h-[280px]"}`}>
                    <ParallaxImage src={story.image!} alt={story.alt ?? ""} sizes="(min-width: 768px) 40vw, 100vw" />
                  </div>
                  <figcaption className="p-5">
                    <p className="eyebrow text-gold">{story.place} · {story.year}</p>
                    <p className="mt-2 font-serif text-2xl text-forest">{story.title}</p>
                    <p className="mt-2 text-sm leading-6 text-charcoal/70">{story.text}</p>
                  </figcaption>
                </figure>
              </Rise>
            ))}
          </div>
          {writtenStories.length > 0 ? (
            <div className="mt-12 max-w-3xl">
              {writtenStories.map((story) => (
                <article key={story.id} className="border-t border-charcoal/10 py-6">
                  <p className="eyebrow text-forest/50">{story.place} · {story.year}</p>
                  <h3 className="mt-2 font-serif text-3xl text-forest">{story.title}</h3>
                  <p className="mt-3 leading-7 text-charcoal/75">{story.text}</p>
                  <p className="mt-2 text-xs tracking-[0.12em] uppercase text-charcoal/45">{story.source}</p>
                </article>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section id="reports" className="pb-20 md:pb-28">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Rise className="lg:col-span-5">
            <p className="eyebrow text-forest/55">Goals and records</p>
            <h2 className="mt-4 font-serif text-[clamp(2.3rem,4vw,3.8rem)] leading-[0.96] text-forest">
              Aligned with global goals. Not certified by them.
            </h2>
            <p className="mt-5 text-lg leading-8 text-charcoal/75">
              The goals below are the ones Meensou’s published activities speak to. Listing them is not a United Nations endorsement, a certification, or a formal affiliation.
            </p>
          </Rise>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {sdgs.map((goal) => (
              <article key={goal.number} className="rounded-3xl bg-white p-4">
                <div className="flex items-center gap-3">
                  <span
                    className="flex size-10 items-center justify-center rounded-2xl text-sm font-semibold text-white"
                    style={{ backgroundColor: goal.color }}
                    aria-hidden
                  >
                    {goal.number}
                  </span>
                  <h3 className="text-base text-forest">
                    <span className="sr-only">SDG {goal.number}: </span>
                    {goal.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-charcoal/70">{goal.text}</p>
                <p className="mt-2 text-xs tracking-[0.08em] text-charcoal/45">{goal.projects}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="shell mt-16">
          <h3 className="font-serif text-4xl text-forest">Public records</h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-charcoal/65">
            A consolidated sustainability report PDF has not been published. The links below are the public project records that exist today.
          </p>
          <ul className="mt-6 grid gap-3 lg:grid-cols-3">
            {records.map((record) => (
              <li key={record.title}>
                <a
                  href={record.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-full flex-col justify-between rounded-[1.5rem] border border-charcoal/10 bg-white p-5 transition hover:-translate-y-1"
                >
                  <span>
                    <span className="block font-serif text-2xl text-forest">{record.title}</span>
                    <span className="mt-2 block text-sm leading-6 text-charcoal/65">{record.detail}</span>
                  </span>
                  <span className="mt-6 inline-flex items-center gap-1 text-[0.72rem] tracking-[0.14em] text-forest uppercase">
                    Open <ArrowUpRight className="size-3.5" aria-hidden />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-20">
        <div className="shell">
          <div className="relative overflow-hidden rounded-[2rem] bg-forest text-ivory">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[320px]">
                <ParallaxImage
                  src="/media/south24.jpeg"
                  alt="Mangrove forest along a quiet Sundarbans channel"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-col justify-end p-8 md:p-12">
                <p className="eyebrow text-gold">Connect</p>
                <h2 className="mt-4 font-serif text-[clamp(2.4rem,4.5vw,4.4rem)] leading-[0.96]">
                  A sustainable future starts with the work already underway.
                </h2>
                <p className="mt-5 max-w-md text-lg leading-8 text-ivory/75">
                  Partnerships, project questions and requests for the published figures come to the same address.
                </p>
                <motion.a
                  href="#contact"
                  whileHover={reduce ? undefined : { y: -2 }}
                  className="mt-8 inline-flex w-fit rounded-full bg-ivory px-6 py-3 text-[0.72rem] font-semibold tracking-[0.16em] text-forest uppercase"
                >
                  Connect With Meensou
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="pb-24">
        <div className="shell">
          <p className="eyebrow text-forest/55">Contact</p>
          <h2 className="mt-4 font-serif text-5xl text-forest">Write to the team.</h2>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-lg">
            <a className="text-forest underline decoration-gold underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.phoneHref}>{site.phone}</a>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {offices.map((office) => (
              <li key={office.region} className="rounded-[1.5rem] bg-white p-6">
                <p className="font-serif text-3xl text-forest">{office.region}</p>
                <p className="mt-1 text-sm text-charcoal/50">{office.role}</p>
                <p className="mt-4 text-sm leading-6">{office.lines.join(", ")}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
