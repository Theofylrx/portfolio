import React from 'react';
import { TechIcon } from '@/components/atoms/TechIcon';

interface TechItem {
  name: string;
  category: string;
  icon: string;
}

interface TechStackSectionProps {
  techStack: TechItem[];
}

export const TechStackSection: React.FC<TechStackSectionProps> = ({ techStack }) => {
  const categories = Array.from(new Set(techStack.map(item => item.category))).sort();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-left mb-6 md:mb-12 animate-slide-in-left">
          My <span className="text-primary dark:text-green-500">Tech Stack</span>
        </h1>
        
        <div className="space-y-12">
          {categories.map(category => (
            <div key={category} className="animate-fade-in">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-left animate-slide-in-left">{category}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 animate-scale-in">
                {techStack
                  .filter(item => item.category === category)
                  .map((item, index) => (
                    <TechIcon
                      key={index}
                      name={item.name}
                      icon={item.icon}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};