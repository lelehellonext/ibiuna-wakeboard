"use client";

import dynamic from "next/dynamic";

const LocalMap = dynamic(() => import("./LocalMap"), {
  ssr: false,
  loading: () => <div className="loc-leaflet loc-leaflet-skeleton" aria-hidden />,
});

export default function LocalMapClient() {
  return <LocalMap />;
}
