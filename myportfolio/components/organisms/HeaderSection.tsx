import React from 'react';
import { Logo } from '@/components/atoms/Logo';
import { Navigation } from '@/components/molecules/Navigation';
import { ThemeToggle } from '@/components/theme-toggle';

export const HeaderSection: React.FC = () => {
  return (
    <header className="bg-background p-4 transition-colors duration-300">
      <div className="flex justify-center">
        <nav className="flex items-center space-x-6">
          <Navigation />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};