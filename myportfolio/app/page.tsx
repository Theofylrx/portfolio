import { loadContent } from '@/utils/loadContent';
import { HomeTemplate } from '@/components/templates/HomeTemplate';

export default function Home() {
  const content = loadContent();
  return (
    <HomeTemplate 
      profile={content.profile} 
      workHistory={content.workHistory} 
    />
  );
}