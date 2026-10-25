import type { Metadata } from "next";
import { Studio } from "@/components/sustainability/Studio";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Meensou India's sustainability page: mangrove restoration in the Sundarbans, improved cookstoves in Odisha, and the published record behind the work.",
  alternates: { canonical: "/sustainability" },
};

export default function SustainabilityPage() {
  return <Studio />;
}
