import { MapLoader } from "@/components/impact/MapLoader";

export function ImpactMap() {
  return (
    <section className="bg-[#efece3] py-16 md:py-20" aria-labelledby="map-heading">
      <div className="shell">
        <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-forest/55 uppercase">Where the work is</p>
        <h2 id="map-heading" className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-[-0.04em] text-forest md:text-5xl">
          Mapped to the places named in the record.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-charcoal/75">
          Sundari works across eleven blocks of South 24 Parganas. Utkal Uday names ten Odisha districts. Koshal names Balangir and Kalahandi. Offices sit in Kuchinda, Kolkata and Bengaluru.
        </p>
        <div className="mt-8 border border-charcoal/15 bg-white p-4 md:p-6">
          <MapLoader />
        </div>
      </div>
    </section>
  );
}
