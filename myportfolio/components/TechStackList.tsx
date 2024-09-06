'use client';

import React from 'react';
import Image from 'next/image';

interface TechItem {
  name: string;
  category: string;
  icon: string;
}

interface TechStackListProps {
  techStack: TechItem[];
}

const TechStackList: React.FC<TechStackListProps> = ({ techStack }) => {
  const categories = Array.from(new Set(techStack.map(item => item.category))).sort();

  return (
    <section className="py-4">
    <h1 className="text-4xl font-bold mb-8">My Tech Stack</h1>
      {categories.map(category => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{category}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {techStack
              .filter(item => item.category === category)
              .map((item, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="mb-2"
                  />
                  <span>{item.name}</span>
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default TechStackList;