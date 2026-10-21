import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms for using the Meensou India website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Terms"
        title="How to use what is published here."
        lede="The site is an account of Meensou India’s public project record. It is not an offer of carbon credits."
      />
      <section className="bg-ivory py-16">
        <div className="shell max-w-3xl space-y-5 leading-8 text-charcoal/80">
          <p>
            Content is provided for information. Figures are labeled as reported, target, stated performance or not published. A label is part of the figure. Removing it changes the meaning.
          </p>
          <p>
            Nothing on this website is an offer to sell carbon credits, a verification statement, or a guarantee of future emission reductions. Project status can change. The project pages and any future registry records should be read alongside this site.
          </p>
          <p>
            You may share links to these pages. Please do not copy photographs or present excerpts as if they were a new certification.
          </p>
          <p>
            The site is provided as published. Meensou India is not liable for decisions made solely on the basis of a summary when the source note points to a fuller or conflicting public page.
          </p>
        </div>
      </section>
    </>
  );
}
