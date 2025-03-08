import HeroSection from '@/modules/HeroSection';
import Managing from '@/modules/Managing';
import Personalized from '@/modules/Personalized';
import PracticeSession from '@/modules/PracticeSession';
import ResearchSection from '@/modules/ResearchSection';
import TestSection from '@/modules/TestSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PracticeSession/>
      <Personalized/>
      <Managing/>
      <ResearchSection/>
      <TestSection/>
    </div>
  );
}
