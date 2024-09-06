'use client';

import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

interface ProfileSectionProps {
  profile: {
    name: string;
    title: string;
    bio: string;
    image: string;
    socialLinks: Array<{ platform: string; url: string }>;
  };
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ profile }) => {
  const getIcon = (platform: string) => {
    switch (platform) {
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
    <section className="text-center py-20">
      <Image src={`/images/${profile.image}`} alt={profile.name} width={192} height={192} className="rounded-full mx-auto mb-4" />
      <h1 className="text-4xl font-bold mb-2">{profile.name}</h1>
      <h2 className="text-2xl mb-4">{profile.title}</h2>
      <p className="max-w-2xl mx-auto mb-6">{profile.bio}</p>
      <div className="flex justify-center space-x-4">
        {profile.socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`${profile.name}'s ${link.platform}`}>
            <FontAwesomeIcon icon={getIcon(link.platform)} size="2x" className="text-white" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProfileSection;