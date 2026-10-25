import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/about", "/impact", "/projects", "/sustainability", "/community", "/reports", "/contact", "/privacy", "/terms"];
  const dated = new Date();
  return [
    ...paths.map((path) => ({
      url: `${site.url}${path || "/"}`,
      lastModified: dated,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...projects.map((project) => ({
      url: `${site.url}/projects/${project.slug}`,
      lastModified: dated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
