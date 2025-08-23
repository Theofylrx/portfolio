'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { NavLink } from '@/components/atoms/NavLink';

const navigationItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/tech-stack', label: 'Stack' },
];

export const Navigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="bg-card border border-border rounded-full px-3 md:px-6 py-2 transition-all duration-300">
      <div className="flex space-x-2 md:space-x-4">
        {navigationItems.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};