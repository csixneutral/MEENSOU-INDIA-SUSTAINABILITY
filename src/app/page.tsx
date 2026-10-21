import type { Metadata } from "next";
import SustainabilityPage from "./sustainability/page";

export const metadata: Metadata = {
  title: "Our Planet. Our People. Our Responsibility.",
  description:
    "Meensou India’s sustainability page: mangrove restoration in the Sundarbans, improved cookstoves in Odisha, and the published record behind the work.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <SustainabilityPage />;
}
