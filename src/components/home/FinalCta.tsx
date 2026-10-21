import { ParallaxImage } from "@/components/shared/ParallaxImage";
import { ButtonLink } from "@/components/shared/ButtonLink";

export function FinalCta() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-charcoal text-ivory">
      <ParallaxImage
        src="/media/cleanliness.jpeg"
        alt="Community members walking a mangrove path during a Meensou cleanliness drive"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-charcoal/65" />
      <div className="shell relative flex min-h-[80vh] flex-col justify-end py-20">
        <h2 className="display max-w-5xl text-[clamp(2.6rem,6vw,5.6rem)]">
          The Future We Build Today Shapes the World of Tomorrow.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-8 text-ivory/85">
          Join us in advancing climate action, restoring ecosystems and creating meaningful opportunities for communities.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact?topic=partnership" variant="light">
            Partner With Meensou
          </ButtonLink>
          <ButtonLink href="/contact" variant="ghost">
            Contact Our Team
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
