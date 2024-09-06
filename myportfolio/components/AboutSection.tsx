'use client';

import React from 'react';
import Image from 'next/image';

interface AboutProps {
  about: {
    fullBio: string;
    skills: string[];
    gallery: string[];
  };
}
const AboutSection: React.FC<AboutProps> = ({ about }) => {
  return (
    <section className="py-12">
      <div className="space-y-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-300">{about.fullBio}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {about.skills.map((skill, index) => (
              <li key={index} className="bg-gray-700 rounded-full px-3 py-1 text-sm">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;