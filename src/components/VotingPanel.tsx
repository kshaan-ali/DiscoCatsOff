import InfoCard from "./InfoCard";
import VotingCard from "./VotingCard";
import cardData from "./../utils/data";
import CatEar from "../svg/CatEar";
import { TbBolt } from "react-icons/tb";
import { TbPlayCardK } from "react-icons/tb";
import { TbCoinRupeeFilled } from "react-icons/tb";

function VotingPanel() {
  return (
    <section className="max-w-[1000px] mx-auto px-[5vw] max-md:px-[1vw] py-4 flex flex-col gap-8 ">
      <div className="flex justify-between">
        <button className="text-shadow bg-[#e49768] text-white p-4 py-1 shadow-[2px_4px_0px_theme(colors.amber.800)] rounded-lg">
          Disco Cats
        </button>
        <button className="bg-[#e49768] text-amber-900 rounded-lg font-[Bubblegum_Sans] p-4 py-1">
          Connect Wallet
        </button>
      </div>
      <main className="relative border-[#e49768] bg-[#fff2ea] border-4 flex flex-col rounded-2xl w-full flex-1 h-full p-2">
        <div className="absolute w-8 top-2 -rotate-12 left-4 -z-10 -translate-y-full">
          <CatEar />
        </div>
        <div className="absolute w-8 top-2 rotate-12 right-4 -z-10 -translate-y-full">
          <CatEar />
        </div>
        <div className="flex px-4 justify-between items-center pb-2 flex-wrap">
          <h1 className="font-[Passion_one] text-4xl text-[#fd7a27]">VOTING</h1>
          <div className="[&>button]:border [&>button]:border-[#e49768] flex gap-2 flex-wrap  [&>button]:rounded-lg  [&>button]:p-1 [&>button]:px-3 font-[Bubblegum_Sans] text-[#e49768]">
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

            <button className="bg-[#e49768] text-white  rounded-lg shadow-[2px_4px_0px_theme(colors.amber.800)] font-[Bubblegum_Sans] p-4 py-1">
              Manual
            </button>
          </div>
        </div>
        <div className="bg-[#e8c88f] flex p-1 flex-col pb-4 rounded-[40px] ">
          <div className="flex p-6 gap-12 max-md:gap-4 text-nowrap max-md:p-4  max-[500px]:flex-col justify-center max-[500px]:p-8">
            {cardData.map((card, index) => (
              <InfoCard key={index} {...card} />
            ))}
          </div>
          <div className="bg-[#ae6231] p-6 rounded-[40px] flex gap-12 max-md:gap-4 text-nowrap max-md:p-4  max-[500px]:flex-col justify-center max-[500px]:p-8">
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
