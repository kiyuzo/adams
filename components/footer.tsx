'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useNavigation } from '../context/NavigationContext';

const Footer = () => {
  const pathname = usePathname();
  const { setActiveTab } = useNavigation();

  const tabs = [
    { id: 'home', label: 'Report', href: '/' },
    { id: 'air-quality', label: 'Air Quality', href: '/air-quality' },
    { id: 'points', label: 'Points', href: '/points' },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-sm">
      <div className="flex justify-around">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={tab.href}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex flex-col items-center justify-center p-3 w-full transition-colors ${
              pathname === tab.href ? 'text-blue-500' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <div className="text-xl">
              {tab.id === 'home' && <HomeIcon active={pathname === tab.href} />}
              {tab.id === 'air-quality' && <AirQualityIcon active={pathname === tab.href} />}
              {tab.id === 'points' && <PointsIcon active={pathname === tab.href} />}
            </div>
            <span className="text-xs mt-1">{tab.label}</span>
          </Link>
        ))}
      </div>
    </footer>
  );
};

// Custom icon components with active states
const HomeIcon = ({ active }: { active: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const AirQualityIcon = ({ active }: { active: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2m0 4v2m0 4v2m0 4v2m8-12h-2m-4 0h-2m-4 0H6m16 4h-2m-4 0h-2m-4 0H6" />
  </svg>
);

const PointsIcon = ({ active }: { active: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

export default Footer;