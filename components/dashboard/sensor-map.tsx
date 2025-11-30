"use client"

import { useEffect, useRef } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import "leaflet.heat"
import { allSensors } from "@/lib/dummy-data"

// Fix for default marker icons
const iconUrl = "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png";
const iconRetinaUrl = "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";
const shadowUrl = "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
    iconUrl: iconUrl,
    iconRetinaUrl: iconRetinaUrl,
    shadowUrl: shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Create a red icon for critical markers
const criticalIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

export default function SensorMap() {
    // Prepare heatmap data: [lat, lng, intensity]
    // Normalize AQI to 0-1 range for intensity (assuming max AQI around 500)
    const heatPoints: [number, number, number][] = allSensors.map(s => [
        s.lat,
        s.lng,
        Math.min(s.aqi / 500, 1.0) // Cap at 1.0
    ]);

    // Get top 5 critical sensors
    const criticalSensors = [...allSensors]
        .sort((a, b) => b.aqi - a.aqi)
        .slice(0, 5);

    const markerRefs = useRef<L.Marker[]>([]);

    useEffect(() => {
        // Open the popup of the most critical sensor after a short delay to ensure map is ready
        const timer = setTimeout(() => {
            if (markerRefs.current[0]) {
                markerRefs.current[0].openPopup();
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative h-full w-full">
            <MapContainer
                center={[28.6139, 77.2090]}
                zoom={11}
                scrollWheelZoom={false}
                className="h-full w-full rounded-lg"
                style={{ minHeight: "100%", zIndex: 0 }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />

                <HeatmapLayer points={heatPoints} />

                {criticalSensors.map((spot, index) => (
                    <Marker
                        key={spot.id}
                        position={[spot.lat, spot.lng]}
                        icon={criticalIcon}
                        ref={(el) => {
                            if (el) markerRefs.current[index] = el;
                        }}
                    >
                        <Popup>
                            <div className="p-1 min-w-[150px]">
                                <h3 className="font-bold text-sm text-red-600 mb-1">CRITICAL HOTSPOT</h3>
                                <h4 className="font-semibold text-sm">{spot.name}</h4>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-xs text-slate-500">AQI:</span>
                                    <span className="font-bold text-red-600 text-xl">{spot.aqi}</span>
                                </div>
                                <p className="text-xs text-slate-500 mt-1">Status: {spot.status}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>

            {/* Legend Overlay */}
            <div className="absolute bottom-4 left-4 z-[400] bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md border border-slate-200">
                <h4 className="text-xs font-bold mb-2 text-slate-700">AQI Intensity</h4>
                <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-[10px] font-medium text-slate-600">Good (0-100)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <span className="text-[10px] font-medium text-slate-600">Moderate (100-200)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                        <span className="text-[10px] font-medium text-slate-600">Poor (200-300)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-600"></div>
                        <span className="text-[10px] font-medium text-slate-600">Severe (300+)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function HeatmapLayer({ points }: { points: [number, number, number][] }) {
    const map = useMap();

    useEffect(() => {
        if (!map) return;

        // @ts-ignore - leaflet.heat adds heatLayer to L
        const heat = L.heatLayer(points, {
            radius: 30,
            blur: 20,
            maxZoom: 12,
            max: 1.0,
            gradient: {
                0.0: '#22c55e', // Green (Good)
                0.4: '#eab308', // Yellow (Moderate)
                0.6: '#f97316', // Orange (Poor)
                0.8: '#ef4444', // Red (Severe)
                1.0: '#7f1d1d'  // Dark Red (Hazardous)
            }
        }).addTo(map);

        return () => {
            map.removeLayer(heat);
        };
    }, [map, points]);

    return null;
}
