import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "sundari",
    index: "01",
    name: "Project Sundari",
    shortName: "Sundari",
    location: "South 24 Parganas, Indian Sundarbans",
    focus: "Mangrove restoration and coastal resilience",
    since: "Active on the projects page since 2022",
    status: "Being developed under VCS methodology VM0033",
    summary:
      "A landscape restoration programme across 11 administrative blocks, raising native mangroves with community nurseries and field monitoring.",
    description:
      "Project Sundari restores degraded mangrove ecosystems in the Indian Sundarbans. The public project page sets a long-term restoration area of 4,500 hectares and names 19 native species, particularly Avicennia, Rhizophora and Bruguiera. Restoration activity is described as already covering 438 hectares, with more than 1.2 million saplings planted toward a 3 million-plus ambition. A network of 11 nurseries supports planting and replanting. The carbon framework on that page is the Verified Carbon Standard, methodology VM0033, over a 20-year horizon. It is described as being developed, and this site does not present the project as issued or credit-ready.",
    image: "/media/sundari-cover.jpeg",
    imageAlt:
      "Meensou and EcoAct sign marking a mangrove plantation site at Gangasagar Gram Panchayat",
    heroImage: "/media/field-community.jpg",
    metrics: [
      {
        value: "438 ha",
        label: "Restoration activity covered",
        status: "reported",
        note: "Explained in the project-page body. A conflicting heading says 1,000 hectares.",
      },
      {
        value: "4,500 ha",
        label: "Long-term restoration target",
        status: "target",
        note: "Target restoration area stated for degraded mangrove ecosystems.",
      },
      {
        value: "1.2 million+",
        label: "Saplings planted",
        status: "reported",
        note: "The 3 million-plus figure is the planting ambition, not the reported total.",
      },
      {
        value: "90%",
        label: "Survival rate",
        status: "reported",
        note: "Reported by the project, with nursery backup for replanting.",
      },
      {
        value: "11",
        label: "Nurseries and blocks",
        status: "reported",
        note: "Eleven administrative blocks. Eleven nurseries, ten of them named on the page.",
      },
      {
        value: "80%",
        label: "Plantation participation by women",
        status: "reported",
        note: "As reported on the Project Sundari page.",
      },
    ],
    approach: [
      {
        title: "Find the site",
        text: "Satellite imagery, land-use analysis, NDVI and GIS narrow the search. Kobo forms then check the ground.",
      },
      {
        title: "Agree it locally",
        text: "Gram panchayats and local stakeholder consultations shape where restoration is welcome. Participation is formalised through letters of engagement.",
      },
      {
        title: "Raise and plant",
        text: "Nurseries prepare native stock. Planting follows site conditions, not a single species mix for every mudflat.",
      },
      {
        title: "Watch and replant",
        text: "Field inspections, GPS, water and soil checks, and a central dashboard track survival. Failed patches are replanted from the nursery reserve.",
      },
    ],
    places: [
      "Sagar",
      "Namkhana",
      "Patharpratima",
      "Gosaba",
      "Kakdwip",
      "Mathurapur I",
      "Basanti",
      "Kultali",
      "Hingalganj",
      "Sandeshkhali I",
      "Sandeshkhali II",
    ],
    gallery: [
      {
        src: "/media/sundari-cover.jpeg",
        alt: "Plantation sign for a mangrove site at Gangasagar Gram Panchayat",
        caption: "Gangasagar plantation site",
        place: "Sagar, South 24 Parganas",
      },
      {
        src: "/media/field-community.jpg",
        alt: "Young mangroves in channels of tidal mud",
        caption: "Early plantation",
        place: "Sundarbans",
      },
      {
        src: "/media/mangrove-training.jpg",
        alt: "Mangrove planting training with community members",
        caption: "Mangrove training, 2024",
        place: "Sundarbans",
      },
      {
        src: "/media/cleanliness.jpeg",
        alt: "Community cleanliness walk in white Meensou shirts beside mangrove vegetation",
        caption: "Community cleanliness drive",
        place: "Sundarbans",
      },
      {
        src: "/media/lsc-2025.png",
        alt: "Residents seated at a Sundari local stakeholder consultation",
        caption: "Local stakeholder consultation, 2025",
        place: "Sundarbans",
      },
      {
        src: "/media/field-visit.jpeg",
        alt: "Team monitoring young mangroves in shallow water",
        caption: "Field monitoring, March 2025",
        place: "Radha Krishnapur, West Bengal",
      },
    ],
    sdgs: [1, 5, 13, 14, 15, 17],
    links: [
      {
        label: "Project page on meensou.com",
        href: "https://www.meensou.com/sundari-details/",
      },
    ],
  },
  {
    slug: "utkal-uday",
    index: "02",
    name: "Utkal Uday",
    shortName: "Utkal Uday",
    location: "Ten districts of Odisha",
    focus: "Improved household cookstoves",
    since: "Presented as an active cookstove programme",
    status: "Distribution reported by the project site",
    summary:
      "Prathamesh-1 improved cookstoves for rural kitchens, aimed at cutting indoor smoke and the amount of firewood a household needs.",
    description:
      "Utkal Uday is Meensou India’s improved cookstove initiative in Odisha, described on utkaluday.net as a collaboration with myclimate. The project site reports 20,818 Prathamesh-1 stoves across 10 districts and more than 100,000 lives reached. The stove is described there as exceeding 33% thermal efficiency, with up to 90% smoke reduction and 55–60% less firewood. Meensou’s projects overview rounds distribution to 20,000 stoves and describes firewood savings as up to 50%. Those performance figures are stated product and programme claims, not third-party verified emission totals.",
    image: "/media/utkal-cover.jpeg",
    imageAlt:
      "A cookstove demonstration beside a banner for a local stakeholder consultation in Nayagarh, Odisha, on 20 January 2025",
    heroImage: "/media/utkal-cover.jpeg",
    metrics: [
      {
        value: "20,818",
        label: "Prathamesh-1 stoves",
        status: "reported",
        note: "utkaluday.net. The projects overview says 20,000.",
      },
      {
        value: "10",
        label: "Districts",
        status: "reported",
        note: "Named on utkaluday.net.",
      },
      {
        value: "100,000+",
        label: "Lives reached",
        status: "reported",
        note: "As published on utkaluday.net.",
      },
      {
        value: "90%",
        label: "Smoke reduction",
        status: "stated",
        note: "Stated stove performance on utkaluday.net.",
      },
      {
        value: "33%+",
        label: "Thermal efficiency",
        status: "stated",
        note: "Stated stove performance on utkaluday.net.",
      },
      {
        value: "55–60%",
        label: "Less firewood",
        status: "stated",
        note: "Project site. The Meensou projects page says up to 50%.",
      },
    ],
    approach: [
      {
        title: "Local outreach",
        text: "Teams work with local leaders so households understand what changes in the kitchen and why.",
      },
      {
        title: "Distribution hubs",
        text: "Stoves move through hubs rather than as a one-day drop, so storage and handover stay organised.",
      },
      {
        title: "Use and care",
        text: "Educational sessions cover lighting, fuel use and maintenance of the Prathamesh-1.",
      },
      {
        title: "Follow-up",
        text: "The project site describes surveys, feedback and contact with local authorities after distribution.",
      },
    ],
    places: [
      "Angul",
      "Bargarh",
      "Deogarh",
      "Jharsuguda",
      "Sambalpur",
      "Sundargarh",
      "Kandhamal",
      "Keonjhar",
      "Ganjam",
      "Nayagarh",
    ],
    gallery: [
      {
        src: "/media/utkal-cover.jpeg",
        alt: "Cookstove demonstration at a stakeholder meeting in Nayagarh",
        caption: "Clean Kitchen consultation",
        place: "Chandapur, Nayagarh · 20 January 2025",
      },
    ],
    sdgs: [3, 5, 7, 13],
    links: [
      { label: "Utkal Uday project site", href: "https://utkaluday.net/" },
    ],
  },
  {
    slug: "koshal",
    index: "03",
    name: "Koshal Project",
    shortName: "Koshal",
    location: "Balangir and Kalahandi, Odisha",
    focus: "Clean cooking and tribal livelihoods",
    since: "Active on the projects page since 2023",
    status: "Cookstove distribution reported",
    summary:
      "Improved cookstoves and livelihood work with tribal communities in western Odisha, across two districts.",
    description:
      "The Koshal Project, as described on meensou.com/projects, works with indigenous tribal communities in Balangir and Kalahandi. The page reports 14,000 stoves, 14,000+ tribal families, 26 blocks and 470+ villages. It emphasises awareness in local languages, forest stewardship and a shift toward more sustainable forest-product collection. A public search snippet of koshal.info describes the project as a collaboration with EcoAct; that site could not be fully read during this build, so the collaboration is noted rather than documented with a logo.",
    image: "/media/koshal-cover.png",
    imageAlt:
      "A household kitchen in the Koshal programme, photographed for meensou.com",
    heroImage: "/media/koshal-cover.png",
    metrics: [
      {
        value: "14,000",
        label: "Stoves distributed",
        status: "reported",
        note: "meensou.com/projects",
      },
      {
        value: "14,000+",
        label: "Tribal families",
        status: "reported",
        note: "meensou.com/projects",
      },
      {
        value: "2",
        label: "Districts",
        status: "reported",
        note: "Balangir and Kalahandi.",
      },
      {
        value: "26",
        label: "Blocks",
        status: "reported",
        note: "Block names are not published on the projects page.",
      },
      {
        value: "470+",
        label: "Villages",
        status: "reported",
        note: "meensou.com/projects",
      },
    ],
    approach: [
      {
        title: "Language and trust",
        text: "Awareness is described as running in native tribal languages, with community and forest institutions in the conversation.",
      },
      {
        title: "A stove in the household",
        text: "Improved cookstoves are the household intervention, alongside the wider livelihood work.",
      },
      {
        title: "Forest stewardship",
        text: "The project includes local forest protection and training for community stewardship.",
      },
    ],
    places: ["Balangir", "Kalahandi"],
    gallery: [
      {
        src: "/media/koshal-cover.png",
        alt: "Woman cooking in a village kitchen, published under the Koshal project",
        caption: "Household kitchen",
        place: "Koshal programme, Odisha",
      },
    ],
    sdgs: [3, 5, 7, 8, 13, 15],
    links: [{ label: "Koshal project site", href: "https://www.koshal.info/" }],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
