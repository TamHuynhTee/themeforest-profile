import OverlayImage from '@/components/common/OverlayImage';
import ScrollTopButton from '@/components/common/ScrollTopButton';
import AboutMe from '@/components/pageComponents/profile/sections/AboutMe';
import Blog from '@/components/pageComponents/profile/sections/Blog';
import ContactMe from '@/components/pageComponents/profile/sections/ContactMe';
import Header from '@/components/pageComponents/profile/sections/Header';
import Intro from '@/components/pageComponents/profile/sections/Intro';
import Portfolio from '@/components/pageComponents/profile/sections/Portfolio';
import OverlayImageProvider from '@/contexts/useOverlayImage';
import { useScrollspy } from '@/hooks';

export const menu = ['about', 'portfolio', 'blog', 'contact'];

export default function Home() {
  const activeId = useScrollspy(menu, 300);
  return (
    <OverlayImageProvider>
      <div className="bg-white overflow-x-hidden relative scroll-smooth">
        <div id="top"></div>

        {/* Header */}
        <Header activeId={activeId} />

        {/* Section Intro */}
        <Intro />
        {/* Section About me */}
        <AboutMe />
        {/* Section Portfolio */}
        <Portfolio />
        {/* Section Blog */}
        <Blog />

        {/* Section Contact Me */}
        <ContactMe />

        <OverlayImage />
        <ScrollTopButton />
      </div>
    </OverlayImageProvider>
  );
}
