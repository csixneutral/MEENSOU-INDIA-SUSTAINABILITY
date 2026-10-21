import Link from "next/link";
import { pillars } from "@/data/impact";
import { ParallaxImage } from "@/components/shared/ParallaxImage";

const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

export function Pillars() {
  return (
    <section className="bg-ivory py-24 md:py-32" aria-labelledby="pillars-heading">
      <div className="shell">
        <p className="eyebrow text-forest/70">How the work is organised</p>
        <h2 id="pillars-heading" className="display mt-4 max-w-3xl text-[clamp(2.4rem,5vw,4.6rem)] text-forest">
          Four commitments. One field practice.
        </h2>
        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          {pillars.map((pillar, index) => (
            <article key={pillar.id} className={`group relative min-h-[460px] overflow-hidden bg-charcoal text-ivory ${spans[index]}`}>
              <ParallaxImage src={pillar.image} alt={pillar.alt} sizes="(min-width: 1024px) 55vw, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/25 to-charcoal/10 transition-opacity duration-500 group-hover:from-charcoal/95" />
              <div className="relative flex h-full min-h-[460px] flex-col justify-between p-7 md:p-9">
                <p className="font-serif text-5xl text-ivory/80">{pillar.index}</p>
                <div>
                  <h3 className="display text-4xl md:text-5xl">{pillar.title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-ivory/85">{pillar.text}</p>
                  <Link href={pillar.href} className="mt-6 inline-flex text-xs tracking-[0.18em] uppercase text-gold">
                    Explore
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
