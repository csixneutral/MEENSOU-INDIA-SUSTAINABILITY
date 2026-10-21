import type { Office } from "@/types";

export const site = {
  name: "Meensou India Private Limited",
  shortName: "Meensou India",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://meensou.com",
  description:
    "Meensou India develops mangrove restoration in the Sundarbans and improved cookstove programmes in Odisha, linking climate action with community wellbeing.",
  email: "info@meensou.com",
  phone: "+91 9124668034",
  phoneHref: "tel:+919124668034",
  utkalEmail: "utkaluday@meensou.com",
  utkalPhone: "+91 9078414995",
  utkalPhoneHref: "tel:+919078414995",
  linkedin: "https://www.linkedin.com/company/meensou-india-private-limited",
  founded: "2021",
  tagline: "Rooted in communities. Driven by climate action.",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/impact", label: "Our Impact" },
  { href: "/projects", label: "Our Projects" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/community", label: "Community" },
  { href: "/reports", label: "Reports & Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export const offices: Office[] = [
  {
    region: "Odisha",
    role: "Field operations",
    lines: ["Kundaposhi, Kuchinda", "Odisha 768222"],
  },
  {
    region: "West Bengal",
    role: "Kolkata office",
    lines: ["Ergo Tower, Sector V", "Bidhannagar, Kolkata 700091"],
  },
  {
    region: "Karnataka",
    role: "Bengaluru workspace",
    lines: ["Hubstairs CoWorks, BTM Layout", "Bengaluru 560068"],
  },
];

export const sundariFieldOffices = [
  "Kolkata",
  "Namkhana",
  "Sagar",
  "Patharpratima",
  "Gosaba",
];
