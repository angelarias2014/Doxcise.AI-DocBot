'use client';

import React from 'react';
import Header from '../(components)/Header';
import { FileX2 } from 'lucide-react';

export default function CancellationPage() {
  return (
    <div
      style={{
        background: 'linear-gradient(to bottom right, #0f172a, #1e3a8a, #000000)',
      }}
      className="min-h-screen text-white"
    >
      <Header />
      <div className="px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-red-400 text-transparent bg-clip-text">
          <FileX2 className="text-red-400" size={32} />
          Payment Cancelled
        </h1>

        <div className="w-full max-w-xl mx-auto p-6 bg-white/5 border border-red-400/40 shadow-2xl rounded-2xl backdrop-blur-md text-center hover:border-red-500/70 hover:shadow-red-500/10 transition-all duration-300">
          <p className="text-lg text-gray-300 mb-4">
            Your payment process was canceled or did not complete.
          </p>
          <p className="text-sm text-gray-400">
            You can return to the pricing page to try again or choose a different plan.
          </p>
        </div>
      </div>
    </div>
  );
}
