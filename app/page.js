// app/page.jsx
'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import HomePage from './home/page';

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure loading screen shows for at least 5 seconds
    const timer = setTimeout(() => {
      if (!isLoading) return;
      setIsLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      {!isLoading && <HomePage />}
    </>
  );
}