'use client'; 

import React from 'react';
import { useRouter } from 'next/navigation'; 
import { ArrowUp } from 'lucide-react';

export default function TopButton() {
  const router = useRouter();

  const goToHome = () => {
    router.push('/');
  };

  return (
    
    <button
      onClick={goToHome}
      className="fixed bottom-5 right-5 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition"
    >
          <ArrowUp />

    </button>
  );
}
