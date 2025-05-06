'use client';

import { useState } from 'react';
import Link from 'next/link';

const merchants = [
  { id: 1, name: 'Indomaret', logo: '/merchants/indomaret.png' },
  { id: 2, name: 'Kimia Farma', logo: '/merchants/kimia-farma.png' },
  { id: 3, name: 'Alfamart', logo: '/merchants/alfamart.png' },
  { id: 4, name: 'Apotek K 24', logo: '/merchants/apotek-k24.png' },
  { id: 5, name: 'Apotek Ya Indonesia', logo: '/merchants/apotek-ya.png' },
  { id: 6, name: 'Indomaret', logo: '/merchants/indomaret.png' }, // Duplicate in your example
];

export default function PointsRedeemPage() {
  const [selectedMerchant, setSelectedMerchant] = useState<number | null>(null);

  const handleMerchantClick = (id: number) => {
    setSelectedMerchant((prev) => (prev === id ? null : id));
  };

  const isExchangeDisabled = selectedMerchant === null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Link href="/points" className="text-blue-600 hover:text-blue-800 text-lg font-bold mr-4">
          &lt;
        </Link>
        <h1 className="text-2xl font-bold text-center flex-1">Choose Merchant</h1>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-8">
        {merchants.map((merchant) => (
          <div
            key={merchant.id}
            className={`border rounded-lg p-4 flex flex-col items-center justify-center hover:shadow-md transition-shadow cursor-pointer ${
              selectedMerchant === merchant.id ? 'bg-gray-300' : 'bg-white'
            }`}
            onClick={() => handleMerchantClick(merchant.id)}
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full mb-2 flex items-center justify-center">
              <img src={merchant.logo} alt={merchant.name} className="w-full h-full object-contain" />
            </div>
            <p className="text-sm font-medium">{merchant.name}</p>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center">
        <button
          className={`font-medium py-2 px-6 rounded-lg transition-colors text-white ${
            isExchangeDisabled
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
          disabled={isExchangeDisabled}
          onClick={() => alert(`Exchanged points for ${merchants.find((m) => m.id === selectedMerchant)?.name}`)}
        >
          Exchange Points
        </button>
      </div>
    </div>
  );
}