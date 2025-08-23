import { loadContent } from '@/utils/loadContent';
import { AboutTemplate } from '@/components/templates/AboutTemplate';

export default function About() {
  const content = loadContent();

  return (
    <AboutTemplate 
      about={content.about} 
      education={content.education} 
    />
  );
}