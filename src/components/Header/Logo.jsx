import React from 'react';
import { Code } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Code className="w-8 h-8 text-yellow-400" />
      <span className="text-2xl font-bold text-white">Idrees M I</span>
    </div>
  );
}