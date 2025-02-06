import { LuGlobe, LuTwitter } from "react-icons/lu";
import { PiDiscordLogo, PiTelegramLogo } from "react-icons/pi";
import { GiParachute } from "react-icons/gi";

const InfoCard = ({
  title,
  stats,
  total,
  primeChoice,
}: {
  title: string;
  stats: { label: string; value: string }[];
  total: string;
  metrics: string[];
  primeChoice: boolean;
}) => {
  return (
    <div className=" relative flex-1 flex flex-col justify-center items-center p-4 bg-white rounded-2xl">
      {primeChoice && (
        <div className="absolute -right-2 -top-2">
          <GiParachute className="bg-white drop-shadow text-5xl text-[#e49768] p-2 rounded-2xl" />
        </div>
      )}
        <div className="absolute left-0 top-4">
        <p className="text-sm  p-1  text-[#ae6231] bg-[#ffd3b6] ">Yeild</p>
        </div>
      <div
        className="relative w-20 h-20 rounded-full"
        style={{
          background: "conic-gradient(#b91c1c 0% 65%, transparent 65% 100%)",
        }}
      >
        <div className="absolute inset-[2px] bg-red-500 rounded-full">
          <img src="/cat.webp" alt="" className="w-full h-full rounded-full" />
        </div>
      </div>
      <h2 className="text-2xl font-bold font-[Bubblegum_Sans] max-md:text-lg text-[#e49768]">
        {title}
      </h2>
      <div className="flex gap-2 text-[#ae6231] text-sm">
        <a href="">
          <LuGlobe />
        </a>
        <a href="">
          <LuTwitter />
        </a>
        <a href="">
          <PiTelegramLogo />
        </a>
        <a href="">
          <PiDiscordLogo />
        </a>
      </div>
      <ul className="mt-2 text-sm w-full flex flex-col gap-1">
        {stats.map((stat, i) => (
          <li
            key={i}
            className="flex justify-between font-bold font-[Bubblegum_Sans] text-[#e49768] py-1 px-2 bg-[#fff2ea] w-full"
          >
            <span>{stat.label}</span>
            <span>{stat.value}</span>
          </li>
        ))}
      </ul>
      <p className="mt-2 border border-[#ae6231] max-md:text-sm font-bold bg-[#e84544]  rounded-xl py-1 px-4 w-full text-white font-[Passion_one] text-center text-lg">
        Total: {total}
      </p>
    </div>
  );
};

export default InfoCard;
