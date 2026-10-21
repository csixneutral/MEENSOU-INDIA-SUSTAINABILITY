export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function statusLabel(status: string) {
  switch (status) {
    case "reported":
      return "Reported";
    case "target":
      return "Target";
    case "stated":
      return "Stated performance";
    case "unpublished":
      return "Not published";
    default:
      return status;
  }
}
