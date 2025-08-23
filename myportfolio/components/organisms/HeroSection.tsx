import React from 'react';
import { ProfileCard } from '@/components/molecules/ProfileCard';
import { SocialLinks } from '@/components/molecules/SocialLinks';

interface Profile {
  name: string;
  title: string;
  bio: string;
  image: string;
  socialLinks: Array<{ platform: string; url: string }>;
}

interface HeroSectionProps {
  profile: Profile;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile }) => {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6 animate-fade-in-up">
          <ProfileCard
            name={profile.name}
            title={profile.title}
            bio={profile.bio}
            image={profile.image}
            className="max-w-3xl"
          />
          <SocialLinks 
            socialLinks={profile.socialLinks} 
            iconSize="lg"
            className="justify-center"
          />
        </div>
      </div>
    </section>
  );
};