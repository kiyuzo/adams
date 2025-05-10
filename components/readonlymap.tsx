'use client';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function ReadOnlyMap({ center }: { center: [number, number] }) {
  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ width: 280, height: 120, borderRadius: 12, zIndex: 1 }}
      dragging={false}
      zoomControl={false}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      attributionControl={false}
      keyboard={false}
      touchZoom={false}
      boxZoom={false}
      style={{ width: '100%', height: '100%', borderRadius: '12px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center} />
    </MapContainer>
  );
}