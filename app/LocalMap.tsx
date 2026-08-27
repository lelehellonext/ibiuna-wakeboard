"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/** POI Google Maps: Nautica Veleiros de Ibiuna — Represa de Itupararanga */
const LAT = -23.639292;
const LNG = -47.3235456;
const PLACE = "Nautica Veleiros de Ibiuna";

export default function LocalMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || (el as HTMLDivElement & { _leaflet_id?: number })._leaflet_id) {
      return;
    }

    const map = L.map(el, {
      center: [LAT, LNG],
      zoom: 15,
      scrollWheelZoom: false,
      zoomControl: false,
      attributionControl: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    L.control.zoom({ position: "bottomright" }).addTo(map);

    const icon = L.divIcon({
      className: "loc-leaflet-marker",
      html: '<span class="loc-leaflet-dot" aria-hidden="true"></span>',
      iconSize: [28, 28],
      iconAnchor: [14, 14],
    });

    L.marker([LAT, LNG], { icon })
      .addTo(map)
      .bindTooltip(PLACE, {
        permanent: true,
        direction: "top",
        offset: [0, -14],
        className: "loc-leaflet-tooltip",
        opacity: 1,
      })
      .bindPopup(
        `<strong>${PLACE}</strong><br/>Represa de Itupararanga · Ibiúna/SP`,
        { closeButton: false }
      );

    const resize = () => map.invalidateSize();
    resize();
    window.addEventListener("resize", resize);
    const t = window.setTimeout(resize, 250);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("resize", resize);
      map.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="loc-leaflet"
      role="img"
      aria-label={`Mapa da ${PLACE}`}
    />
  );
}
