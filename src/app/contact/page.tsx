import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { offices, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Write to Meensou India about partnerships, projects or field data. Offices in Odisha, Kolkata and Bengaluru.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what kind of work you want to do together."
        lede="Partnership enquiries, project questions and requests for the underlying figures all come to the same desk."
      />
      <section className="bg-ivory py-16">
        <div className="shell grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Suspense fallback={<p>Loading the form…</p>}>
              <ContactForm />
            </Suspense>
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <p className="eyebrow text-forest/50">Direct</p>
            <p className="mt-4 text-lg">
              <a className="underline decoration-gold underline-offset-4" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p className="mt-2">
              <a href={site.phoneHref}>{site.phone}</a>
            </p>
            <p className="mt-6 text-sm leading-6 text-charcoal/70">
              Utkal Uday also publishes {site.utkalEmail} and {site.utkalPhone}.
            </p>
            <ul className="mt-10 space-y-6">
              {offices.map((office) => (
                <li key={office.region}>
                  <p className="font-display text-xl text-forest">{office.region}</p>
                  <p className="text-sm text-charcoal/70">{office.role}</p>
                  <p className="mt-1 text-sm">{office.lines.join(", ")}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm">
              <a href={site.linkedin} className="underline decoration-gold underline-offset-4" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
