import React from 'react';
import { navigationLinks } from '../../data/navigationLinks';

export function Navigation() {
  return (
    <nav className="hidden md:flex space-x-8">
      {navigationLinks.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className="text-gray-300 hover:text-yellow-400 transition-colors"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}