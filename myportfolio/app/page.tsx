import { loadContent } from '@/utils/loadContent';
import ProfileSection from '@/components/ProfileSection';
import WorkHistory from '@/components/WorkHistory';

export default function Home() {
  const content = loadContent();
  return (
    <div className="container mx-auto px-4">
      <ProfileSection profile={content.profile} />
      <WorkHistory workHistory={content.workHistory} />
    </div>
  );
}