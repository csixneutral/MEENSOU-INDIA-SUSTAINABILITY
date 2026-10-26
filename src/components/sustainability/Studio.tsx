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

const ease = [0.16, 1, 0.3, 1] as const;

const lines = ["Our planet.", "Our people.", "Our responsibility."];

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
    title: "Environmental",
    text: "Native mangrove restoration in the Indian Sundarbans, nursery stock for replanting, and a cookstove programme that lowers the wood a household burns.",
    href: "#projects",
    image: "/media/south24.jpeg",
    alt: "Mangrove forest along a Sundarbans channel",
  },
  {
    id: "community",
    index: "02",
    title: "Social",
    text: "Rural and tribal households, cleaner kitchens, training on the tidal flat, and consultations held in the villages the projects affect.",
    href: "#communities",
    image: "/media/mangrove-training.jpg",
    alt: "A field team teaching planting on a tidal flat",
  },
  {
    id: "governance",
    index: "03",
    title: "Governance",
    text: "Satellite checks, field forms, GPS and return visits. Figures on this page stay labeled as reported, targeted, or not yet published.",
    href: "#reports",
    image: "/media/field-visit.jpeg",
    alt: "A monitoring visit in a young mangrove plantation",
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.65, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function Studio() {
  const reduce = useReducedMotion();

  return (
    <div className="sustainability-page bg-[#efece3] text-charcoal">
      <section className="relative min-h-[100svh] overflow-hidden bg-charcoal text-ivory">
        <motion.div
          className="absolute inset-0"
          initial={reduce ? false : { scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.7, ease }}
        >
          <ParallaxImage
            src="/media/field-community.jpg"
            alt="Young mangrove saplings in tidal channels, with forest beyond, in the Indian Sundarbans"
            priority
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/75 to-charcoal/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/25 to-charcoal/35" />
        <div className="page-pad relative flex min-h-[100svh] flex-col justify-end pt-24 pb-6">
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[0.72rem] font-semibold tracking-[0.28em] text-gold uppercase"
          >
            Meensou India · Sustainability
          </motion.p>
          <h1 className="mt-5 font-display text-[clamp(3rem,6.6vw,5.8rem)] leading-[0.9] font-semibold tracking-[-0.05em]">
            {lines.map((line, index) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.85, delay: 0.12 + index * 0.1, ease }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease }}
            className="mt-6 max-w-xl text-lg text-gold"
          >
            {site.tagline}
          </motion.p>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.58, ease }}
            className="mt-3 max-w-xl text-base leading-7 text-ivory/75"
          >
            Mangrove restoration on the Sundarbans coast, and cleaner kitchens across rural Odisha. The figures here are the ones Meensou has published.
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.72 }}
            className="mt-6 grid gap-4 border-t border-white/20 pt-4 sm:grid-cols-3"
          >
            {[
              ["1.2M+", "Saplings planted"],
              ["34,818", "Cookstoves distributed"],
              [site.founded, "Founded"],
            ].map(([value, label]) => (
              <p key={label}>
                <span className="block font-display text-3xl font-semibold tracking-[-0.04em]">{value}</span>
                <span className="mt-1 block text-[0.68rem] tracking-[0.16em] text-ivory/65 uppercase">{label}</span>
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="overview" className="border-b border-charcoal/15">
        <div className="shell grid lg:grid-cols-12">
          <div className="border-charcoal/15 py-16 lg:col-span-4 lg:border-r lg:py-24 lg:pr-10">
            <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-forest/60 uppercase">Commitment</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] font-semibold tracking-[-0.04em] text-forest">
              Climate and household, built as one project.
            </h2>
          </div>
          <div className="grid lg:col-span-8 lg:grid-cols-2">
            <div className="border-charcoal/15 py-14 lg:border-r lg:px-10 lg:py-24">
              <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-gold uppercase">01</p>
              <p className="mt-4 text-[1.05rem] leading-8">
                Meensou India Private Limited works in the Sundarbans and in rural Odisha. Carbon work runs through mangrove restoration, and through the replacement of smoky wood fires with the Prathamesh-1 improved cookstove.
              </p>
            </div>
            <div className="border-t border-charcoal/15 py-14 lg:border-t-0 lg:px-10 lg:py-24">
              <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-gold uppercase">02</p>
              <p className="mt-4 text-[1.05rem] leading-8">
                No issued credit total is published, so none is shown. Training, nurseries and follow-up are how the work is meant to last.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="bg-forest text-ivory">
        <div className="shell py-16 md:py-20">
          <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-gold uppercase">Published figures</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl leading-[1.02] font-semibold tracking-[-0.04em] md:text-5xl">
            Labeled as they stand.
          </h2>
          <div className="mt-12 grid gap-px bg-white/20 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.article
              key={metric.label}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06, ease }}
              className="bg-forest px-1 py-8 md:px-6"
            >
              <p className="font-display text-[clamp(2.4rem,3.2vw,3.4rem)] font-semibold tracking-[-0.045em] tabular-nums">
                <CountUp end={metric.end} suffix={metric.suffix} decimals={metric.decimals} label={metric.label} />
              </p>
              <p className="mt-4 text-sm font-medium text-ivory">{metric.label}</p>
              <p className="mt-2 text-sm leading-6 text-ivory/60">{metric.note}</p>
            </motion.article>
          ))}
          </div>
        </div>
        <div className="shell grid gap-6 border-t border-white/15 py-8 md:grid-cols-[9rem_1fr] md:items-center">
          <p>
            <span className="block font-display text-5xl text-ivory/35">—</span>
            <span className="mt-2 block text-[0.72rem] tracking-[0.16em] text-gold uppercase">Not published</span>
          </p>
          <p className="max-w-xl text-sm leading-7 text-ivory/70">
            Verified emission reductions. No issued tonne total is published. This space stays empty until one is.
          </p>
        </div>
      </section>

      <section className="bg-[#efece3]">
        <ol className="shell grid gap-x-12 py-8 md:grid-cols-2">
          {reportingNotes.map((note, index) => (
            <li key={note} className="grid grid-cols-[2.5rem_1fr] gap-3 border-t border-charcoal/12 py-5">
              <span className="font-display text-sm text-gold">0{index + 1}</span>
              <p className="text-sm leading-7 text-charcoal/70">{note}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="pillars">
        <div className="shell flex items-end justify-between gap-6 border-b border-charcoal/15 py-12">
          <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] text-forest md:text-5xl">Three parts of the same work.</h2>
          <p className="hidden max-w-xs text-sm leading-6 text-charcoal/60 md:block">Environmental, social, and the record that holds them together.</p>
        </div>
        {pillars.map((pillar, index) => (
          <article id={pillar.id} key={pillar.id} className="grid min-h-[460px] border-b border-charcoal/15 lg:grid-cols-2">
            <div className={`relative min-h-[300px] overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <ParallaxImage src={pillar.image} alt={pillar.alt} sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            <div className="flex flex-col justify-center bg-[#efece3] px-6 py-12 md:px-14">
              <p className="font-display text-sm tracking-[0.22em] text-gold">{pillar.index}</p>
              <div className="mt-6">
                <h3 className="font-display text-[clamp(2.6rem,4vw,3.6rem)] leading-none font-semibold tracking-[-0.045em] text-forest">{pillar.title}</h3>
                <p className="mt-5 max-w-md text-[1.02rem] leading-7 text-charcoal/75">{pillar.text}</p>
                <a href={pillar.href} className="mt-8 inline-flex items-center gap-2 border-b border-forest pb-1 text-[0.72rem] font-semibold tracking-[0.16em] text-forest uppercase">
                  Open <ArrowUpRight className="size-4" aria-hidden />
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section id="projects" className="bg-white">
        <div className="shell border-b border-charcoal/15 py-14">
          <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-forest/55 uppercase">Projects</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.04em] text-forest md:text-6xl">Three programmes. One public record.</h2>
        </div>
        {flagshipProjects.map((project, index) => (
          <article key={project.slug} className="border-b border-charcoal/15">
            <div className="grid lg:grid-cols-12">
              <div className={`relative min-h-[380px] overflow-hidden lg:col-span-5 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <ParallaxImage src={project.image} alt={project.imageAlt} sizes="(min-width: 1024px) 42vw, 100vw" />
              </div>
              <div className="flex flex-col justify-center px-6 py-14 md:px-12 lg:col-span-7 lg:px-16">
                <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-gold uppercase">
                  <span className="mr-3 text-charcoal/35">0{index + 1}</span>
                  {project.location}
                </p>
                <h3 className="mt-3 font-display text-[clamp(2.4rem,3.5vw,3.5rem)] font-semibold tracking-[-0.045em] text-forest">{project.name}</h3>
                <p className="mt-3 text-sm tracking-[0.12em] uppercase text-charcoal/50">{project.focus}</p>
                <p className="mt-1 text-sm text-charcoal/45">{project.since}</p>
                <p className="mt-5 max-w-2xl text-base leading-8 text-charcoal/80">{project.description}</p>
                <p className="mt-4 text-sm font-medium text-forest">{project.status}</p>
                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                  {project.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 border-b border-charcoal/30 pb-1 text-[0.72rem] tracking-[0.14em] text-forest uppercase">
                        {link.label}
                        <ArrowUpRight className="size-3.5" aria-hidden />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <dl className="grid border-t border-charcoal/10 sm:grid-cols-2 lg:grid-cols-3">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="border-b border-charcoal/10 px-6 py-6 md:px-8">
                  <Status status={metric.status} />
                  <dt className="mt-2 font-display text-3xl font-semibold tracking-[-0.04em] text-forest">{metric.value}</dt>
                  <dd className="mt-1 text-sm text-charcoal/75">{metric.label}</dd>
                  <dd className="mt-2 text-sm leading-6 text-charcoal/55">{metric.note}</dd>
                </div>
              ))}
            </dl>
            <div className="grid gap-10 px-6 py-10 md:px-12 lg:grid-cols-2">
              <div>
                <h4 className="font-display text-2xl font-semibold text-forest">How it is carried out</h4>
                <ol className="mt-5">
                  {project.approach.map((step, stepIndex) => (
                    <li key={step.title} className="grid grid-cols-[2.5rem_1fr] gap-3 border-t border-charcoal/10 py-4">
                      <span className="text-sm text-gold">0{stepIndex + 1}</span>
                      <div>
                        <p className="font-medium text-forest">{step.title}</p>
                        <p className="mt-1 text-sm leading-6 text-charcoal/70">{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h4 className="font-display text-2xl font-semibold text-forest">Places named in the record</h4>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.places.map((place) => (
                    <li key={place} className="border border-charcoal/15 px-3 py-1.5 text-sm">
                      {place}
                    </li>
                  ))}
                </ul>
                {project.slug === "sundari" ? (
                  <div className="mt-8">
                    <h4 className="font-display text-2xl font-semibold text-forest">Nurseries named on the project page</h4>
                    <p className="mt-2 text-sm leading-6 text-charcoal/60">Ten locations are named within a network reported as 11 nurseries.</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {sundariNurseries.map((nursery) => (
                        <li key={nursery} className="border border-charcoal/15 px-3 py-1.5 text-sm">{nursery}</li>
                      ))}
                    </ul>
                    <h4 className="mt-8 font-display text-2xl font-semibold text-forest">Field offices</h4>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {sundariFieldOffices.map((office) => (
                        <li key={office} className="border border-charcoal/15 px-3 py-1.5 text-sm">{office}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </section>

      <ImpactMap />
      <Technology />

      <section id="communities" className="bg-[#efece3] py-16 md:py-20">
        <div className="shell flex items-end justify-between gap-6">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-forest/55 uppercase">Communities</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl font-semibold tracking-[-0.04em] text-forest md:text-5xl">
              Field records. No invented quotations.
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-6 text-charcoal/60 md:block">
            These are field records Meensou has published. Quotations are not written for people who did not give them.
          </p>
        </div>
        <div className="shell mt-10">
        <div className="flex min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
          {portraits.map((story) => (
            <figure key={story.id} className="w-[min(82vw,380px)] shrink-0 snap-start border border-charcoal/10 bg-white text-charcoal">
              <div className="relative h-72 overflow-hidden">
                <ParallaxImage src={story.image!} alt={story.alt ?? ""} sizes="(min-width: 1024px) 34vw, 86vw" />
              </div>
              <figcaption className="p-5">
                <p className="text-[0.68rem] tracking-[0.16em] text-gold uppercase">{story.place} · {story.year}</p>
                <p className="mt-2 font-display text-2xl font-semibold tracking-[-0.03em] text-forest">{story.title}</p>
                <p className="mt-2 text-sm leading-6 text-charcoal/70">{story.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        </div>
        {writtenStories.length > 0 ? (
          <div className="shell mt-12 max-w-3xl">
            {writtenStories.map((story) => (
              <article key={story.id} className="border-t border-charcoal/15 py-6">
                <p className="text-[0.68rem] tracking-[0.16em] text-forest/50 uppercase">{story.place} · {story.year}</p>
                <h3 className="mt-2 font-display text-3xl font-semibold text-forest">{story.title}</h3>
                <p className="mt-3 leading-7 text-charcoal/75">{story.text}</p>
                <p className="mt-2 text-xs tracking-[0.12em] uppercase text-charcoal/45">{story.source}</p>
              </article>
            ))}
          </div>
        ) : null}
      </section>

      <section id="reports" className="bg-white">
        <div className="shell grid gap-10 py-16 lg:grid-cols-12 md:py-20">
          <div className="lg:col-span-4">
            <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-forest/55 uppercase">Goals</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.04em] text-forest">
              Contribution only. No certification claimed.
            </h2>
            <p className="mt-5 text-sm leading-7 text-charcoal/70">
              The goals below are the ones Meensou’s published activities speak to. Listing them is not a United Nations endorsement, a certification, or a formal affiliation.
            </p>
          </div>
          <div className="grid gap-px bg-charcoal/10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {sdgs.map((goal) => (
              <article key={goal.number} className="bg-white p-5">
                <span className="inline-flex h-8 min-w-8 items-center justify-center px-2 text-sm font-semibold text-white" style={{ backgroundColor: goal.color }}>
                  <span className="sr-only">SDG </span>
                  {goal.number}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-forest">{goal.title}</h3>
                <p className="mt-2 text-sm leading-6 text-charcoal/70">{goal.text}</p>
                <p className="mt-3 text-xs tracking-[0.08em] text-charcoal/45 uppercase">{goal.projects}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="border-t border-charcoal/10">
          <div className="shell py-12">
            <h3 className="font-display text-3xl font-semibold text-forest">Public records</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-charcoal/65">
              A consolidated sustainability report PDF has not been published. The links below are the public project records that exist today.
            </p>
            <ul className="mt-8 divide-y divide-charcoal/10 border-y border-charcoal/10">
              {records.map((record) => (
                <li key={record.title}>
                  <a href={record.href} target="_blank" rel="noreferrer" className="grid gap-2 py-5 md:grid-cols-[1.2fr_1.4fr_auto] md:items-center">
                    <span className="font-display text-2xl font-semibold text-forest">{record.title}</span>
                    <span className="text-sm leading-6 text-charcoal/65">{record.detail}</span>
                    <span className="inline-flex items-center gap-1 text-[0.72rem] tracking-[0.14em] text-forest uppercase">
                      Open <ArrowUpRight className="size-3.5" aria-hidden />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="grid bg-charcoal text-ivory lg:grid-cols-2">
        <div className="relative min-h-[320px] overflow-hidden">
          <ParallaxImage src="/media/south24.jpeg" alt="Mangrove forest along a quiet Sundarbans channel" sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
        <div className="flex flex-col justify-end px-6 py-14 md:px-12">
          <h2 className="font-display text-[clamp(2.6rem,4.5vw,4.5rem)] leading-[0.95] font-semibold tracking-[-0.045em]">
            The work is already in the field.
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-ivory/70">
            Partnerships, project questions and requests for the published figures come to the same address.
          </p>
          <a href="#contact" className="mt-8 w-fit border-b border-gold pb-1 text-[0.72rem] font-semibold tracking-[0.18em] uppercase">
            Connect With Meensou
          </a>
        </div>
      </section>

      <section id="contact" className="bg-[#efece3]">
        <div className="shell py-16 md:py-20">
          <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-forest/55 uppercase">Contact</p>
          <h2 className="mt-3 font-display text-5xl font-semibold tracking-[-0.045em] text-forest">Write to the team.</h2>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-lg">
            <a className="border-b border-gold" href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.phoneHref}>{site.phone}</a>
          </div>
          <ul className="mt-12 grid border-t border-charcoal/15 md:grid-cols-3">
            {offices.map((office) => (
              <li key={office.region} className="border-b border-charcoal/15 py-8 md:border-r md:pr-8 md:pl-0 md:first:pl-0 md:last:border-r-0 md:[&:not(:first-child)]:pl-8">
                <p className="font-display text-3xl font-semibold text-forest">{office.region}</p>
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
