"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { storyChapters } from "@/data/impact";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function StorySequence() {
  const [active, setActive] = useState(0);
  const chapter = storyChapters[active] ?? storyChapters[0];

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const triggers = storyChapters.map((_, index) =>
        ScrollTrigger.create({
          trigger: `#story-${index}`,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive) setActive(index);
          },
        }),
      );
      return () => triggers.forEach((trigger) => trigger.kill());
    });
    return () => mm.revert();
  }, []);

  return (
    <section className="bg-forest-deep text-ivory" aria-labelledby="story-heading">
      <div className="lg:grid lg:grid-cols-12">
        <div className="shell py-16 lg:sticky lg:top-0 lg:col-span-5 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-28">
          <div>
            <p className="eyebrow text-gold">Environmental impact story</p>
            <h2 id="story-heading" className="display mt-4 text-[clamp(2.5rem,4vw,4.4rem)]">
              From the Forest to the Family.
            </h2>
          </div>
          <div className="mt-10 hidden lg:block">
            <p className="font-serif text-6xl text-gold/90">{chapter.index}</p>
            <p className="mt-4 text-sm tracking-[0.16em] uppercase text-sage">{chapter.kicker}</p>
            <p className="display mt-3 text-4xl">{chapter.title}</p>
            <ol className="mt-8 flex gap-3" aria-label="Story progress">
              {storyChapters.map((item, index) => (
                <li key={item.index}>
                  <span
                    className={cn("block h-1 w-10", index <= active ? "bg-gold" : "bg-white/20")}
                  />
                  <span className="sr-only">
                    {item.kicker}
                    {index === active ? ", current" : ""}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="lg:col-span-7">
          {storyChapters.map((item, index) => (
            <article id={`story-${index}`} key={item.index} className="relative min-h-[78vh] lg:min-h-screen">
              <Image src={item.image} alt={item.alt} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/25 to-transparent" />
              <div className="relative flex min-h-[78vh] items-end p-6 md:p-12 lg:min-h-screen">
                <div className="max-w-lg">
                  <p className="eyebrow text-gold lg:hidden">
                    {item.index} · {item.kicker}
                  </p>
                  <h3 className="display mt-3 text-4xl lg:hidden">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-ivory/90">{item.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
