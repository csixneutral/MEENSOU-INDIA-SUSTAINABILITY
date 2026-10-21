import { ParallaxImage } from "@/components/shared/ParallaxImage";
import { ButtonLink } from "@/components/shared/ButtonLink";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-charcoal text-ivory">
      <div className="absolute inset-0 overflow-hidden">
        <ParallaxImage
          src="/media/field-community.jpg"
          alt="Young mangrove saplings standing in tidal channels, with a forest line beyond, in the Indian Sundarbans"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/55 to-charcoal/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-charcoal/30" />
      </div>

      <div className="shell relative flex min-h-[100svh] flex-col justify-end pb-16 pt-32 md:pb-20">
        <p className="rise eyebrow text-gold">Meensou India · Sundarbans & Odisha</p>
        <h1 className="display rise d1 mt-6 max-w-[16ch] text-[clamp(2.7rem,5.4vw,5.5rem)] sm:max-w-none">
          <span className="block">Restoring Nature.</span>
          <span className="block">Empowering Communities.</span>
          <span className="block">Building a Sustainable Future.</span>
        </h1>
        <p className="rise d2 mt-7 max-w-xl text-lg leading-8 text-ivory/85">
          Transforming climate ambition into measurable environmental and community impact.
        </p>
        <div className="rise d3 mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/impact" variant="light">
            Explore Our Impact
          </ButtonLink>
          <ButtonLink href="/projects" variant="ghost">
            Discover Our Projects
          </ButtonLink>
        </div>
        <div className="mt-14 flex items-end justify-between text-[0.72rem] tracking-[0.18em] uppercase text-ivory/70">
          <a href="#purpose" className="inline-flex items-center gap-3">
            <span className="block h-10 w-px bg-ivory/70" aria-hidden />
            Scroll
          </a>
          <p className="hidden sm:block">Field photograph · Project Sundari</p>
        </div>
      </div>
    </section>
  );
}
