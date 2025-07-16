'use client';

import React from 'react';
import CheckoutButton from '../(components)/CheckoutButton';
import Header from '../(components)/Header';
import { Sparkles } from 'lucide-react';

export default function PricingPage() {
  return (
    <div
      style={{
        background: 'linear-gradient(to bottom right, #0f172a, #1e3a8a, #000000)',
      }}
      className="min-h-screen text-white"
    >
      <Header />
      <div className="px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
          <Sparkles className="text-cyan-400" size={32} />
          Choose Your Plan
        </h1>

        <div className="w-full max-w-md mx-auto p-6 bg-white/5 border border-cyan-400/40 shadow-2xl rounded-2xl backdrop-blur-md hover:border-cyan-400/70 hover:shadow-cyan-500/10 transition-all duration-300 text-center">
          <h2 className="text-2xl font-semibold text-cyan-300">Basic Plan</h2>
          <p className="text-gray-300 mt-2">Access up to 10,000 characters</p>
          <p className="text-3xl font-bold text-cyan-200 mt-4">₹99</p>

          <div className="mt-6">
            <CheckoutButton price={99} />
          </div>
        </div>
      </div>
    </div>
  );
}
