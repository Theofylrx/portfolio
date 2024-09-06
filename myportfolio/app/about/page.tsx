import { loadContent } from '@/utils/loadContent';
import AboutSection from '@/components/AboutSection';
import Education from '@/components/Education';

export default function About() {
  const content = loadContent();

  return (
    <div className="container mx-auto px-4 py-8">
      <AboutSection about={content.about} />
      <Education education={content.education} />
    </div>
  );
}