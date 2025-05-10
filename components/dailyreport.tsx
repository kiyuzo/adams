'use client';

import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Dynamically import Leaflet map to avoid SSR issues
const Map = dynamic(() => import('./readonlymap'), { ssr: false });

export default function DailyReport() {
  const router = useRouter();
  const dailyMessage = "Great job staying in green zones 80% of your time today, especially around Sleman. Try avoiding the Ring Road area tomorrow — it's been red all week";

  // Example: get user's main point (replace with real user data)
  const [mainPoint, setMainPoint] = useState<[number, number]>([-7.7828, 110.3671]); // Yogyakarta

  useEffect(() => {
    // You can fetch and set the user's main point here if needed
    // setMainPoint([lat, lng]);
  }, []);

  const handleClick = () => {
    router.push('/dailyreport');
  };

  return (
    <div 
      className="space-y-4 cursor-pointer mx-2" 
      onClick={handleClick}
    >
      <h2 className="text-lg text-white font-semibold">Daily Report</h2>
      
      <div className="bg-[#1F252D] pb-2 rounded-2xl">
        <div className="grid grid-cols-3 gap-2">
            <div className="p-3 rounded-lg  text-center mt-4">
              <div className="text-xl font-bold text-white bg-[#F24822] p-2 w-16 ml-4 rounded-lg">127</div>
              <div className="text-md text-gray-500 mt-3">Air quality index</div>
            </div>
            <div className="p-3 rounded-lg text-center mt-4">
              <div className="font-bold text-[#F1F1F0]"> <span className="text-4xl">12</span><span>hr</span> </div>
              <div className="text-md text-gray-500 mt-3">Working hours</div>
            </div>
            <div className="p-3 rounded-lg text-center mt-4">
              <div className="font-bold text-[#F1F1F0]"> <span className="text-4xl">3</span> </div>
              <div className="text-md text-gray-500 mt-3">Missions Completed</div>
            </div>
          </div>
          
          <div className='mt-4'>
            <p className='text-[#F1F1F0] ml-8'>Path you took today</p>
            <div className="mt-4 mx-2 p-3 rounded-lg w-[320px] h-[160px] flex items-center justify-center mx-auto relative">
              {/* Read-only Leaflet map */}
              <div className="absolute inset-0 z-10 pointer-events-none rounded-lg" />
              <Map center={mainPoint} />
            </div>
          </div>
        

        <div className="mx-2 my-8 p-6 bg-[#495565] rounded-lg w-[320px] flex items-center justify-center mx-auto">
          <p className="text-sm mt-1 text-[#F1F1F0]">
            {dailyMessage}
          </p>
        </div>
      </div>
    </div>
  );
}