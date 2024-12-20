import React from 'react';
import { CTAButtons } from './CTAButtons';

export function HeroContent() {
  return (
    <div className="flex-1 text-center md:text-left">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Hi, I'm <span className="text-yellow-400">Idrees M I</span>
        <span className="block mt-2">Full Stack Developer</span>
      </h1>
      <p className="text-xl text-gray-300 mb-8">
        Passionate MERN Stack Developer crafting innovative web solutions and turning ideas into reality
      </p>
      <CTAButtons />
    </div>
  );
}