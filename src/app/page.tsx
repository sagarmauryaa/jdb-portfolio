import HeroBanner from '@/componets/ui/HeroBanner';
import MarqueeBand from '@/componets/ui/MarqueeBand';
import About from '@/componets/ui/About';
import Categories from '@/componets/ui/Categories';
import ProfileFocusCard from '@/componets/ui/PortfolioCard';
import FeaturedWork from '@/componets/ui/FeaturedWork';
import SonicIdentities from '@/componets/ui/SonicIdentities';
import AdsWork from '@/componets/ui/AdsWork';
import Originals from '@/componets/ui/Originals';
import FlimSeries from '@/componets/ui/FlimSeries';
import ProducedArtists from '@/componets/ui/ProducedArtists';

export default function Home() {

  return (
    <>
      <HeroBanner />
      <MarqueeBand titles={["Human", "•", "Dreamer", "•", "Creator", "•"]} />
      <section id="work" className='flex flex-col gap-3 lg:gap-6'>
        <Categories />
        <FeaturedWork />
        <SonicIdentities />
        <AdsWork />
        <ProfileFocusCard />
        <Originals />
        <ProducedArtists />
        <FlimSeries />
      </section>
      <MarqueeBand titles={["About", "•", "About", "•", "About", "•"]} />
      <About />

    </>
  );
}
