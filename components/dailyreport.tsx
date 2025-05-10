'use client';

import { useRouter } from 'next/navigation';

export default function DailyReport() {
  const router = useRouter();
  const dailyMessage = "Great job staying in green zones 80% of your time today, especially around Sleman. Try avoiding the Ring Road area tomorrow — it's been red all week";

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
            <div className="mt-4 mx-2 p-3 bg-black rounded-lg w-[320px] h-[160px] flex items-center justify-center mx-auto">
              {/* You can place a map or image here in the future */}
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