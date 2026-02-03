"use client";
import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

function ChangeView({ center }) {
  const map = useMap();

  useEffect(() => {
    if (center) {
      map.setView(center, 13);
    }
  }, [center, map]);

  return null;
}

const Map = ({ getSource, getDestination }) => {
  const mountedRef = useRef(false);

  // ⛔ Block second mount (StrictMode fix)
  if (mountedRef.current) return null;
  mountedRef.current = true;

  return (
    <MapContainer
      center={getSource || [28.6139, 77.209]}
      zoom={10}
      scrollWheelZoom={false}
      style={{ height: "400px", width: "100%" }}
      className="rounded-lg"
    >
      <TileLayer
        attribution="© OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <ChangeView center={getSource} />

      {getSource && <Marker position={getSource} />}
      {getDestination && <Marker position={getDestination} />}
    </MapContainer>
  );
};

export default Map;
