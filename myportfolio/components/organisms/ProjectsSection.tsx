import React from 'react';
import { ProjectCard } from '@/components/molecules/ProjectCard';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-left mb-6 md:mb-12 animate-slide-in-left">
          My <span className="text-primary dark:text-green-500">Projects</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};