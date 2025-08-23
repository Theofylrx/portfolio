import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link href="/" className={`font-bold text-xl ${className || ''}`}>
      Likho Bomvana
    </Link>
  );
};