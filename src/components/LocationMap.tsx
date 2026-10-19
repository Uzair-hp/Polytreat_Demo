"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";

type MapLocation = {
  id: string;
  title: string;
  address: string;
};

type LocationMapProps = {
  locations: MapLocation[];
};

export default function LocationMap({ locations }: LocationMapProps) {
  const [activeId, setActiveId] = useState(locations[0]?.id ?? "");
  const activeLocation = locations.find(({ id }) => id === activeId) ?? locations[0];

  const mapUrl = useMemo(() => {
    if (!activeLocation) return "";

    const url = new URL("https://maps.google.com/maps");
    url.searchParams.set("q", activeLocation.address);
    url.searchParams.set("z", "14");
    url.searchParams.set("output", "embed");
    return url.toString();
  }, [activeLocation]);

  if (!activeLocation) return null;

  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    activeLocation.address,
  )}`;

  return (
    <div className="contact-redesign-map">
      <div className="contact-redesign-map-toolbar">
        <div className="contact-redesign-map-options" role="group" aria-label="Choose a location to view on the map">
          {locations.map(({ id, title }) => (
            <button
              aria-pressed={activeLocation.id === id}
              className={activeLocation.id === id ? "is-active" : ""}
              key={id}
              onClick={() => setActiveId(id)}
              type="button"
            >
              <MapPin size={14} aria-hidden="true" />
              {title}
            </button>
          ))}
        </div>
        <a href={directionsUrl} target="_blank" rel="noreferrer">
          Open in Maps <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
      <div className="contact-redesign-map-frame">
        <iframe
          key={activeLocation.id}
          src={mapUrl}
          title={`Map showing PolyTreat location in ${activeLocation.title}`}
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
}
