export type MetricStatus = "reported" | "target" | "stated" | "unpublished";

export type Metric = {
  id: string;
  value: string;
  end?: number;
  decimals?: number;
  suffix?: string;
  label: string;
  detail: string;
  status: MetricStatus;
  source: string;
};

export type ProjectSlug = "sundari" | "utkal-uday" | "koshal";

export type ProjectMetric = {
  value: string;
  label: string;
  status: MetricStatus;
  note: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  place: string;
};

export type Project = {
  slug: ProjectSlug;
  index: string;
  name: string;
  shortName: string;
  location: string;
  focus: string;
  since: string;
  status: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  heroImage: string;
  metrics: ProjectMetric[];
  approach: { title: string; text: string }[];
  places: string[];
  gallery: GalleryImage[];
  sdgs: number[];
  links: { label: string; href: string }[];
};

export type MapPrecision = "field-photo" | "administrative-centre" | "published-address";

export type MapLocation = {
  id: string;
  name: string;
  kind: "mangrove" | "cookstove" | "office";
  project: string;
  region: string;
  lat: number;
  lng: number;
  summary: string;
  href?: string;
  precision: MapPrecision;
};

export type Story = {
  id: string;
  title: string;
  place: string;
  year: string;
  image?: string;
  alt?: string;
  text: string;
  source: string;
};

export type Publication = {
  title: string;
  year: string;
  category: string;
  summary: string;
  href?: string;
  action: "View source" | "Open project page" | "Listed, no file";
};

export type Office = {
  region: string;
  role: string;
  lines: string[];
};
