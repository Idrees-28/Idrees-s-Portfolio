import React from 'react';
import { HeroContent } from './HeroContent';
import { HeroImage } from './HeroImage';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
}