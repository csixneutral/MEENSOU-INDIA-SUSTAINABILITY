"use client";

import { useEffect, useMemo, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import Link from "next/link";
import { locations } from "@/data/locations";
import type { MapLocation } from "@/types";
import { cn } from "@/lib/utils";
import "leaflet/dist/leaflet.css";

const filters = [
  { id: "all", label: "All" },
  { id: "mangrove", label: "Mangroves" },
  { id: "cookstove", label: "Cookstoves" },
  { id: "office", label: "Offices" },
] as const;

type FilterId = (typeof filters)[number]["id"];

function iconFor(kind: MapLocation["kind"], active: boolean) {
  const kindClass = kind === "cookstove" ? "cook" : kind === "office" ? "office" : "";
  return L.divIcon({
    className: "",
    html: `<span class="map-pin ${kindClass} ${active ? "active" : ""}"></span>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
    popupAnchor: [0, -12],
  });
}

function Fit({ points }: { points: MapLocation[] }) {
  const map = useMap();
  useEffect(() => {
    if (!points.length) return;
    const bounds = L.latLngBounds(points.map((point) => [point.lat, point.lng]));
    map.fitBounds(bounds.pad(0.25), { animate: false });
  }, [map, points]);
  return null;
}

export function MapCanvas() {
  const [filter, setFilter] = useState<FilterId>("all");
  const [selected, setSelected] = useState<string>(locations[0]?.id ?? "");

  const visible = useMemo(
    () => (filter === "all" ? locations : locations.filter((item) => item.kind === filter)),
    [filter],
  );
  const current = visible.find((item) => item.id === selected) ?? visible[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
      <div>
        <div className="mb-4 flex flex-wrap gap-2" role="toolbar" aria-label="Filter map">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setFilter(item.id);
                const next = item.id === "all" ? locations[0] : locations.find((place) => place.kind === item.id);
                if (next) setSelected(next.id);
              }}
              className={cn(
                "border px-3 py-2 text-[0.72rem] tracking-[0.14em] uppercase",
                filter === item.id ? "border-forest bg-forest text-ivory" : "border-charcoal/15 bg-ivory text-charcoal",
              )}
              aria-pressed={filter === item.id}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="h-[520px] overflow-hidden border border-charcoal/10">
          <MapContainer
            center={[22.2, 84.5]}
            zoom={5}
            scrollWheelZoom={false}
            className="h-full w-full"
            aria-label="Map of Meensou project locations in India"
          >
            <TileLayer
              attribution='&copy; OpenStreetMap &copy; CARTO'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />
            <Fit points={visible} />
            {visible.map((place) => (
              <Marker
                key={place.id}
                position={[place.lat, place.lng]}
                icon={iconFor(place.kind, place.id === current?.id)}
                eventHandlers={{ click: () => setSelected(place.id) }}
              >
                <Popup>
                  <strong>{place.name}</strong>
                  <br />
                  {place.project}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        <p className="mt-3 text-xs leading-5 text-charcoal/60">
          Mangrove markers, other than Gangasagar, are administrative centres of named blocks. Cookstove markers are district headquarters. They are not household or plot coordinates.
        </p>
      </div>
      {current ? (
        <aside className="flex flex-col justify-between border border-charcoal/10 bg-[#efece3] p-6">
          <div>
            <p className="eyebrow text-forest/60">{current.project}</p>
            <h3 className="display mt-3 text-4xl text-forest">{current.name}</h3>
            <p className="mt-2 text-sm text-charcoal/70">{current.region}</p>
            <p className="mt-5 text-sm leading-7 text-charcoal/80">{current.summary}</p>
            <p className="mt-4 text-xs tracking-[0.12em] uppercase text-charcoal/50">
              {current.precision.replace("-", " ")}
            </p>
          </div>
          {current.href ? (
            <Link href={current.href} className="mt-8 text-xs tracking-[0.16em] uppercase text-forest">
              Open related page
            </Link>
          ) : null}
          <ul className="mt-8 max-h-48 space-y-2 overflow-auto border-t border-charcoal/10 pt-4 text-sm">
            {visible.map((place) => (
              <li key={place.id}>
                <button
                  type="button"
                  onClick={() => setSelected(place.id)}
                  className={cn("text-left", place.id === current.id ? "text-forest" : "text-charcoal/60")}
                >
                  {place.name}
                </button>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}
    </div>
  );
}
