import InfoCard from './InfoCard';
import VotingCard from './VotingCard';
import CatEar from './svg/CatEar';
import cardData from '../lib/data';
import { TbBolt } from 'react-icons/tb';
import { TbPlayCardK } from 'react-icons/tb';
import { TbCoinRupeeFilled } from 'react-icons/tb';

function VotingPanel() {
  return (
    <section className="mx-auto flex max-w-[1000px] flex-col gap-8 px-[5vw] py-4 max-md:px-[1vw]">
      <div className="flex justify-between">
        <button className="text-shadow rounded-lg bg-[#e49768] p-4 py-1 text-white shadow-[2px_4px_0px_theme(colors.amber.800)]">
          Disco Cats
        </button>
        <button className="rounded-lg bg-[#e49768] p-4 py-1 font-[Bubblegum_Sans] text-amber-900">
          Connect Wallet
        </button>
      </div>
      <main className="relative flex h-full w-full flex-1 flex-col rounded-2xl border-4 border-[#e49768] bg-[#fff2ea] p-2">
        <div className="absolute top-2 left-4 -z-10 w-8 -translate-y-full -rotate-12">
          <CatEar />
        </div>
        <div className="absolute top-2 right-4 -z-10 w-8 -translate-y-full rotate-12">
          <CatEar />
        </div>
        <div className="flex flex-wrap items-center justify-between px-4 pb-2">
          <h1 className="font-[Passion_one] text-4xl text-[#fd7a27]">VOTING</h1>
          <div className="flex flex-wrap gap-2 font-[Bubblegum_Sans] text-[#e49768] [&>button]:rounded-lg [&>button]:border [&>button]:border-[#e49768] [&>button]:p-1 [&>button]:px-3">
            <button className="flex items-center">
              <TbCoinRupeeFilled />
              Token
            </button>
            <button className="flex items-center">
              <TbPlayCardK />
              NFT
            </button>
            <button className="flex items-center">
              <TbBolt />
              Points
            </button>

            <button className="rounded-lg bg-[#e49768] p-4 py-1 font-[Bubblegum_Sans] text-white shadow-[2px_4px_0px_theme(colors.amber.800)]">
              Manual
            </button>
          </div>
        </div>
        <div className="flex flex-col rounded-[40px] bg-[#e8c88f] p-1 pb-4">
          <div className="flex justify-center gap-12 p-6 text-nowrap max-[500px]:flex-col max-[500px]:p-8 max-md:gap-4 max-md:p-4">
            {cardData.map((card, index) => (
              <InfoCard key={index} {...card} />
            ))}
          </div>
          <div className="flex justify-center gap-12 rounded-[40px] bg-[#ae6231] p-6 text-nowrap max-[500px]:flex-col max-[500px]:p-8 max-md:gap-4 max-md:p-4">
            {cardData.map((card, index) => (
              <VotingCard key={index} {...card} />
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}

export default VotingPanel;
