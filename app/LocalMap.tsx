"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LAT = -23.637165;
const LNG = -47.320345;

export default function LocalMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || (el as HTMLDivElement & { _leaflet_id?: number })._leaflet_id) {
      return;
    }

    const map = L.map(el, {
      center: [LAT, LNG],
      zoom: 14,
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
      html: '<span class="loc-leaflet-dot"></span>',
      iconSize: [28, 28],
      iconAnchor: [14, 14],
    });

    L.marker([LAT, LNG], { icon })
      .addTo(map)
      .bindPopup(
        "<strong>Marina Veleiros de Ibiúna</strong><br/>Represa de Itupararanga",
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
      aria-label="Mapa da Marina Veleiros de Ibiúna"
    />
  );
}
