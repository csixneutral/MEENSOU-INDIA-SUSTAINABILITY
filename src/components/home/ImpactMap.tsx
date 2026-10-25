import { MapLoader } from "@/components/impact/MapLoader";

export function ImpactMap() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="map-heading">
      <div className="shell">
        <p className="eyebrow text-forest/55">Where the work is</p>
        <h2 id="map-heading" className="mt-4 max-w-3xl font-serif text-[clamp(2.4rem,4.6vw,4.4rem)] leading-[0.96] text-forest">
          Mapped to the places named in the record.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-charcoal/75">
          Sundari works across eleven blocks of South 24 Parganas. Utkal Uday names ten Odisha districts. Koshal names Balangir and Kalahandi. Offices sit in Kuchinda, Kolkata and Bengaluru.
        </p>
        <div className="mt-10 overflow-hidden rounded-[1.8rem] border border-charcoal/10 bg-white p-4 md:p-6">
          <MapLoader />
        </div>
      </div>
    </section>
  );
}
