import Image from "next/image";
import Link from "next/link";
import { offices, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-ivory">
      <div className="shell flex flex-col gap-10 py-14 md:flex-row md:items-end md:justify-between">
        <div>
          <a href="/#content" className="inline-flex items-center gap-3">
            <Image src="/media/logo.png" alt="" width={36} height={36} className="h-9 w-9 bg-ivory object-cover" />
            <span className="font-display tracking-[0.2em]">MEENSOU</span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-7 text-ivory/75">
            {site.name} develops mangrove restoration in the Sundarbans and improved cookstove programmes in rural Odisha.
          </p>
        </div>
        <div className="text-sm leading-7 text-ivory/75">
          <a href={`mailto:${site.email}`} className="text-ivory">{site.email}</a>
          <span className="mx-2 text-ivory/40">/</span>
          <a href={site.phoneHref} className="text-ivory">{site.phone}</a>
          <p className="mt-3 max-w-md">
            {offices.map((office) => office.lines.join(", ")).join(" · ")}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-3 py-5 text-xs tracking-wide text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
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
