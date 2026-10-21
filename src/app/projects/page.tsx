import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { ProjectBrowser } from "@/components/projects/ProjectBrowser";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Project Sundari, Utkal Uday and the Koshal Project — mangrove restoration and improved cookstoves from Meensou India.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our projects"
        title="Three programmes. Two landscapes."
        lede="A mangrove restoration programme in the Sundarbans, and two improved-cookstove programmes in Odisha. Each page keeps reported results separate from targets."
      />
      <section className="bg-ivory py-16">
        <div className="shell">
          <ProjectBrowser />
        </div>
      </section>
    </>
  );
}
