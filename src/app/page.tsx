import HeroBanner from '@/componets/ui/HeroBanner';
import MarqueeBand from '@/componets/ui/MarqueeBand';
import About from '@/componets/ui/About';
import Categories from '@/componets/ui/Categories';
import ProfileFocusCard from '@/componets/ui/PortfolioCard';
import FeaturedWork from '@/componets/ui/FeaturedWork';
import SonicIdentities from '@/componets/ui/SonicIdentities';
import AdsWork from '@/componets/ui/AdsWork';

export default function Home() {

  return (
    <>
      <HeroBanner />
      <MarqueeBand titles={["Human", "•", "Dreamer", "•", "Creator", "•"]} />
      <Categories />
      <FeaturedWork />
      <SonicIdentities />
      <AdsWork />
      <ProfileFocusCard />
      <MarqueeBand titles={["About", "•", "About", "•", "About", "•"]} />
      <About />

    </>
  );
}
