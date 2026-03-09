"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";



// Using a custom SVG icon for the dark neon aesthetic
const customIcon = L.divIcon({
  className: "custom-div-icon",
  html: `<div style="background-color: #72f136; width: 24px; height: 24px; border-radius: 50%; border: 3px solid #000; box-shadow: 0 0 15px #72f136;"></div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

export default function ContactMap() {
  return (
    <div style={{ width: "100%", height: "100%", borderRadius: "1rem", overflow: "hidden" }}>
      <MapContainer
        center={[51.513, -0.124]} // Covent Garden coordinates
        zoom={14}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%", zIndex: 1 }}
      >
        {/* Dark Matter theme from CartoDB */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={[51.513, -0.124]} icon={customIcon}>
          <Popup className="dark-popup">
            <div style={{ textAlign: "center", color: "#000" }}>
              <strong style={{ display: "block", marginBottom: "4px" }}>NeonExam Office</strong>
              33 Rose Street,<br /> Covent Garden, UK
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      {/* Injecting specific popup CSS right here so it only applies to the map */}
      <style jsx global>{`
        .leaflet-container {
          background-color: #000 !important;
          font-family: inherit;
        }
        .dark-popup .leaflet-popup-content-wrapper {
          background-color: #72f136;
          color: #000;
          border-radius: 0.5rem;
          font-weight: 600;
        }
        .dark-popup .leaflet-popup-tip {
          background-color: #72f136;
        }
        .dark-popup .leaflet-popup-close-button {
          color: #000 !important;
        }
      `}</style>
    </div>
  );
}
