'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useNavigation } from '@/context/NavigationContext';

export default function PointsPage() {
  const { activeTab } = useNavigation();
  const [activeView, setActiveView] = useState('missions');
  const router = useRouter();

  const missions = {
    completed: [
      { title: "Be in green zone for 50% of your work-time", points: 100, progress: 100 },
      { title: "Pass through 15 green zones", points: 150, progress: 100 },
      { title: "Pass through 15 green zones", points: 150, progress: 100 },
    ],
    uncompleted: [
      { title: "Be in green zone for 50% of your work-time", points: 100, progress: 50 },
      { title: "Pass through 15 green zones", points: 150, progress: 0 },
    ]
  };

  const rewards = [
    { title: "Discount Coupon", points: 200, description: "10% off your next purchase", image: "/pp-dummy.png" },
    { title: "Premium Feature", points: 500, description: "Unlock advanced analytics", image: "/pp-dummy.png" },
    { title: "Exclusive Badge", points: 300, description: "Show off your achievements", image: "/pp-dummy.png" },
    { title: "Gift Card", points: 400, description: "Redeem a $10 gift card", image: "/pp-dummy.png" },
  ];

  const getProgressClass = (progress: number) => {
    if (progress === 0) return 'bg-gray-300';
    if (progress === 100) return 'bg-green-500';
    return 'bg-yellow-400';
  };

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Points</h1>
      
      {/* Tab Navigation with gray active tab */}
      <div className="flex">
        <button
          className={`flex-1 py-3 px-4 font-medium text-center rounded-t-lg ${
            activeView === 'missions' 
              ? 'bg-[#D9D9D9] text-black border-t border-x border-gray-300' 
              : 'text-gray-500 bg-white border-b border-gray-300'
          }`}
          onClick={() => setActiveView('missions')}
        >
          Missions
        </button>
        <button
          className={`flex-1 py-3 px-4 font-medium text-center rounded-t-lg ${
            activeView === 'rewards' 
              ? 'bg-[#D9D9D9] text-black border-t border-x border-gray-300' 
              : 'text-gray-500 bg-white border-b border-gray-300'
          }`}
          onClick={() => setActiveView('rewards')}
        >
          Rewards
        </button>
      </div>
      
      {/* Content area - no gap below tabs */}
      <div className="bg-[#D9D9D9] rounded-b-lg -mx-4 px-4 pb-4">
        {activeView === 'missions' ? (
          <>
            <section>
              <h2 className="text-2xl font-semibold mb-4 pt-4">Completed Missions</h2>
              <ul className="space-y-4 list-none">
                {missions.completed.map((mission, index) => (
                  <li key={`completed-${index}`} className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                    <div
                      className={`w-4 h-4 rounded-full mr-4 ${getProgressClass(mission.progress)}`}
                      title={`Progress: ${mission.progress}%`}
                    ></div>
                    <div className="flex justify-between items-center w-full">
                      <p className="text-lg">{mission.title}</p>
                      <span className="font-medium">{mission.points} pts</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Uncompleted Missions</h2>
              <ul className="space-y-4 list-none">
                {missions.uncompleted.map((mission, index) => (
                  <li key={`uncompleted-${index}`} className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                    <div
                      className={`w-4 h-4 rounded-full mr-4 ${getProgressClass(mission.progress)}`}
                      title={`Progress: ${mission.progress}%`}
                    ></div>
                    <div className="flex justify-between items-center w-full">
                      <p className="text-lg text-gray-600">{mission.title}</p>
                      <span className="font-medium">{mission.points} pts</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </>
        ) : (
          <section className="pt-4">
            <h2 className="text-2xl font-semibold mb-6">Available Rewards</h2>
            <div className="grid grid-cols-2 gap-4">
              {rewards.map((reward, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white flex flex-col items-center">
                  <img src={reward.image} alt={reward.title} className="w-24 h-24 object-contain mb-4" />
                  <h3 className="font-medium text-lg text-center">{reward.title}</h3>
                  <p className="text-sm text-gray-500 mt-2">Cost: <span className="font-bold">{reward.points} pts</span></p>
                  <button
                    className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    onClick={() => router.push('/points/redeem')}
                  >
                    Redeem
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}