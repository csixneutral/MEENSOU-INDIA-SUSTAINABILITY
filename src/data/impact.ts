import type { Metric } from "@/types";

/**
 * Content inventory. Sources reviewed on 21 Oct 2026:
 * meensou.com, meensou.com/projects, meensou.com/sundari-details,
 * utkaluday.net, and the company’s public LinkedIn account.
 * koshal.info was not readable during the audit (bot check). Koshal
 * figures below come from meensou.com/projects.
 *
 * Conflicts deliberately not presented as facts:
 * - Homepage Gold Standard badge vs project page VCS / VM0033.
 * - “3M+ saplings planted” vs “more than 1.2 million planted” toward a 3 million ambition.
 * - Heading “1,000 hectares restored” vs body text “438 hectares” and a 4,500 ha target.
 * - Homepage “10K+ families” vs projects page “45,000+ families”.
 * - Homepage carbon counters render as zero and are unused.
 * - Utkal stoves 20,818 vs 20,000. Firewood 55–60% vs “up to 50%”.
 * No issued carbon-credit volume is published in these sources.
 */

export const headlineMetrics: Metric[] = [
  {
    id: "families",
    value: "45,000+",
    end: 45000,
    suffix: "+",
    label: "Families reached",
    detail: "Across Meensou’s published project portfolio.",
    status: "reported",
    source: "meensou.com/projects",
  },
  {
    id: "stoves",
    value: "34,818",
    end: 34818,
    label: "Improved cookstoves",
    detail: "Sum of published figures: 20,818 Utkal Uday and 14,000 Koshal.",
    status: "reported",
    source: "utkaluday.net and meensou.com/projects",
  },
  {
    id: "saplings",
    value: "1.2M+",
    end: 1.2,
    decimals: 1,
    suffix: "M+",
    label: "Mangrove saplings planted",
    detail: "Reported planting. The 3 million figure is the stated ambition.",
    status: "reported",
    source: "Project Sundari page",
  },
  {
    id: "villages",
    value: "2,000+",
    end: 2000,
    suffix: "+",
    label: "Villages reached",
    detail: "Company project overview.",
    status: "reported",
    source: "meensou.com/projects",
  },
  {
    id: "districts",
    value: "14",
    end: 14,
    label: "Districts covered",
    detail: "South 24 Parganas together with the Odisha cookstove districts.",
    status: "reported",
    source: "meensou.com/projects",
  },
  {
    id: "credits",
    value: "Not published",
    label: "Issued carbon credits",
    detail: "No issued credit volume was found in the pages reviewed.",
    status: "unpublished",
    source: "Company pages reviewed",
  },
];

export const reportingNotes = [
  "Planting: the Project Sundari page says more than 1.2 million mangrove saplings have been planted, toward a 3 million-plus ambition. The shorter projects overview labels the same work “3M+ saplings planted”. This site uses 1.2 million+ as the reported figure.",
  "Area: the same project page says restoration activities have covered 438 hectares, against a long-term target of 4,500 hectares. A heading on that page reads “1,000 hectares restored”, which does not match the explanation beneath it. This site uses 438 hectares.",
  "Standard: the project page says Sundari is being developed under the Verified Carbon Standard, methodology VM0033, on a 20-year horizon. The homepage also shows a Gold Standard badge. Those statements conflict, so the badge is not repeated here.",
  "Households: the projects overview says 45,000+ families. A separate homepage strip says 10K+ families. This site uses 45,000+.",
  "Cookstoves: utkaluday.net reports 20,818 Prathamesh-1 stoves. The projects overview rounds Utkal Uday to 20,000. Firewood savings are described as 55–60% on the project site and up to 50% on the projects overview.",
  "The homepage impact counters currently display zero. They are treated as a presentation error, not as results.",
];

export const pillars = [
  {
    id: "climate",
    index: "01",
    title: "Climate Action",
    text: "Cleaner household cooking in Odisha and mangrove restoration in the Sundarbans, developed for a long-term carbon framework.",
    href: "/sustainability#climate",
    image: "/media/field-community.jpg",
    alt: "Young mangrove saplings planted in tidal channels in the Sundarbans",
  },
  {
    id: "nature",
    index: "02",
    title: "Nature & Biodiversity",
    text: "Native mangrove species, nursery networks and coastal ecosystems that buffer villages from storms and erosion.",
    href: "/sustainability#nature",
    image: "/media/south24.jpeg",
    alt: "Mature mangrove forest and exposed roots along a Sundarbans waterway",
  },
  {
    id: "community",
    index: "03",
    title: "Community & Livelihoods",
    text: "Households, panchayats and local crews taking part in nurseries, plantation, training and cookstove distribution.",
    href: "/sustainability#community",
    image: "/media/mangrove-training.jpg",
    alt: "Community members and a field team during mangrove planting training on a tidal flat",
  },
  {
    id: "governance",
    index: "04",
    title: "Governance & Transparency",
    text: "Field surveys, geospatial checks and monitoring routines intended to make restoration and cookstove records traceable.",
    href: "/sustainability#governance",
    image: "/media/field-visit.jpeg",
    alt: "Field team standing in a young mangrove plantation during a monitoring visit",
  },
] as const;

export const sdgs = [
  {
    number: 1,
    title: "No Poverty",
    color: "#E5243B",
    text: "Sundari links restoration work with local employment, nursery roles and a participatory benefit-sharing mechanism.",
    projects: "Project Sundari",
  },
  {
    number: 3,
    title: "Good Health and Well-being",
    color: "#4C9F38",
    text: "Utkal Uday describes cleaner kitchens and less indoor smoke, and records a health camp in Kuchinda block.",
    projects: "Utkal Uday",
  },
  {
    number: 5,
    title: "Gender Equality",
    color: "#FF3A21",
    text: "The Sundari page reports that 80% of plantation participation is by women. Cookstove work is framed around women’s time and kitchen conditions.",
    projects: "Sundari, Utkal Uday, Koshal",
  },
  {
    number: 7,
    title: "Affordable and Clean Energy",
    color: "#FCC30B",
    text: "Prathamesh-1 improved cookstoves are distributed to rural households in place of less efficient wood-fired cooking.",
    projects: "Utkal Uday, Koshal",
  },
  {
    number: 8,
    title: "Decent Work and Economic Growth",
    color: "#A21942",
    text: "The company homepage reports 50+ rural jobs created or sustained through the restoration work.",
    projects: "Project Sundari",
  },
  {
    number: 13,
    title: "Climate Action",
    color: "#3F7E44",
    text: "Restoration and clean cooking are the two routes Meensou uses to cut pressure on forests and build coastal resilience.",
    projects: "All projects",
  },
  {
    number: 14,
    title: "Life Below Water",
    color: "#0A97D9",
    text: "Mangroves are described as nursery grounds for fish, crabs and shrimp that local livelihoods depend on.",
    projects: "Project Sundari",
  },
  {
    number: 15,
    title: "Life on Land",
    color: "#56C02B",
    text: "Nineteen native mangrove species are named in the restoration plan, with nurseries holding stock for replanting.",
    projects: "Project Sundari",
  },
  {
    number: 17,
    title: "Partnerships for the Goals",
    color: "#19486A",
    text: "Delivery runs with panchayats, field teams and named collaborators including EcoAct and myclimate.",
    projects: "All projects",
  },
] as const;

export const storyChapters = [
  {
    index: "01",
    kicker: "The climate challenge",
    title: "A coast under pressure",
    text: "In the Indian Sundarbans, mangrove loss, salinity, erosion and cyclones sit on the same shoreline as fishing and honey collection. Degraded tidal land is where Sundari begins.",
    image: "/media/south24.jpeg",
    alt: "Mangrove canopy and root systems along a Sundarbans channel",
  },
  {
    index: "02",
    kicker: "Community engagement",
    title: "The work starts in the room",
    text: "Local stakeholder consultations in the Sundarbans and in Odisha are how the projects explain the work, hear objections and agree where activity should happen.",
    image: "/media/lsc-2025.png",
    alt: "A crowded local stakeholder consultation for Project Sundari, with EcoAct named on the banner",
  },
  {
    index: "03",
    kicker: "Implementation",
    title: "Nurseries, then the tide",
    text: "Communities raise native mangrove saplings and plant them on assessed sites. In Odisha, the parallel act is a household stove: the Prathamesh-1, distributed with training.",
    image: "/media/mangrove-training.jpg",
    alt: "A trainer demonstrating planting technique to women and men on a tidal flat",
  },
  {
    index: "04",
    kicker: "What changes",
    title: "From the forest to the family",
    text: "A restored fringe can slow a storm surge. A cleaner stove can mean less smoke in the kitchen and less time spent collecting wood. The projects are built so those outcomes travel together.",
    image: "/media/field-community.jpg",
    alt: "Rows of young mangroves in a newly planted Sundarbans site",
  },
  {
    index: "05",
    kicker: "Monitoring",
    title: "Return, measure, replant",
    text: "Teams go back with GPS, field forms and simple ecological checks. Where saplings fail, the nursery network is meant to supply replanting. The record is the project, not only the planting day.",
    image: "/media/field-visit.jpeg",
    alt: "Monitoring team in a plantation at Radha Krishnapur, West Bengal, March 2025",
  },
] as const;
