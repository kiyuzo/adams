import Link from 'next/link';
import React from 'react';

export default function DailyReportPage() {
  const getEnglishDateIndonesia = () => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'Asia/Jakarta'
    };
    return today.toLocaleDateString('en-US', options);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      {/* Header with back button */}
      <div className="flex items-center mb-4">
        <Link href="/" className="mr-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-gray-600 hover:text-gray-800" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
        </Link>
        <h1 className="text-2xl font-bold">Daily Report</h1>
      </div>

      <h2 className="text-lg text-gray-600 mb-6">{getEnglishDateIndonesia()}</h2>

    <div className="gap-4 mb-6 bg-[#D9D9D9] p-4 rounded-lg">
        {/* Points and Mission */}
        <div className='flex justify-between items-center mb-4'>
          <div>
              <div className="flex flex-col">
                  <span className="text-4xl font-bold">
                      112<span className="text-xl">pts</span>
                  </span>
                  <span className="font-bold text-md">
                      collected
                  </span>
              </div>
              <div className="flex">
                  <span className="text-4xl font-bold">
                      3
                  </span>
                  <span>
                      <span className='flex flex-col text-md font-bold ml-2'>
                          missions
                      </span>
                      <span className='flex flex-col text-md font-bold ml-2'>
                          completed
                      </span>
                  </span>
              </div>
            </div>

            <div>
                <div className="space-y-2 mt-4">
                    <div className="flex items-center">
                        <span className="text-green-500 font-bold mr-2">+100 pts</span>
                        <span>For staying in green zone for 50% of your work-time</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-green-500 font-bold mr-2">+100 pts</span>
                        <span>For staying in green zone for 50% of your work-time</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-green-500 font-bold mr-2">+100 pts</span>
                        <span>For staying in green zone for 50% of your work-time</span>
                    </div>
                </div>
            </div>
        </div>
    <div>

        </div>
      </div>

      {/* Working Hours */}
      <div className="flex bg-[#D9D9D9] p-4 rounded-lg mb-6">
        <div>
          <p className="text-3xl font-bold mb-1">12 hr</p>
          <p className="text-gray-500 mb-3">Working hours</p>
        </div>
        <div className="space-y-2">
          <p>5hr on the green zone</p>
          <p>2hr on the yellow zone</p>
          <p>1hr on the red zone</p>
        </div>
      </div>

      <div className="bg-[#F24822] p-4 rounded-lg shadow space-y-3">
        <div className="flex items-center">
          <span>Unhealthy for Sensitive Groups</span>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow mt-4">
        <p className="text-gray-600">
          Great job staying in green zones 80% of your time today, especially around Sleman. 
          Try avoiding the Ring Road area tomorrow – it's been red all week.
        </p>
      </div>
    </div>
  );
}