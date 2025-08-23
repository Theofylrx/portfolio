import React from 'react';
import { PageTemplate } from './PageTemplate';
import { HeroSection } from '@/components/organisms/HeroSection';
import { WorkHistorySection } from '@/components/organisms/WorkHistorySection';

interface Profile {
  name: string;
  title: string;
  bio: string;
  image: string;
  socialLinks: Array<{ platform: string; url: string }>;
}

interface WorkHistoryItem {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  achievements: string[];
}

interface HomeTemplateProps {
  profile: Profile;
  workHistory: WorkHistoryItem[];
}

export const HomeTemplate: React.FC<HomeTemplateProps> = ({ 
  profile, 
  workHistory 
}) => {
  return (
    <PageTemplate>
      <HeroSection profile={profile} />
      <WorkHistorySection workHistory={workHistory} />
    </PageTemplate>
  );
};