'use client';

import React from 'react';
import Image from 'next/image'

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
}

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <section className="py-4">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg">
            <div className="relative h-48 mb-4">
              <Image
                src={`/images/${project.image}`}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="mb-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;