import { statusLabel } from "@/lib/utils";

export function Status({ status }: { status: string }) {
  return <span className="eyebrow text-gold">{statusLabel(status)}</span>;
}
