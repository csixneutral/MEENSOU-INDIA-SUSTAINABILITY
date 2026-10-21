import type { Publication, Story } from "@/types";

export const stories: Story[] = [
  {
    id: "training",
    title: "Planting, taught on the flat",
    place: "Sundarbans",
    year: "2024",
    image: "/media/mangrove-training.jpg",
    alt: "Women and men watch a trainer use a planting tool in tidal mud",
    text: "The 2024 mangrove training programme puts nursery and planting technique in the hands of people who live on the same shore. The project page says women account for 80% of plantation participation.",
    source: "Project Sundari gallery and project page",
  },
  {
    id: "cleanliness",
    title: "A cleanliness walk beside the mangroves",
    place: "Sundarbans",
    year: "2026",
    image: "/media/cleanliness.jpeg",
    alt: "Residents in Meensou India shirts walking a path through coastal vegetation",
    text: "Community cleanliness drives are part of the published Sundari field record, alongside plantation and monitoring rather than instead of them.",
    source: "Project Sundari gallery",
  },
  {
    id: "lsc",
    title: "A full room in the Sundarbans",
    place: "Sundarbans",
    year: "2025",
    image: "/media/lsc-2025.png",
    alt: "Women in bright saris seated at a Sundari stakeholder consultation",
    text: "Local stakeholder consultations are held in the blocks, not only in Kolkata. The 2025 gallery shows residents meeting under a banner that names both Sundari and EcoAct.",
    source: "Project Sundari gallery",
  },
  {
    id: "nayagarh",
    title: "Clean kitchen, Nayagarh",
    place: "Chandapur, Nayagarh",
    year: "2025",
    image: "/media/utkal-cover.jpeg",
    alt: "Cookstove demonstration at a stakeholder banner in Nayagarh",
    text: "On 20 January 2025, Utkal Uday held a local stakeholder consultation at Apsara Plaza, Chandapur, under the line “Clean kitchen for her. Better health and hygiene for her.”",
    source: "Photograph published on meensou.com",
  },
  {
    id: "health",
    title: "A health camp in Kuchinda",
    place: "Kutrachuan, Sambalpur",
    year: "Published on utkaluday.net",
    text: "The Utkal Uday site describes a health camp in Kutrachuan Panchayat, Kuchinda block, led by Dr. Sudhamaya Nayak. More than 40 people received check-ups, and medicines were provided at no cost.",
    source: "utkaluday.net",
  },
  {
    id: "workshop",
    title: "Mangrove workshop, Kolkata",
    place: "Kolkata",
    year: "2025",
    image: "/media/mangrove-workshop.jpg",
    alt: "Formal welcome during the Mangrove Workshop 2025",
    text: "The project gallery records a Mangrove Workshop in 2025. Meensou’s public account of 25 June 2025 describes a Sundari workshop at Taj Bengal with the Minister of Sundarbans Affairs, EcoAct specialists and local representatives.",
    source: "Project gallery and Meensou LinkedIn, 27 June 2025",
  },
];

export const publicationCategories = [
  "All",
  "Project documents",
  "Monitoring updates",
  "Community initiatives",
  "News and announcements",
  "Sustainability reports",
] as const;

export const publications: Publication[] = [
  {
    title: "Project Sundari public brief",
    year: "Current",
    category: "Project documents",
    summary:
      "Restoration area, species, nurseries, blocks, monitoring method and the VCS / VM0033 framework, as published by Meensou.",
    href: "https://www.meensou.com/sundari-details/",
    action: "Open project page",
  },
  {
    title: "Utkal Uday project site",
    year: "Current",
    category: "Project documents",
    summary:
      "District list, Prathamesh-1 distribution total, stated stove performance and the Kuchinda health camp.",
    href: "https://utkaluday.net/",
    action: "Open project page",
  },
  {
    title: "Koshal project site",
    year: "Current",
    category: "Project documents",
    summary: "Public Koshal site linked from Meensou. Distribution figures used on this website come from meensou.com/projects.",
    href: "https://www.koshal.info/",
    action: "Open project page",
  },
  {
    title: "Field monitoring note, Radha Krishnapur",
    year: "2025",
    category: "Monitoring updates",
    summary:
      "Geotagged field photograph dated 7 March 2025 at Radha Krishnapur, West Bengal, used here as a verified plantation coordinate.",
    href: "/projects/sundari",
    action: "View source",
  },
  {
    title: "Sundarban stakeholder consultations",
    year: "2024–2026",
    category: "Community initiatives",
    summary:
      "Kolkata LSC 2024, Sundarban LSC 2025 and Sundarban LSC 2026, documented in the Project Sundari gallery.",
    href: "/community",
    action: "View source",
  },
  {
    title: "Mangrove training and workshop record",
    year: "2024–2025",
    category: "Community initiatives",
    summary: "Training programme in 2024 and the Mangrove Workshop 2025, including the 25 June Kolkata workshop.",
    href: "/community",
    action: "View source",
  },
  {
    title: "Press mentions named by Meensou",
    year: "2024",
    category: "News and announcements",
    summary:
      "The project page cites Bengal Chamber materials from February, March and September–October 2024, a Daily Pioneer clipping, and a YouTube item from November 2024. Files are not hosted here.",
    href: "https://www.meensou.com/sundari-details/",
    action: "Listed, no file",
  },
  {
    title: "Consolidated sustainability report",
    year: "—",
    category: "Sustainability reports",
    summary:
      "No annual sustainability report PDF was found on meensou.com. Add the file to the publications list when it is released.",
    action: "Listed, no file",
  },
];
