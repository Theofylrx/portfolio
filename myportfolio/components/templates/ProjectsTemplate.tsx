import React from 'react';
import { PageTemplate } from './PageTemplate';
import { ProjectsSection } from '@/components/organisms/ProjectsSection';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
}

interface ProjectsTemplateProps {
  projects: Project[];
}

export const ProjectsTemplate: React.FC<ProjectsTemplateProps> = ({ projects }) => {
  return (
    <PageTemplate>
      <ProjectsSection projects={projects} />
    </PageTemplate>
  );
};