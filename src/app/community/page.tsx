import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { People } from "@/components/home/People";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Training, stakeholder consultations, cleanliness drives and a documented health camp from Meensou India’s field work.",
  alternates: { canonical: "/community" },
};

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Community"
        title="The field is the programme."
        lede="Nurseries, consultations, training days and household kitchens are the community record. Quotations are not written for people who were not asked."
      />
      <section className="bg-white">
        <div className="shell grid gap-10 py-16 md:grid-cols-3">
          {[
            ["Consultations", "Kolkata in 2024, the Sundarbans in 2025 and 2026, and Nayagarh in January 2025."],
            ["Training", "Mangrove planting training in 2024, and cookstove use sessions described for Utkal Uday."],
            ["Care", "A cleanliness drive along the mangroves, and a health camp for more than 40 people in Kuchinda block."],
          ].map(([title, text]) => (
            <article key={title}>
              <h2 className="font-display text-3xl text-forest">{title}</h2>
              <p className="mt-3 leading-7 text-charcoal/75">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <People />
    </>
  );
}
