import React from 'react';
import { PageTemplate } from './PageTemplate';
import { TechStackSection } from '@/components/organisms/TechStackSection';

interface TechItem {
  name: string;
  category: string;
  icon: string;
}

interface TechStackTemplateProps {
  techStack: TechItem[];
}

export const TechStackTemplate: React.FC<TechStackTemplateProps> = ({ techStack }) => {
  return (
    <PageTemplate>
      <TechStackSection techStack={techStack} />
    </PageTemplate>
  );
};