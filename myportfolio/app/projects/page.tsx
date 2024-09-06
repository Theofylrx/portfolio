import { loadContent } from '@/utils/loadContent';
import ProjectList from '@/components/ProjectList';

export default function Projects() {
  const content = loadContent();

  return (
    <div className="container mx-auto px-4 py-8">
      <ProjectList projects={content.projects} />
    </div>
  );
}