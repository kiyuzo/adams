'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Directly route to landing page, no login check
    router.replace('/landing');
  }, [router]);

  return null; // Or a loading spinner/message
}