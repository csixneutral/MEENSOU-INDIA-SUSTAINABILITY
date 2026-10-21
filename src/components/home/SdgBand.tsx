import Link from "next/link";
import { sdgs } from "@/data/impact";

export function SdgBand() {
  return (
    <section className="bg-white py-24 md:py-32" aria-labelledby="sdg-heading">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-forest/60">Global goals</p>
            <h2 id="sdg-heading" className="display mt-4 text-[clamp(2.4rem,4.5vw,4.4rem)] text-forest">
              Our Commitment to Global Goals.
            </h2>
            <p className="mt-6 text-lg leading-8 text-charcoal/75">
              These are the Sustainable Development Goals Meensou’s published work speaks to. The listing is an account of contribution. It is not a UN endorsement or a formal affiliation.
            </p>
            <Link href="/sustainability" className="mt-8 inline-flex text-xs tracking-[0.16em] uppercase text-forest">
              Read the sustainability approach
            </Link>
          </div>
          <ol className="lg:col-span-7">
            {sdgs.map((goal) => (
              <li key={goal.number} className="grid grid-cols-[auto_1fr] gap-5 border-t border-charcoal/10 py-5">
                <span
                  className="flex h-12 w-12 items-center justify-center font-display text-lg text-white"
                  style={{ backgroundColor: goal.color }}
                  aria-hidden
                >
                  {goal.number}
                </span>
                <div>
                  <h3 className="font-display text-xl text-forest">
                    <span className="sr-only">SDG {goal.number}: </span>
                    {goal.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-charcoal/75">{goal.text}</p>
                  <p className="mt-2 text-xs tracking-[0.12em] uppercase text-charcoal/45">{goal.projects}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
