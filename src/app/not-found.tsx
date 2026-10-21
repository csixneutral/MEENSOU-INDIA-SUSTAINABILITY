import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-forest pt-40 pb-24 text-ivory">
      <div className="shell">
        <p className="eyebrow text-gold">404</p>
        <h1 className="display mt-4 text-6xl">This page is not on the map.</h1>
        <Link href="/" className="mt-8 inline-flex border border-ivory/40 px-5 py-3 text-xs tracking-[0.16em] uppercase">
          Back to the homepage
        </Link>
      </div>
    </section>
  );
}
