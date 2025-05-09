'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SynchronizePage = () => {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [driverId, setDriverId] = useState('');
  const router = useRouter();

  const companies = [
    { id: 'gojek', name: 'Gojek' },
    { id: 'grab', name: 'Grab' },
    { id: 'maxim', name: 'Maxim' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful synchronization
    console.log('Selected company:', selectedCompany);
    console.log('Driver ID:', driverId);
    router.push('/dashboard'); // Redirect after selection
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#14181D] text-white p-4">
      <h1 className="text-3xl font-bold text-center mb-2">Synchronize your account!</h1>
      
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6">
        {/* Grouped Companies */}
        <div className="p-4 bg-[#1F252D] rounded-md space-y-3">
          {companies.map((company) => (
            <div 
              key={company.id}
              onClick={() => setSelectedCompany(company.id)}
              className={`p-4 bg-white text-gray-800 border rounded-md cursor-pointer transition-colors ${
                selectedCompany === company.id 
                  ? 'border-blue-500' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <div className="flex items-center">
                <div className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${
                  selectedCompany === company.id 
                    ? 'border-blue-500 bg-blue-500' 
                    : 'border-gray-400'
                }`}>
                  {selectedCompany === company.id && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}
                </div>
                <span className="font-medium">{company.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Driver ID Input */}
        <div>
          <label htmlFor="driverId" className="block text-sm font-medium mb-1">
            Driver ID
          </label>
          <input
            id="driverId"
            type="text"
            value={driverId}
            onChange={(e) => setDriverId(e.target.value)}
            placeholder="Enter your driver ID"
            className="w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            required
          />
        </div>
        
        {/* Confirm Button */}
        <button
          type="submit"
          disabled={!selectedCompany || !driverId}
          className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            selectedCompany && driverId 
              ? 'bg-blue-600 hover:bg-blue-700' 
              : 'bg-gray-400 cursor-not-allowed'
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default SynchronizePage;