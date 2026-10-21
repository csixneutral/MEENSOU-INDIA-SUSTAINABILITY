import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { PublicationLibrary } from "@/components/reports/PublicationLibrary";

export const metadata: Metadata = {
  title: "Reports & Insights",
  description:
    "Project pages, field notes and press mentions published by Meensou India. A sustainability report will be listed here when a file exists.",
  alternates: { canonical: "/reports" },
};

export default function ReportsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reports and insights"
        title="A library that only links to documents that exist."
        lede="Project pages, field notes and the press mentions Meensou itself cites. A consolidated sustainability report is reserved, not fabricated."
      />
      <section className="bg-ivory py-16">
        <div className="shell">
          <PublicationLibrary />
        </div>
      </section>
    </>
  );
}
