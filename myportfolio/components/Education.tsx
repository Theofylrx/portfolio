'use client';

import React from 'react';

interface EducationItem {
  institution: string;
  degree: string;
  year?: string;
  period?: string;
}

interface EducationProps {
  education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">{edu.institution}</h3>
            <p className="text-gray-400">{edu.degree}</p>
            <p>{edu.year || edu.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;