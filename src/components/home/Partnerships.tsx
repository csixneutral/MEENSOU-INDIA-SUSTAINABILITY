import { ButtonLink } from "@/components/shared/ButtonLink";

const partners = [
  {
    name: "EcoAct",
    text: "Named on Sundari plantation signage, on the project page, and in Meensou’s account of the June 2025 Kolkata workshop.",
  },
  {
    name: "myclimate",
    text: "Named on utkaluday.net as the collaborator for the Utkal Uday cookstove programme.",
  },
  {
    name: "Bengal Chamber",
    text: "Decarbonisation engagement cited on the Project Sundari page across 2024 chamber materials.",
  },
  {
    name: "Panchayats and households",
    text: "Gram panchayats, nursery groups and cookstove households are the implementation partners the projects actually describe.",
  },
];

export function Partnerships() {
  return (
    <section className="bg-white py-24 md:py-32" aria-labelledby="partners-heading">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow text-forest/60">Partnerships</p>
          <h2 id="partners-heading" className="display mt-4 text-[clamp(2.4rem,4.5vw,4.4rem)] text-forest">
            Stronger Partnerships. Greater Impact.
          </h2>
          <p className="mt-6 text-lg leading-8 text-charcoal/75">
            Meensou works with corporate sustainability teams, climate-finance practitioners, environmental institutions and community organisations. Logos are shown only where a partnership is verified and a logo file is cleared for use. None are placed here.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact?topic=partnership">Explore Partnership Opportunities</ButtonLink>
          </div>
        </div>
        <ol className="lg:col-span-7">
          {partners.map((partner, index) => (
            <li key={partner.name} className="grid grid-cols-[auto_1fr] gap-6 border-t border-charcoal/10 py-6">
              <span className="font-serif text-3xl text-gold">0{index + 1}</span>
              <div>
                <h3 className="font-display text-2xl text-forest">{partner.name}</h3>
                <p className="mt-2 text-sm leading-7 text-charcoal/75">{partner.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
