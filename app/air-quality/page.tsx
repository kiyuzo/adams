'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AirQualityPage() {
  const router = useRouter();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // Update date and time every second
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      // Format date: Sunday, 20th April 2025
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
          onClick={() => router.push('/')}
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

      {/* Heatmap Placeholder */}
      <div className="bg-[#232A34] rounded-lg flex-1 w-full flex items-center justify-center">
        <span className="text-gray-400">[Heatmap Placeholder]</span>
      </div>
    </div>
  );
}