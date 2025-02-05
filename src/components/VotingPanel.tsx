import Card from "./Card";
import VotingCard from "./VotingCard";
import cardData from "./../utils/data";

function VotingPanel() {
  return (
    <section className="max-w-[1000px] mx-auto px-[5vw] py-4 flex flex-col gap-4 ">
      <div className="flex justify-between">
        <button className="text-shadow bg-[#e49768] text-white p-4 py-1 shadow-[2px_4px_0px_theme(colors.amber.800)] rounded-lg">
          Disco Cats
        </button>
        <button className="bg-[#e49768] text-amber-900 rounded-lg font-[Bubblegum_Sans] p-4 py-1">
          Connect Wallet
        </button>
      </div>
      <main className="border-[#e49768] bg-[#fff2ea] border-4 flex flex-col rounded-2xl w-full flex-1 h-full p-2">
        <div className="flex px-4 justify-between items-center pb-2">
          <h1 className="font-[Passion_one] text-4xl text-[#fd7a27]">VOTING</h1>
          <div className="[&>button]:border [&>button]:border-[#e49768] flex gap-2  [&>button]:rounded-lg  [&>button]:p-1 [&>button]:px-3 font-[Bubblegum_Sans] text-[#e49768]">
            <button>Token</button>
            <button>NFT</button>
            <button>Points</button>

            <button className="bg-[#e49768] text-white rounded-lg font-[Bubblegum_Sans] p-4 py-1">
              Manual
            </button>
          </div>
        </div>
        <div className="bg-[#e8c88f] flex p-1 flex-col pb-4 rounded-[40px] ">
          <div className="flex p-6 gap-12">
            {cardData.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
          <div className="bg-[#ae6231] p-6 rounded-[40px] flex gap-12">
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
