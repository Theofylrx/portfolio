import { loadContent } from '@/utils/loadContent';
import { TechStackTemplate } from '@/components/templates/TechStackTemplate';

export default function TechStack() {
  const content = loadContent();

  return (
    <TechStackTemplate techStack={content.techStack} />
  );
}