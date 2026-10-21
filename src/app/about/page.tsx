import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { offices, site, sundariFieldOffices } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meensou India Private Limited develops carbon projects that combine mangrove restoration and clean cooking with community participation.",
  alternates: { canonical: "/about" },
};

const steps = [
  {
    title: "Stakeholder consultations",
    text: "Local stakeholder consultations are used to hear what a village needs before a nursery or a stove programme expands.",
  },
  {
    title: "Awareness",
    text: "Training camps and workshops explain restoration, stove use and why the coastline or the kitchen is part of the climate work.",
  },
  {
    title: "Implementation that stays",
    text: "Nurseries, replanting, distribution hubs and follow-up surveys are how the projects try to last beyond a launch.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A climate company that still has mud on its boots."
        lede="Meensou India develops carbon projects in which an environmental result and a community result are designed together."
      />
      <section className="bg-ivory py-20">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <div className="space-y-6 text-lg leading-8 text-charcoal/80 lg:col-span-7">
            <p>
              The organisation’s public description is direct: carbon offset projects that support farmers and rural households to change how they cook and how coastal land is restored, with the aim of cutting emissions and improving daily life at the same time.
            </p>
            <p>
              In practice that currently means two landscapes. Project Sundari works in the Indian Sundarbans, across eleven blocks of South 24 Parganas. Utkal Uday and the Koshal Project work in rural and tribal Odisha, distributing the Prathamesh-1 improved cookstove and tying that to health, time and forest pressure.
            </p>
            <p>
              Public company profiles list Meensou India as founded in 2021 and headquartered in Kuchinda, Odisha. The project pages describe activity from 2022. Soumya Pradhan is named as CEO and Managing Director in the company’s own account of the Sundari workshop held in Kolkata on 25 June 2025. A longer leadership biography is not published, so none is written here.
            </p>
          </div>
          <aside className="border-t border-charcoal/15 pt-8 lg:col-span-4 lg:col-start-9 lg:border-l lg:border-t-0 lg:pt-0 lg:pl-10">
            <p className="eyebrow text-forest/50">At a glance</p>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="text-charcoal/50">Legal name</dt>
                <dd className="mt-1 text-lg text-forest">{site.name}</dd>
              </div>
              <div>
                <dt className="text-charcoal/50">Founded</dt>
                <dd className="mt-1 text-lg text-forest">2021, as listed on the public company profile</dd>
              </div>
              <div>
                <dt className="text-charcoal/50">Leadership named publicly</dt>
                <dd className="mt-1 text-lg text-forest">Soumya Pradhan, CEO & Managing Director</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="shell">
          <h2 className="display text-5xl text-forest">How the work is approached</h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title}>
                <p className="font-serif text-5xl text-gold">0{index + 1}</p>
                <h3 className="mt-4 font-display text-2xl text-forest">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-charcoal/75">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="bg-forest py-20 text-ivory">
        <div className="shell grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="display text-5xl">Where people sit</h2>
            <ul className="mt-8 space-y-6">
              {offices.map((office) => (
                <li key={office.region} className="border-t border-white/15 pt-5">
                  <p className="eyebrow text-gold">{office.role}</p>
                  <p className="mt-2 text-2xl">{office.region}</p>
                  <p className="mt-1 text-ivory/70">{office.lines.join(", ")}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="display text-5xl">Sundari field offices</h2>
            <p className="mt-4 max-w-md text-ivory/75">
              The project page describes one Kolkata office and four field offices supporting nursery supervision, monitoring and community coordination.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3">
              {sundariFieldOffices.map((office) => (
                <li key={office} className="border border-white/15 px-4 py-5 text-lg">
                  {office}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
