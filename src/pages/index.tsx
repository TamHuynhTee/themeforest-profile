import AboutMe from '@/components/pageComponents/profile/sections/AboutMe';
import Header from '@/components/pageComponents/profile/sections/Header';
import Intro from '@/components/pageComponents/profile/sections/Intro';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white h-screen overflow-y-auto overflow-x-hidden relative scroll-smooth">
      <Header />

      {/* Section Intro */}
      <Intro />
      {/* Section About me */}
      <AboutMe />
    </div>
  );
}
