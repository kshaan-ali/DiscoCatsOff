import CatEar from '@/components/svg/CatEar';
import VaultHeader from './VaultHeader';
import { cardData } from './../lib/data.ts';
import VaultCard from './VaultCard.tsx';

export default function VaultGrid() {
  return (
    <section className="px-[5vw] py-10 pt-20">
      <div className="bg-cream border-saffron relative mx-auto max-w-[1100px] rounded-2xl border-4 p-6 max-md:px-4">
        <img
          width="100px"
          className="absolute -top-7 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 transform"
          src="https://obya3wwefi.ufs.sh/f/vL3P6gZND4ZgvVvOhpZND4Zg3JqVyuPAd16FmjCkSWzpT8R9"
          alt="Welcome Cat"
        />
        <div className="absolute -top-10 left-[10%] -z-10 scale-x-[-1] transform">
          <CatEar />
        </div>
        <div className="transform-z-10 absolute -top-10 right-[10%] -z-10">
          <CatEar />
        </div>
        <VaultHeader />
        <div className="flex flex-wrap justify-evenly gap-8 max-lg:gap-4">
          {cardData.map((card, index) => (
            <VaultCard {...card} key={index} />
          ))}
          {cardData.map((card, index) => (
            <VaultCard {...card} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
