'use client';

import { useNavigation } from '@/context/NavigationContext';

export default function AirQualityPage() {
  const { activeTab } = useNavigation();
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Air Quality</h1>
      {/* Your air quality content */}
    </div>
  );
}