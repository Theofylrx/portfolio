import React from 'react';
import { SocialIcon } from '@/components/atoms/SocialIcon';

interface SocialLink {
  platform: string;
  url: string;
}

interface SocialLinksProps {
  socialLinks: SocialLink[];
  className?: string;
  iconSize?: 'sm' | 'default' | 'lg';
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ 
  socialLinks, 
  className = '',
  iconSize = 'default'
}) => {
  return (
    <div className={`flex space-x-1 ${className}`}>
      {socialLinks.map((link, index) => (
        <SocialIcon
          key={index}
          platform={link.platform}
          url={link.url}
          size={iconSize}
        />
      ))}
    </div>
  );
};