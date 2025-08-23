import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Button } from '@/components/ui/button';

interface SocialIconProps {
  platform: string;
  url: string;
  className?: string;
  size?: 'sm' | 'default' | 'lg';
}

export const SocialIcon: React.FC<SocialIconProps> = ({ 
  platform, 
  url, 
  className, 
  size = 'default' 
}) => {
  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github':
        return faGithub;
      case 'linkedin':
        return faLinkedin;
      case 'twitter':
        return faTwitter;
      default:
        return faGithub;
    }
  };

  return (
    <Button variant="ghost" size={size} asChild className={`hover:scale-110 hover:animate-bounce-in transition-transform duration-300 ${className}`}>
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label={`${platform} profile`}
      >
        <FontAwesomeIcon 
          icon={getIcon(platform)} 
          className="w-5 h-5 text-primary dark:text-green-500" 
        />
      </a>
    </Button>
  );
};