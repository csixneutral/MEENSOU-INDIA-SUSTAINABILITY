import { ButtonLink } from "@/components/shared/ButtonLink";
import { ParallaxImage } from "@/components/shared/ParallaxImage";

export function Purpose() {
  return (
    <section id="purpose" className="bg-ivory py-24 md:py-32">
      <div className="shell grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="eyebrow text-forest/70">Who we are</p>
          <h2 className="display mt-5 text-[clamp(2.6rem,5vw,4.8rem)] text-forest">
            Real Climate Action Begins With People.
          </h2>
          <div className="mt-8 max-w-xl space-y-5 text-lg leading-8 text-charcoal/80">
            <p>
              Meensou India Private Limited builds climate projects that stay with the households and coastlines they are meant to serve. Mangrove restoration in the Sundarbans and improved cookstoves in rural Odisha are one practice: cut emissions where people already live, and leave a livelihood behind the carbon account.
            </p>
            <p>
              The environmental work is specific. Native mangroves go back onto degraded tidal land. Inefficient wood fires are replaced with the Prathamesh-1 stove. Monitoring, nurseries and village consultations are part of the project, not an appendix.
            </p>
            <p>
              The commitment is long. Sundari is framed on a 20-year carbon horizon. The cookstove programmes are built around use, maintenance and follow-up, not a single distribution day.
            </p>
          </div>
          <div className="mt-10">
            <ButtonLink href="/about" variant="line">
              About the organisation
            </ButtonLink>
          </div>
        </div>
        <div className="relative min-h-[520px] overflow-hidden lg:col-span-6 lg:min-h-[680px]">
          <ParallaxImage
            src="/media/mangrove-training.jpg"
            alt="Community members learning mangrove planting on a tidal flat in the Sundarbans"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <p className="absolute bottom-0 left-0 bg-ivory/92 px-4 py-3 text-xs tracking-[0.14em] uppercase">
            Mangrove training · Sundarbans · 2024
          </p>
        </div>
      </div>
    </section>
  );
}
