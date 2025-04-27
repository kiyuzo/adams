'use client';

import { useNavigation } from '@/context/NavigationContext';

export default function PointsPage() {
  const { activeTab } = useNavigation();
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Points</h1>
      {/* Your points content */}
    </div>
  );
}