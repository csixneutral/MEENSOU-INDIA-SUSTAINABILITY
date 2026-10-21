import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "light" | "dark" | "line" | "ghost";

const styles: Record<Variant, string> = {
  light: "bg-ivory text-forest hover:bg-white",
  dark: "bg-forest text-ivory hover:bg-charcoal",
  line: "border border-forest/25 text-forest hover:border-forest",
  ghost: "border border-ivory/50 text-ivory hover:bg-ivory hover:text-forest",
};

export function ButtonLink({
  href,
  children,
  variant = "dark",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center px-5 py-3 text-[0.72rem] font-semibold tracking-[0.16em] uppercase transition-colors",
        styles[variant],
        className,
      )}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </Link>
  );
}
