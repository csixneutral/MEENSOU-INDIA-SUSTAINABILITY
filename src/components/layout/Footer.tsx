import Image from "next/image";
import Link from "next/link";
import { offices, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-gold/40 bg-charcoal text-ivory">
      <div className="shell flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <a href="/#content" className="inline-flex items-center gap-3">
            <Image src="/media/logo.png" alt="" width={32} height={32} className="size-8 bg-ivory object-cover" />
            <span className="font-display font-semibold tracking-[0.2em]">MEENSOU</span>
          </a>
          <p className="mt-4 max-w-sm text-sm leading-7 text-ivory/70">
            {site.name} develops mangrove restoration in the Sundarbans and improved cookstove programmes in rural Odisha.
          </p>
        </div>
        <div className="text-sm leading-7 text-ivory/70">
          <a href={`mailto:${site.email}`} className="text-ivory">{site.email}</a>
          <span className="mx-2 text-gold">/</span>
          <a href={site.phoneHref} className="text-ivory">{site.phone}</a>
          <p className="mt-3 max-w-md">{offices.map((office) => office.lines.join(", ")).join(" · ")}</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-3 py-4 text-xs tracking-wide text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <div className="flex gap-5">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
