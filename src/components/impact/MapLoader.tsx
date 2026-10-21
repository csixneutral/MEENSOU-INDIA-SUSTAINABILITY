"use client";

import dynamic from "next/dynamic";

const MapCanvas = dynamic(
  () => import("@/components/impact/MapCanvas").then((mod) => mod.MapCanvas),
  {
    ssr: false,
    loading: () => <div className="h-[520px] animate-pulse bg-sage/30" aria-hidden />,
  },
);

export function MapLoader() {
  return <MapCanvas />;
}
