'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Dynamically import the HeatmapLayer to avoid SSR issues
const HeatmapLayer = dynamic(
  () => import('react-leaflet-heatmap-layer-v3').then(mod => mod.HeatmapLayer),
  { ssr: false }
);
const MapContainer = dynamic(
  () => import('react-leaflet').then(mod => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then(mod => mod.TileLayer),
  { ssr: false }
);

const heatmapData = [
  { lat: -7.7828, lng: 110.3671, weight: 3 },
  { lat: -7.8012, lng: 110.3647, weight: 2 },
  { lat: -7.7833, lng: 110.4311, weight: 4 },
  { lat: -7.7700, lng: 110.3770, weight: 1 },
];

export default function AirQualityPage() {
  const router = useRouter();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensures map renders only on client
    const updateDateTime = () => {
      const now = new Date();
      const day = now.toLocaleDateString('en-US', { weekday: 'long', timeZone: 'Asia/Jakarta' });
      const dayNum = now.getDate();
      const daySuffix =
        dayNum % 10 === 1 && dayNum !== 11
          ? 'st'
          : dayNum % 10 === 2 && dayNum !== 12
          ? 'nd'
          : dayNum % 10 === 3 && dayNum !== 13
          ? 'rd'
          : 'th';
      const month = now.toLocaleDateString('en-US', { month: 'long', timeZone: 'Asia/Jakarta' });
      const year = now.getFullYear();
      setDate(`${day}, ${dayNum}${daySuffix} ${month} ${year}`);
      setTime(
        now
          .toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: 'Asia/Jakarta',
          })
      );
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 bg-[#14181D] min-h-screen text-white flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <div
          className="flex items-center cursor-pointer w-fit"
          onClick={() => router.push('/dashboard')}
        >
          <span className="text-2xl font-bold mr-2">&lt;</span>
          <h1 className="text-2xl font-bold">Air Quality Dashboard</h1>
        </div>
        <div className="flex justify-between items-start mt-4">
          <span className="font-bold text-3xl mr-4 flex items-center" style={{ minHeight: '64px' }}>
            Sleman
          </span>
          <div className="flex flex-col items-start flex-1 mt-3 text-[#8491A2]">
            <span className="text-sm">{date}</span>
            <span className="text-sm">{time}</span>
          </div>
        </div>
      </div>

      {/* Leaflet Heatmap */}
      <div className="rounded-lg flex-1 w-full flex items-center justify-center overflow-hidden p-0 m-0" style={{ minHeight: 0 }}>
        <div style={{ width: '100%', height: '100%', minHeight: '700px', flex: 1, borderRadius: '0.5rem' }}>
          {mounted && (
            <MapContainer
              center={[-7.7828, 110.3671]}
              zoom={12}
              style={{ height: '100%', width: '100%', minHeight: '400px', borderRadius: '0.5rem' }}
              scrollWheelZoom={true}
              className="w-full h-full"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <HeatmapLayer
                fitBoundsOnLoad
                fitBoundsOnUpdate
                points={heatmapData}
                longitudeExtractor={m => m.lng}
                latitudeExtractor={m => m.lat}
                intensityExtractor={m => m.weight}
                radius={40}
                blur={30}
                max={5}
              />
            </MapContainer>
          )}
        </div>
      </div>
    </div>
  );
}