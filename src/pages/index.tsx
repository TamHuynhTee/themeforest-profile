import ScrollTopButton from '@/components/common/ScrollTopButton';
import AboutMe from '@/components/pageComponents/profile/sections/AboutMe';
import ContactMe from '@/components/pageComponents/profile/sections/ContactMe';
import Header from '@/components/pageComponents/profile/sections/Header';
import Intro from '@/components/pageComponents/profile/sections/Intro';
import Portfolio from '@/components/pageComponents/profile/sections/Portfolio';
import { useScrollspy } from '@/hooks';

export const menu = ['about', 'portfolio', 'blog', 'contact'];

export default function Home() {
  const activeId = useScrollspy(menu, 42);
  return (
    <div className="bg-white h-screen overflow-y-auto overflow-x-hidden relative scroll-smooth">
      <div id="top"></div>
      <Header activeId={activeId} />

      {/* Section Intro */}
      <Intro />
      {/* Section About me */}
      <AboutMe />
      {/* Section Portfolio */}
      <Portfolio />

      {/* Section Contact Me */}
      <ContactMe />

      <ScrollTopButton />
    </div>
  );
}
