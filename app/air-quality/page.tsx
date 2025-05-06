'use client';

import { useState } from 'react';
import { useNavigation } from '@/context/NavigationContext';

export default function AirQualityPage() {
  const { activeTab } = useNavigation();
  const [activeView, setActiveView] = useState('current');
  
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Air Quality</h1>
    </div>
  );
}