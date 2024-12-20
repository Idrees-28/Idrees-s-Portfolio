import React from 'react';
import Button from '../ui/Button';

export function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
      <Button
        href="#projects"
        className="px-8 py-3 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        View Projects
      </Button>
      <Button
        href="#contact"
        className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400/10 transition-colors"
      >
        Contact Me
      </Button>
    </div>
  );
}