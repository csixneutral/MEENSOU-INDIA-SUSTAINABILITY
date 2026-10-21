export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="bg-forest pt-36 pb-16 text-ivory md:pt-44 md:pb-24">
      <div className="shell">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className="display mt-5 max-w-5xl text-[clamp(2.7rem,6.4vw,5.6rem)]">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-ivory/78">{lede}</p>
      </div>
    </header>
  );
}
