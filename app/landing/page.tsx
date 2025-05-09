'use client';

import React from 'react';
import Image from 'next/image';

const LandingPage = () => {
  return (
    <>
      {/* Gradient Background Section */}
      <div className="min-h-screen flex flex-col items-start justify-center bg-gradient-to-b from-blue-500 to-green-500 text-white p-8">
        {/* Main Content */}
        <div className="text-left max-w-md">
          <h1 className="text-4xl font-bold mb-2">Welcome to</h1>
          <h2 className="text-6xl font-extrabold mb-6">ADAMS</h2>
          <h3 className="text-5xl font-bold mb-8">PROJECT</h3>
          
          <p className="text-xl italic mb-12">"Riding towards a better future"</p>
          
          <button className="bg-white text-blue-500 font-bold py-3 px-10 rounded-lg text-lg hover:bg-opacity-90 transition">
            Login
          </button>
        </div>

        {/* Combined Logo and Description Section */}
        <div className="mt-16 w-full max-w-md text-center">
          {/* Logo */}
          <div className="mb-6">
            <Image 
              src="/adams-logo.svg" // Update this path to your logo
              alt="ADAMS Logo"
              width={80}
              height={80}
              className="object-contain mx-auto"
            />
          </div>

          {/* Description */}
          <div>
            <h4 className="text-3xl font-bold mb-4">ADAM Let's you ...</h4>
          </div>
        </div>

        {/* Feature 1 */}
        <div className="mt-16 w-full max-w-md">
          <div className="mb-4 text-left">
            <p className="text-2xl">
              Track Air Quality Monitor the air quality around you to ensure a healthier and safer environment.
            </p>
          </div>

          {/* Product Image */}
          <div className="w-full rounded-lg flex items-center justify-center">
            <Image 
              src="/product/1.svg"
              alt="Product Image"
              width={400}
              height={300}
              className="object-contain"
            />
          </div>  
        </div>

        {/* Feature 2 */}
        <div className="mt-16 w-full max-w-md">
          <div className="mb-4 text-center">
            <p className="text-2xl">
              View heat map of your area
            </p>
          </div>

          {/* Product Image */}
          <div className="w-full rounded-lg flex items-center justify-center">
            <Image 
              src="/product/2.svg"
              alt="Product Image"
              width={400}
              height={300}
              className="object-contain"
            />
          </div>  
        </div>

        {/* Feature 3 */}
        <div className="mt-16 w-full max-w-md">
          <div className="mb-4 text-right">
            <p className="text-2xl">
              Get rewards for completing missions
            </p>
          </div>

          {/* Product Image */}
          <div className="w-full rounded-lg flex items-center justify-center">
            <Image 
              src="/product/3.svg"
              alt="Product Image"
              width={400}
              height={300}
              className="object-contain"
            />
          </div>  
        </div>
      </div>

      {/* Long Page Section */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#1F252D] text-white p-8">
        <div className="text-center max-w-2xl">
          <h2 className="text-4xl font-bold mb-6">Ride towards a better future</h2>
          <button className="bg-blue-500 text-white font-bold py-3 px-10 rounded-lg text-lg hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;