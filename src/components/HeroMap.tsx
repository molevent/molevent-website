"use client";

import { Map, MapMarker, MarkerContent } from "@/components/ui/map";

const CHIANG_MAI: [number, number] = [98.9853, 18.7883];

const ACTIVE_NODES: { name: string; coords: [number, number] }[] = [
  { name: "BANGKOK", coords: [100.5018, 13.7563] },
  { name: "SINGAPORE", coords: [103.8198, 1.3521] },
  { name: "TAIPEI", coords: [121.5654, 25.033] },
  { name: "TOKYO", coords: [139.6917, 35.6895] },
  { name: "FRANKFURT", coords: [8.6821, 50.1109] },
  { name: "LOS ANGELES", coords: [-118.2437, 34.0522] },
];

export default function HeroMap() {
  return (
    <Map
      center={CHIANG_MAI}
      zoom={1.5}
      projection={{ type: "globe" }}
      theme="light"
      className="w-full h-full"
      interactive={false}
      attributionControl={false}
      dragPan={false}
      scrollZoom={false}
      doubleClickZoom={false}
      touchZoomRotate={false}
      keyboard={false}
      dragRotate={false}
    >
      {/* HQ Marker - Chiang Mai */}
      <MapMarker longitude={CHIANG_MAI[0]} latitude={CHIANG_MAI[1]}>
        <MarkerContent>
          <div className="relative">
            <div className="w-3 h-3 bg-primary animate-pulse-green" />
            <div className="absolute -inset-1 border border-primary opacity-50" />
          </div>
        </MarkerContent>
      </MapMarker>

      {/* Active Node Markers */}
      {ACTIVE_NODES.map((node) => (
        <MapMarker key={node.name} longitude={node.coords[0]} latitude={node.coords[1]}>
          <MarkerContent>
            <div className="w-2 h-2 bg-primary" />
          </MarkerContent>
        </MapMarker>
      ))}
    </Map>
  );
}
