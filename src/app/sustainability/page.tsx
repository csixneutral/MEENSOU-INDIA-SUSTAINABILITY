import type { Metadata } from "next";
import { offices, site, sundariFieldOffices } from "@/data/site";
import { reportingNotes, sdgs } from "@/data/impact";
import { projects as flagshipProjects } from "@/data/projects";
import { stories } from "@/data/stories";
import { CountUp } from "@/components/shared/CountUp";
import { Status } from "@/components/shared/Status";
import { ParallaxImage } from "@/components/shared/ParallaxImage";
import { MaskImage } from "@/components/sustainability/MaskImage";
import { ImpactMap } from "@/components/home/ImpactMap";
import { Technology } from "@/components/home/Technology";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Meensou India’s sustainability page: mangrove restoration in the Sundarbans, improved cookstoves in Odisha, and the published record behind the work.",
  alternates: { canonical: "/sustainability" },
};

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
    title: "Environmental Responsibility",
    text: "Native mangrove restoration in the Indian Sundarbans, nursery stock for replanting, and a cookstove programme that lowers the wood a household burns.",
    image: "/media/south24.jpeg",
    alt: "Mature mangroves and exposed roots along a Sundarbans waterway",
  },
  {
    id: "community",
    index: "02",
    title: "Social Responsibility",
    text: "Rural and tribal households, cleaner kitchens, training on the tidal flat, and consultations held in the villages the projects affect.",
    image: "/media/mangrove-training.jpg",
    alt: "Community members learning mangrove planting on a tidal flat",
  },
  {
    id: "governance",
    index: "03",
    title: "Governance & Transparency",
    text: "Satellite checks, field forms, GPS and return visits. Figures on this page stay labeled as reported, targeted, or not yet published.",
    image: "/media/field-visit.jpeg",
    alt: "A field team monitoring young mangroves in shallow water",
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

export default function SustainabilityPage() {
  return (
    <div className="sustainability-page">
      <section className="relative min-h-[100svh] bg-charcoal text-ivory">
        <div className="absolute inset-0 overflow-hidden">
          <ParallaxImage
            src="/media/field-community.jpg"
            alt="Young mangrove saplings in tidal channels, with forest beyond, in the Indian Sundarbans"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/45 to-charcoal/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-charcoal/25" />
        </div>
        <div className="shell relative flex min-h-[100svh] flex-col justify-end pb-16 pt-32">
          <p className="rise eyebrow text-gold">Sustainability · Meensou India</p>
          <h1 className="rise d1 mt-6 max-w-[12ch] text-[clamp(3.2rem,7vw,7rem)] leading-[0.92] tracking-[-0.045em] sm:max-w-none">
            <span className="block">Our Planet.</span>
            <span className="block">Our People.</span>
            <span className="block">Our Responsibility.</span>
          </h1>
          <p className="rise d2 mt-7 max-w-xl text-lg leading-8 text-ivory/85">
            Creating measurable climate impact through nature restoration, cleaner energy and community-led sustainable development.
          </p>
          <a href="#overview" className="rise d3 mt-12 inline-flex items-center gap-3 text-[0.72rem] tracking-[0.18em] uppercase text-ivory/80">
            <span className="block h-12 w-px bg-gold" aria-hidden />
            Scroll to Explore
          </a>
        </div>
      </section>

      <section id="overview" className="bg-ivory py-24 md:py-32">
        <div className="shell grid items-center gap-14 lg:grid-cols-12">
          <div className="inview lg:col-span-6">
            <p className="eyebrow text-forest/60">Our sustainability commitment</p>
            <h2 className="mt-5 max-w-xl text-[clamp(2.4rem,4.6vw,4.4rem)] leading-[0.96] tracking-[-0.045em] text-forest">
              Sustainability Is at the Heart of Everything We Do.
            </h2>
            <div className="mt-8 max-w-xl space-y-5 text-lg leading-8 text-charcoal/80">
              <p>
                Meensou India Private Limited builds projects in which a climate result and a household result are designed as one piece of work. The landscapes are the Sundarbans coast and rural Odisha.
              </p>
              <p>
                Carbon work runs through two published routes: mangrove restoration, and the replacement of smoky wood fires with the Prathamesh-1 improved cookstove. No issued credit total is published, so none is stated here.
              </p>
              <p>
                Mangrove restoration, cleaner kitchens, village consultations and local livelihoods are the same programme seen from different doors. Training, nurseries and follow-up are how the work is meant to last.
              </p>
            </div>
          </div>
          <div className="relative min-h-[520px] overflow-hidden lg:col-span-6 lg:min-h-[680px]">
            <ParallaxImage
              src="/media/cleanliness.jpeg"
              alt="Community members walking a path beside mangroves during a Meensou field activity"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
            <p className="absolute bottom-0 left-0 bg-ivory/92 px-4 py-3 text-[0.68rem] tracking-[0.14em] uppercase">
              Sundarbans field activity
            </p>
          </div>
        </div>
      </section>

      <section id="impact" className="bg-forest py-24 text-ivory md:py-32">
        <div className="shell">
          <p className="eyebrow text-gold">Our impact in numbers</p>
          <h2 className="mt-4 max-w-3xl text-[clamp(2.5rem,5vw,4.6rem)] leading-[0.96] tracking-[-0.045em]">
            Impact That Goes Beyond Numbers.
          </h2>
          <dl className="mt-16 grid border-t border-white/15 md:grid-cols-2 xl:grid-cols-5">
            {metrics.map((metric) => (
              <div key={metric.label} className="border-b border-white/15 py-8 xl:border-b-0 xl:px-6 xl:first:pl-0 xl:last:pr-0">
                <dt className="sr-only">{metric.label}</dt>
                <dd className="text-[clamp(2.4rem,3.4vw,3.6rem)] leading-none tracking-[-0.045em]">
                  <CountUp end={metric.end} suffix={metric.suffix} decimals={metric.decimals} label={metric.label} />
                </dd>
                <p className="mt-4 text-base text-ivory">{metric.label}</p>
                <p className="mt-2 text-sm leading-6 text-ivory/60">{metric.note}</p>
              </div>
            ))}
            <div className="border-b border-white/15 py-8 md:col-span-2 xl:col-span-1 xl:border-b-0 xl:px-6 xl:pr-0">
              <p className="eyebrow text-gold">Pending confirmation</p>
              <p className="mt-4 font-serif text-4xl text-ivory/90">—</p>
              <p className="mt-4 text-base">Verified emission reductions</p>
              <p className="mt-2 text-sm leading-6 text-ivory/60">
                No verified tonne total is published on the company pages reviewed. This space is held until that figure is confirmed.
              </p>
            </div>
          </dl>
          <ol className="mt-14 max-w-3xl space-y-4 border-t border-white/15 pt-8">
            {reportingNotes.map((note) => (
              <li key={note} className="text-sm leading-7 text-ivory/70">
                {note}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="pillars" className="bg-ivory">
        <div className="shell py-20 md:py-28">
          <p className="eyebrow text-forest/60">ESG pillars</p>
          <h2 className="mt-4 max-w-3xl text-[clamp(2.5rem,5vw,4.6rem)] leading-[0.96] tracking-[-0.045em] text-forest">
            Our Approach to a Sustainable Future.
          </h2>
        </div>
        <div>
          {pillars.map((pillar, index) => (
            <article id={pillar.id} key={pillar.id} className="group grid min-h-[70vh] lg:grid-cols-2">
              {pillar.id === "climate" ? <span id="nature" className="sr-only">Nature and biodiversity</span> : null}
              <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                <MaskImage src={pillar.image} alt={pillar.alt} sizes="(min-width: 1024px) 50vw, 100vw" className="min-h-[70vh]" />
              </div>
              <div className={`flex flex-col justify-end bg-ivory px-6 py-14 md:px-14 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <p className="font-serif text-5xl text-gold">{pillar.index}</p>
                <h3 className="mt-4 max-w-md text-[clamp(2.2rem,3.5vw,3.5rem)] leading-[1] tracking-[-0.04em] text-forest">
                  {pillar.title}
                </h3>
                <p className="mt-5 max-w-md text-lg leading-8 text-charcoal/75">{pillar.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="bg-white py-24 md:py-32">
        <div className="shell">
          <p className="eyebrow text-forest/60">Projects in action</p>
          <h2 className="mt-4 max-w-4xl text-[clamp(2.5rem,5vw,4.6rem)] leading-[0.96] tracking-[-0.045em] text-forest">
            Turning Climate Commitments Into Action.
          </h2>
          <div className="mt-16 space-y-24">
            {flagshipProjects.map((project, index) => (
              <article key={project.slug} className="border-t border-charcoal/10 pt-12">
                <div className="grid items-stretch gap-8 lg:grid-cols-12">
                  <div className={`relative min-h-[420px] overflow-hidden lg:col-span-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <ParallaxImage src={project.image} alt={project.imageAlt} sizes="(min-width: 1024px) 48vw, 100vw" />
                  </div>
                  <div className="lg:col-span-6">
                    <p className="eyebrow text-forest/50">{project.location}</p>
                    <h3 className="mt-3 text-5xl tracking-[-0.045em] text-forest">{project.name}</h3>
                    <p className="mt-3 text-sm tracking-[0.14em] uppercase text-charcoal/55">{project.focus}</p>
                    <p className="mt-3 text-sm text-charcoal/55">{project.since}</p>
                    <p className="mt-5 text-base leading-8 text-charcoal/80">{project.description}</p>
                    <p className="mt-4 text-sm text-forest">{project.status}</p>
                    <ul className="mt-5 space-y-2">
                      {project.links.map((link) => (
                        <li key={link.href}>
                          <a href={link.href} target="_blank" rel="noreferrer" className="text-[0.72rem] tracking-[0.16em] uppercase text-forest">
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="border-t border-charcoal/10 pt-4">
                      <Status status={metric.status} />
                      <dt className="mt-2 text-3xl tracking-[-0.04em] text-forest">{metric.value}</dt>
                      <dd className="mt-1 text-sm text-charcoal/75">{metric.label}</dd>
                      <dd className="mt-2 text-sm leading-6 text-charcoal/50">{metric.note}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-10 grid gap-8 lg:grid-cols-2">
                  <div>
                    <h4 className="text-lg text-forest">How it is carried out</h4>
                    <ol className="mt-4 space-y-4">
                      {project.approach.map((step, stepIndex) => (
                        <li key={step.title}>
                          <p className="text-sm tracking-[0.14em] uppercase text-gold">0{stepIndex + 1}</p>
                          <p className="mt-1 text-forest">{step.title}</p>
                          <p className="mt-1 text-sm leading-6 text-charcoal/70">{step.text}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <h4 className="text-lg text-forest">Places named in the record</h4>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.places.map((place) => (
                        <li key={place} className="border border-charcoal/15 px-3 py-2 text-sm">
                          {place}
                        </li>
                      ))}
                    </ul>
                    {project.slug === "sundari" ? (
                      <div className="mt-8">
                        <h4 className="text-lg text-forest">Nurseries named on the project page</h4>
                        <p className="mt-2 text-sm leading-6 text-charcoal/60">Ten locations are named within a network reported as 11 nurseries.</p>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {sundariNurseries.map((nursery) => (
                            <li key={nursery} className="border border-charcoal/15 px-3 py-2 text-sm">{nursery}</li>
                          ))}
                        </ul>
                        <h4 className="mt-8 text-lg text-forest">Field offices</h4>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {sundariFieldOffices.map((office) => (
                            <li key={office} className="border border-charcoal/15 px-3 py-2 text-sm">{office}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </div>
                {project.gallery.length > 1 ? (
                  <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {project.gallery.map((image) => (
                      <figure key={image.src}>
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <ParallaxImage src={image.src} alt={image.alt} sizes="(min-width: 1024px) 30vw, 100vw" />
                        </div>
                        <figcaption className="mt-2 text-sm text-charcoal/65">
                          {image.caption} · {image.place}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <ImpactMap />
      <Technology />

      <section id="communities" className="bg-ivory py-24 md:py-32">
        <div className="shell">
          <p className="eyebrow text-forest/60">People and communities</p>
          <h2 className="inview max-w-4xl text-[clamp(2.5rem,5vw,4.6rem)] leading-[0.96] tracking-[-0.045em] text-forest">
            Behind Every Climate Action Is a Human Story.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-charcoal/75">
            These are field records Meensou has published. Quotations are not written for people who did not give them.
          </p>
        </div>
        <div className="shell mt-14 grid gap-4 md:grid-cols-12">
          {portraits.map((story, index) => (
            <figure
              key={story.id}
              className={`group relative min-h-[420px] overflow-hidden bg-charcoal ${index === 0 ? "md:col-span-7 md:min-h-[640px]" : index === 1 ? "md:col-span-5 md:min-h-[640px]" : "md:col-span-4 md:min-h-[460px]"}`}
            >
              <ParallaxImage src={story.image!} alt={story.alt ?? ""} sizes={index === 0 ? "(min-width: 768px) 55vw, 100vw" : "(min-width: 768px) 30vw, 100vw"} />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-transparent p-6 text-ivory">
                <p className="text-[0.68rem] tracking-[0.16em] uppercase text-gold">
                  {story.place} · {story.year}
                </p>
                <p className="mt-2 text-2xl tracking-[-0.03em]">{story.title}</p>
                <p className="mt-2 max-w-md text-sm leading-6 text-ivory/80">{story.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        {writtenStories.length > 0 ? (
          <div className="shell mt-12 max-w-3xl">
            {writtenStories.map((story) => (
              <article key={story.id} className="border-t border-charcoal/10 py-6">
                <p className="eyebrow text-forest/50">
                  {story.place} · {story.year}
                </p>
                <h3 className="mt-2 text-2xl text-forest">{story.title}</h3>
                <p className="mt-3 leading-7 text-charcoal/75">{story.text}</p>
                <p className="mt-2 text-xs tracking-[0.12em] uppercase text-charcoal/45">{story.source}</p>
              </article>
            ))}
          </div>
        ) : null}
      </section>

      <section id="reports" className="bg-white py-24 md:py-32">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-forest/60">Reporting and global goals</p>
            <h2 className="mt-4 text-[clamp(2.4rem,4.4vw,4.2rem)] leading-[0.96] tracking-[-0.045em] text-forest">
              Committed to Transparency. Aligned With Global Goals.
            </h2>
            <p className="mt-6 text-lg leading-8 text-charcoal/75">
              The goals below are the ones Meensou’s published activities speak to. Listing them is not a United Nations endorsement, a certification, or a formal affiliation.
            </p>
          </div>
          <ol className="lg:col-span-7">
            {sdgs.map((goal) => (
              <li key={goal.number} className="grid grid-cols-[auto_1fr] gap-5 border-t border-charcoal/10 py-4">
                <span
                  className="flex h-11 w-11 items-center justify-center text-sm font-semibold text-white"
                  style={{ backgroundColor: goal.color }}
                  aria-hidden
                >
                  {goal.number}
                </span>
                <div>
                  <h3 className="text-lg text-forest">
                    <span className="sr-only">SDG {goal.number}: </span>
                    {goal.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-charcoal/70">{goal.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="shell mt-20 border-t border-charcoal/10 pt-12">
          <h3 className="text-3xl tracking-[-0.04em] text-forest">Sustainability reports</h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-charcoal/65">
            A consolidated sustainability report PDF has not been published. The links below are the public project records that exist today.
          </p>
          <ul className="mt-8 divide-y divide-charcoal/10 border-y border-charcoal/10">
            {records.map((record) => (
              <li key={record.title} className="grid gap-3 py-6 md:grid-cols-12 md:items-center">
                <p className="text-xl text-forest md:col-span-5">{record.title}</p>
                <p className="text-sm leading-6 text-charcoal/65 md:col-span-5">{record.detail}</p>
                <a href={record.href} target="_blank" rel="noreferrer" className="text-[0.72rem] tracking-[0.16em] uppercase text-forest md:col-span-2 md:text-right">
                  Open
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative min-h-[78vh] overflow-hidden bg-charcoal text-ivory">
        <ParallaxImage
          src="/media/south24.jpeg"
          alt="Mangrove forest along a quiet Sundarbans channel"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/62" />
        <div className="shell relative flex min-h-[78vh] flex-col justify-end py-20">
          <h2 className="max-w-4xl text-[clamp(2.6rem,5.5vw,5.2rem)] leading-[0.96] tracking-[-0.045em]">
            A Sustainable Future Starts With Action Today.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ivory/85">
            Together, we can restore ecosystems, strengthen communities and create lasting environmental impact.
          </p>
          <a
            href="#contact"
            className="mt-9 inline-flex w-fit bg-ivory px-6 py-3 text-[0.72rem] font-semibold tracking-[0.16em] text-forest uppercase"
          >
            Connect With Meensou
          </a>
        </div>
      </section>

      <section id="contact" className="bg-ivory py-20">
        <div className="shell grid gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow text-forest/60">Contact</p>
            <h2 className="mt-4 text-5xl tracking-[-0.045em] text-forest">Write to the team.</h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-charcoal/75">
              Partnerships, project questions and requests for the published figures come to the same address.
            </p>
          </div>
          <div className="text-base leading-8 text-charcoal/80">
            <p>
              <a className="text-forest underline decoration-gold underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p>
              <a href={site.phoneHref}>{site.phone}</a>
            </p>
            <ul className="mt-6 space-y-4">
              {offices.map((office) => (
                <li key={office.region}>
                  <span className="text-forest">{office.region}</span>
                  <span className="mt-1 block text-sm">{office.lines.join(", ")}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
