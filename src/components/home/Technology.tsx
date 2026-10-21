import { StoveChart } from "@/components/impact/StoveChart";

const tools = [
  {
    title: "Field data collection",
    text: "Kobo forms capture pre-restoration assessments, social baselines and monitoring plots. Cookstove work uses field apps for surveys and stove records.",
  },
  {
    title: "Geographic checks",
    text: "Sundari uses satellite imagery, land-use analysis, NDVI and GPS. A March 2025 field photograph carries its own coordinate.",
  },
  {
    title: "Ecological measurement",
    text: "Water and soil checks cover pH, salinity, temperature, turbidity, dissolved oxygen and conductivity, alongside height and girth tools.",
  },
  {
    title: "Reporting",
    text: "The project page describes a central dashboard for plantation metrics, survival and analytical reports. It is not connected as a live feed on this website.",
  },
];

export function Technology() {
  const covered = 438;
  const target = 4500;
  const pct = Math.round((covered / target) * 1000) / 10;

  return (
    <section className="bg-forest py-24 text-ivory md:py-32" aria-labelledby="tech-heading">
      <div className="shell grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow text-gold">Technology and transparency</p>
          <h2 id="tech-heading" className="display mt-4 text-[clamp(2.4rem,4.5vw,4.4rem)]">
            Technology That Makes Impact Visible.
          </h2>
          <p className="mt-6 text-lg leading-8 text-ivory/75">
            The tools below are the ones Meensou describes in its project documentation. The charts use those published figures. They are not a live operations dashboard.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
          {tools.map((tool, index) => (
            <article key={tool.title} className="border border-white/15 p-6">
              <p className="font-serif text-3xl text-gold">0{index + 1}</p>
              <h3 className="mt-4 font-display text-2xl">{tool.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ivory/75">{tool.text}</p>
            </article>
          ))}
        </div>
        <div className="grid gap-5 border-t border-white/15 pt-10 lg:col-span-12 lg:grid-cols-2">
          <div className="border border-white/15 p-6">
            <p className="eyebrow text-sage">Illustrative view of a published figure</p>
            <h3 className="mt-4 font-display text-2xl">Sundari restoration progress</h3>
            <p className="mt-3 text-sm leading-7 text-ivory/70">
              {covered} hectares described as covered, against a {target.toLocaleString("en-IN")} hectare target. That is about {pct}% of the stated long-term area.
            </p>
            <div className="mt-6 h-2 bg-white/10" role="img" aria-label={`${covered} of ${target} hectares`}>
              <div className="h-full bg-gold" style={{ width: `${pct}%` }} />
            </div>
            <p className="mt-3 text-xs tracking-[0.14em] uppercase text-ivory/50">Source: Project Sundari page</p>
          </div>
          <div className="border border-white/15 p-6">
            <p className="eyebrow text-sage">Illustrative view of published totals</p>
            <h3 className="mt-4 font-display text-2xl">Cookstoves on record</h3>
            <StoveChart />
            <p className="text-xs tracking-[0.14em] uppercase text-ivory/50">
              Utkal figure from utkaluday.net · Koshal figure from meensou.com/projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
