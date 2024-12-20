import React from 'react';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';
import { SocialLinks } from './SocialLinks';
import { Logo } from './Logo';
import { useMenu } from '../../hooks/useMenu';

export default function Header() {
  const { isMenuOpen, toggleMenu } = useMenu();

  return (
    <header className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50 shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo />
          <Navigation />
          <SocialLinks />
          <MobileMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
        </div>
      </div>
    </header>
  );
}