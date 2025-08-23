import { loadContent } from '@/utils/loadContent';
import { ProjectsTemplate } from '@/components/templates/ProjectsTemplate';

export default function Projects() {
  const content = loadContent();

  return (
    <ProjectsTemplate projects={content.projects} />
  );
}