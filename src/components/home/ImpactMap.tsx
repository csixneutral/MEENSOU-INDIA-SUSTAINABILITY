import { MapLoader } from "@/components/impact/MapLoader";

export function ImpactMap() {
  return (
    <section className="bg-ivory py-24 md:py-32" aria-labelledby="map-heading">
      <div className="shell">
        <p className="eyebrow text-forest/60">Where the work is</p>
        <h2 id="map-heading" className="display mt-4 max-w-4xl text-[clamp(2.4rem,5vw,4.7rem)] text-forest">
          Local Action. Lasting Global Impact.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-charcoal/75">
          Sundari works across eleven blocks of South 24 Parganas. Utkal Uday names ten Odisha districts. Koshal names Balangir and Kalahandi. Offices sit in Kuchinda, Kolkata and Bengaluru.
        </p>
        <div className="mt-12">
          <MapLoader />
        </div>
      </div>
    </section>
  );
}
