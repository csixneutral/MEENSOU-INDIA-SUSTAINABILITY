import Image from "next/image";
import { stories } from "@/data/stories";

export function People() {
  return (
    <section className="bg-ivory py-24 md:py-32" aria-labelledby="people-heading">
      <div className="shell">
        <p className="eyebrow text-forest/60">People behind the impact</p>
        <h2 id="people-heading" className="display mt-4 max-w-4xl text-[clamp(2.4rem,5vw,4.6rem)] text-forest">
          The People Who Make Change Possible.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-charcoal/75">
          These are field records published by Meensou. Names and quotations are not added where the source does not provide them.
        </p>
        <div className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2">
          {stories.map((story) => (
            <article key={story.id} className="grid gap-5 sm:grid-cols-[0.9fr_1.1fr] sm:items-start">
              {story.image ? (
                <div className="relative aspect-[4/5] overflow-hidden bg-sage/30">
                  <Image src={story.image} alt={story.alt ?? ""} fill sizes="(min-width: 768px) 28vw, 100vw" className="object-cover" />
                </div>
              ) : (
                <div className="flex aspect-[4/5] items-end bg-forest p-6 text-ivory">
                  <p className="font-serif text-3xl leading-snug">A record without a portrait, so none is invented.</p>
                </div>
              )}
              <div>
                <p className="eyebrow text-forest/50">
                  {story.place} · {story.year}
                </p>
                <h3 className="display mt-3 text-3xl text-forest">{story.title}</h3>
                <p className="mt-4 text-base leading-7 text-charcoal/80">{story.text}</p>
                <p className="mt-4 text-xs tracking-[0.12em] uppercase text-charcoal/45">{story.source}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
