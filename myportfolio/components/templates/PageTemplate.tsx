import React from 'react';

interface PageTemplateProps {
  children: React.ReactNode;
  className?: string;
}

export const PageTemplate: React.FC<PageTemplateProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`min-h-screen ${className}`}>
      {children}
    </div>
  );
};