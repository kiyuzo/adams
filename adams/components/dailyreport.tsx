'use client'; // Add this at the top

import { useRouter } from 'next/navigation';

export default function DailyReport() {
  const router = useRouter();
  const dailyMessage = "Great job staying in green zones 80% of your time today, especially around Sleman. Try avoiding the Ring Road area tomorrow — it's been red all week";

  const handleClick = () => {
    router.push('/dailyreport');
  };

  return (
    <div 
      className="space-y-4 cursor-pointer" 
      onClick={handleClick}
    >
      <h2 className="text-lg font-semibold">Daily Report</h2>
      
      <div className="bg-[#D9D9D9] pb-2 rounded-lg">
      <div className="grid grid-cols-3 gap-2">
          <div className="p-3 rounded-lg  text-center">
            <div className="text-xl font-bold text-white bg-[#F24822] p-2">127</div>
            <div className="text-xs text-gray-500 mt-1">Air quality index</div>
          </div>
          <div className="p-3 rounded-lg text-center">
            <div className="font-bold"> <span className="text-4xl">12</span><span>hr</span> </div>
            <div className="text-xs text-gray-500 mt-1">Working hours</div>
          </div>
          <div className="p-3 rounded-lg">
            <div className="flex font-bold">
              <span className="text-5xl">3</span>
              <span className="ml-1 text-xs">missions completed</span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 mx-2 p-3 bg-black rounded-lg h-[200px]">
        </div>

        <div className="mx-2 my-4 p-3 bg-[#FFFFFF] rounded-lg">
          <p className="text-sm text-gray-600 mt-1">
            {dailyMessage}
          </p>
        </div>
      </div>
    </div>
  );
}