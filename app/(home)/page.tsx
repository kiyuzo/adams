'use client';

import { useNavigation } from '@/context/NavigationContext';
import DailyReport from '@/components/dailyreport';
import WeeklyReport from '@/components/weeklyreport';
import Streak from '@/components/streak';

export default function HomePage() {
  const { activeTab } = useNavigation();
  
  return (
    <div className="p-4 space-y-6 bg-[#14181D]">
      <Streak />
      <DailyReport />
      <WeeklyReport />
    </div>
  );
}