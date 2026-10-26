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
    <section className="bg-charcoal py-16 text-ivory md:py-20" aria-labelledby="tech-heading">
      <div className="shell">
        <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-gold uppercase">Monitoring</p>
        <h2 id="tech-heading" className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
          The tools named in the project record.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ivory/70">
          These are the methods Meensou describes in its project documentation. The charts use those published figures. They are not a live operations dashboard.
        </p>
        <div className="mt-10 grid border border-white/15 sm:grid-cols-2">
          {tools.map((tool, index) => (
            <article key={tool.title} className="border-b border-white/15 p-6 sm:odd:border-r">
              <p className="font-display text-sm tracking-[0.16em] text-gold">0{index + 1}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold">{tool.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ivory/70">{tool.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-px grid border border-white/15 lg:grid-cols-2">
          <div className="border-b border-white/15 p-6 lg:border-r lg:border-b-0">
            <p className="text-[0.72rem] tracking-[0.16em] text-gold uppercase">Published figure</p>
            <h3 className="mt-3 font-display text-2xl font-semibold">Sundari restoration progress</h3>
            <p className="mt-3 text-sm leading-7 text-ivory/70">
              {covered} hectares described as covered, against a {target.toLocaleString("en-IN")} hectare target. That is about {pct}% of the stated long-term area.
            </p>
            <div className="mt-6 h-1 bg-white/15" role="img" aria-label={`${covered} of ${target} hectares`}>
              <div className="h-full bg-gold" style={{ width: `${pct}%` }} />
            </div>
            <p className="mt-3 text-xs tracking-[0.14em] uppercase text-ivory/45">Source: Project Sundari page</p>
          </div>
          <div className="bg-[#efece3] p-6 text-charcoal">
            <p className="text-[0.72rem] tracking-[0.16em] text-forest/60 uppercase">Published totals</p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-forest">Cookstoves on record</h3>
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
