import Link from "next/link";
import { headlineMetrics } from "@/data/impact";
import { CountUp } from "@/components/shared/CountUp";
import { Status } from "@/components/shared/Status";

export function ImpactBand() {
  return (
    <section className="bg-forest py-20 text-ivory md:py-28" aria-labelledby="impact-heading">
      <div className="shell">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow text-gold">Impact at a glance</p>
            <h2 id="impact-heading" className="display mt-4 text-[clamp(2.4rem,5vw,4.6rem)]">
              Our Impact. Measured in Meaningful Change.
            </h2>
          </div>
          <Link href="/impact" className="eyebrow border-b border-gold pb-1 text-gold">
            View impact report
          </Link>
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-ivory/70">
          Figures below are taken from Meensou’s public project pages. Targets, stated stove performance and unpublished items are labeled. Where two pages disagree, the more fully explained figure is used.
        </p>
        <dl className="mt-14 grid border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {headlineMetrics.map((metric) => (
            <div key={metric.id} className="border-b border-white/15 py-9 sm:px-6 sm:odd:pl-0 lg:[&:nth-child(3n)]:pr-0 lg:[&:nth-child(3n+1)]:pl-0">
              <Status status={metric.status} />
              <dt className="sr-only">{metric.label}</dt>
              <dd className="display mt-4 text-[clamp(2.6rem,4vw,4.2rem)]">
                {metric.end !== undefined ? (
                  <CountUp end={metric.end} suffix={metric.suffix} decimals={metric.decimals} label={metric.label} />
                ) : (
                  metric.value
                )}
              </dd>
              <p className="mt-3 text-base text-ivory">{metric.label}</p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-ivory/65">{metric.detail}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
