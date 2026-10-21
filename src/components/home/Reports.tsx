import Link from "next/link";
import { publications } from "@/data/stories";

export function Reports() {
  const featured = publications.slice(0, 4);
  return (
    <section className="bg-ivory py-24 md:py-32" aria-labelledby="reports-heading">
      <div className="shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-forest/60">Reports and publications</p>
            <h2 id="reports-heading" className="display mt-4 max-w-3xl text-[clamp(2.4rem,5vw,4.5rem)] text-forest">
              The public record, without invented documents.
            </h2>
          </div>
          <Link href="/reports" className="text-xs tracking-[0.16em] uppercase text-forest">
            Open the library
          </Link>
        </div>
        <div className="mt-12 divide-y divide-charcoal/15 border-y border-charcoal/15">
          {featured.map((item) => (
            <article key={item.title} className="grid gap-3 py-7 md:grid-cols-12 md:items-center">
              <p className="text-sm text-charcoal/50 md:col-span-2">{item.year}</p>
              <div className="md:col-span-7">
                <p className="text-xs tracking-[0.14em] uppercase text-forest/50">{item.category}</p>
                <h3 className="mt-2 font-display text-2xl text-forest">{item.title}</h3>
              </div>
              <div className="md:col-span-3 md:text-right">
                {item.href ? (
                  <Link href={item.href} className="text-xs tracking-[0.14em] uppercase text-forest" {...(item.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>
                    {item.action}
                  </Link>
                ) : (
                  <span className="text-xs tracking-[0.14em] uppercase text-charcoal/40">{item.action}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
