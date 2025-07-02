import workData from '@/store/work.json'; 
import HeroBanner from '@/componets/ui/HeroBanner';
import MarqueeBand from '@/componets/ui/MarqueeBand';
import About from '@/componets/ui/About';
import Categories from '@/componets/ui/Categories';
import ProfileFocusCard from '@/componets/ui/PortfolioCard';

export default function Home() {
  console.log('workData', workData);

  return (
    <>
      <HeroBanner />
      <MarqueeBand titles={["Human", "•", "Dreamer", "•", "Creator", "•"]} />
      <Categories />
      <ProfileFocusCard />
      <MarqueeBand titles={["About", "•", "About", "•", "About", "•"]} />
      <About />

    </>
  );
}
