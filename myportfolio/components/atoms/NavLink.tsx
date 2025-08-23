import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ 
  href, 
  children, 
  className, 
  isActive = false 
}) => {
  return (
    <Link 
      href={href}
      className={cn(
        'px-2 md:px-3 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 relative overflow-hidden',
        'text-muted-foreground hover:text-foreground hover:bg-muted',
        isActive && 'bg-primary dark:bg-green-500 text-primary-foreground dark:text-black shadow-lg shadow-primary/25 dark:shadow-green-500/25',
        className
      )}
    >
      {children}
    </Link>
  );
};