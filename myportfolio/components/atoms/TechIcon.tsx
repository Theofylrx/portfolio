import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

interface TechIconProps {
  name: string;
  icon: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, icon, className = '' }) => {
  return (
    <Card className={`transition-all hover:scale-105 hover:animate-float hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 duration-300 ${className}`}>
      <CardContent className="flex flex-col items-center justify-center p-4 space-y-2">
        <Image
          src={icon}
          alt={name}
          width={48}
          height={48}
          className="object-contain"
        />
        <span className="text-sm font-medium text-center">{name}</span>
      </CardContent>
    </Card>
  );
};