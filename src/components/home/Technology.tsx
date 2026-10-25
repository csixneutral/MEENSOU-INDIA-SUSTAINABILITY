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
    <section className="pb-8" aria-labelledby="tech-heading">
      <div className="shell">
        <p className="eyebrow text-forest/55">Monitoring</p>
        <h2 id="tech-heading" className="mt-4 max-w-3xl font-serif text-[clamp(2.4rem,4.6vw,4.4rem)] leading-[0.96] text-forest">
          The tools named in the project record.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-charcoal/75">
          These are the methods Meensou describes in its project documentation. The charts use those published figures. They are not a live operations dashboard.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {tools.map((tool, index) => (
            <article key={tool.title} className="rounded-[1.6rem] bg-white p-6">
              <p className="font-serif text-3xl text-gold">0{index + 1}</p>
              <h3 className="mt-4 font-serif text-3xl text-forest">{tool.title}</h3>
              <p className="mt-3 text-sm leading-7 text-charcoal/70">{tool.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <div className="rounded-[1.6rem] bg-forest p-6 text-ivory">
            <p className="eyebrow text-gold">Published figure</p>
            <h3 className="mt-4 font-serif text-3xl">Sundari restoration progress</h3>
            <p className="mt-3 text-sm leading-7 text-ivory/75">
              {covered} hectares described as covered, against a {target.toLocaleString("en-IN")} hectare target. That is about {pct}% of the stated long-term area.
            </p>
            <div className="mt-6 h-2 rounded-full bg-white/15" role="img" aria-label={`${covered} of ${target} hectares`}>
              <div className="h-full rounded-full bg-gold" style={{ width: `${pct}%` }} />
            </div>
            <p className="mt-3 text-xs tracking-[0.14em] uppercase text-ivory/50">Source: Project Sundari page</p>
          </div>
          <div className="rounded-[1.6rem] bg-white p-6">
            <p className="eyebrow text-forest/50">Published totals</p>
            <h3 className="mt-4 font-serif text-3xl text-forest">Cookstoves on record</h3>
            <StoveChart />
            <p className="text-xs tracking-[0.14em] uppercase text-charcoal/45">
              Utkal figure from utkaluday.net · Koshal figure from meensou.com/projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
