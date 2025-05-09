'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!email || !password) {
      setError('All fields are required');
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Uncomment and implement actual API call
      /* 
      const response = await fetch('http://127.0.0.1:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Redirect to dashboard after successful login
      router.push('/dashboard');
      */
      
      // Temporary simulation of successful login
      console.log('Login payload:', { email, password });
      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);
      
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = email && password;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#14181D] text-white p-4">
      {/* Logo */}
      <div className="mb-6">
        <Image 
          src="/adams-logo.svg"
          alt="ADAMS Logo"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      <h1 className="text-3xl font-bold text-center mb-8">Log in</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            {error}
          </div>
        )}
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            required
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={!isFormValid || isLoading}
          className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            isFormValid ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
        >
          {isLoading ? 'Logging in...' : 'Log in'}
        </button>
      </form>
      
      <div className="mt-6 text-center w-full max-w-sm">
        <div className="mb-4">
          <Link href="/signup" className="text-blue-400 hover:text-blue-300 text-sm">
            Create account
          </Link>
        </div>
        
        <div className="relative mb-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-2 bg-[#14181D] text-gray-400 text-sm">Or login with</span>
          </div>
        </div>
        
        <button
          className="flex items-center justify-center w-full py-2 px-4 bg-white text-gray-800 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 transition"
        >
          <Image 
            src="/google-logo.svg" 
            alt="Google Logo" 
            width={20} 
            height={20} 
            className="mr-2"
          />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;