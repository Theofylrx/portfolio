import { loadContent } from '@/utils/loadContent';
import TechStackList from '@/components/TechStackList';

export default function TechStack() {
  const content = loadContent();

  return (
    <div className="container mx-auto px-4 py-8">
      <TechStackList techStack={content.techStack} />
    </div>
  );
}