import React from 'react';
import { PageTemplate } from './PageTemplate';
import { AboutSection } from '@/components/organisms/AboutSection';
import { EducationSection } from '@/components/organisms/EducationSection';

interface AboutData {
  fullBio: string;
  skills: string[];
  gallery?: string[];
}

interface EducationItem {
  institution: string;
  degree: string;
  year?: string;
  period?: string;
}

interface AboutTemplateProps {
  about: AboutData;
  education: EducationItem[];
}

export const AboutTemplate: React.FC<AboutTemplateProps> = ({ 
  about, 
  education 
}) => {
  return (
    <PageTemplate>
      <AboutSection about={about} />
      <EducationSection education={education} />
    </PageTemplate>
  );
};