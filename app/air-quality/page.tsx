'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { GoogleMap, useJsApiLoader, HeatmapLayerF } from '@react-google-maps/api';
import AuthGuard from '@/components/AuthGuard';

const mapContainerStyle = {
  width: '100%',
  height: '700px',
  borderRadius: '0.5rem',
};

export default function AirQualityPage() {
  const router = useRouter();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [heatmapData, setHeatmapData] = useState<{ lat: number; lng: number; weight: number }[]>([]);

  // Load Google Maps JS API
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyAH6Ea8-iD481XUxKu4sBrUxY7L6BOicYI',
    libraries: ['visualization'],
  });

  useEffect(() => {
    fetch('http://localhost:3001/get-heatmap', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then(res => res.ok ? res.json() : Promise.reject('Failed to fetch heatmap'))
      .then(data => setHeatmapData(data))
      .catch(() => setHeatmapData([]));
  }, []);

  useEffect(() => {
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
    <AuthGuard>
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

        {/* Google Maps Heatmap */}
        <div className="rounded-lg flex-1 w-full flex items-center justify-center overflow-hidden p-0 m-0" style={{ minHeight: 0 }}>
          <div style={mapContainerStyle}>
            {isLoaded && (
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={{ lat: -7.7828, lng: 110.3671 }}
                zoom={12}
                options={{
                  styles: [],
                  disableDefaultUI: false,
                }}
              >
                {heatmapData.length > 0 && (
                  <HeatmapLayerF
                    data={heatmapData.map(p => ({
                      location: new window.google.maps.LatLng(p.lat, p.lng),
                      weight: p.weight,
                    }))}
                    options={{
                      radius: 40,
                      opacity: 0.7,
                    }}
                  />
                )}
              </GoogleMap>
            )}
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}