import { AiFillInfoCircle } from 'react-icons/ai';
import VaultDialog from './VaultDialog';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

export default function VaultCard({
  title,
  image,
  stats,
  total,
  price,
}: {
  title: string;
  image: string;
  stats: {
    earnings: string;
    newAPR: string;
    lockedInPeriod: string;
  };
  total: string;
  price: string;
}) {
  return (
    <div className="border-gunmetal relative w-full max-w-[300px] overflow-hidden rounded-xl border-1 bg-white shadow max-md:max-w-[250px] max-sm:max-w-[400px]">
      <h2 className="bg-yellow mb-2 flex w-full items-center justify-center gap-2 rounded-[0%_0%_50%_50%_/_0%_0%_30%_30%] py-2 text-center font-semibold text-black">
        {title}
        <HoverCard>
          <HoverCardTrigger asChild>
            <a>
              <AiFillInfoCircle className="text-white" />
            </a>
          </HoverCardTrigger>
          <HoverCardContent className="bg-yellow w-[250px] rounded-xl border-gunmetal border">
            <p className="text-center">
              View details on rewards, lock periods, and liquidity options on
              clicking join the vault
            </p>
          </HoverCardContent>
        </HoverCard>
      </h2>
      <div className="flex justify-between px-2">
        <div className="border-gunmetal bg-cream text-sienna flex items-center rounded-xl border-1 px-3 py-1 font-bold max-sm:rounded-full">
          <img width="20px" src="/images/blueCoin.webp" alt="coin" />
          {price}
        </div>
        <div className="border-gunmetal text-sienna bg-cream flex items-center gap-2 rounded-xl border-1 px-3 py-1 font-bold max-sm:rounded-full">
          <img
            width="17px"
            className="p-[1px] shadow"
            src="/images/danceCat.webp"
            alt="total"
          />
          {total}
        </div>
      </div>
      <div className="-mt-2 mb-4 flex justify-center">
        <div
          style={{
            background: 'conic-gradient(#b91c1c 0% 65%, transparent 65% 100%)',
          }}
          className="relative aspect-square w-[130px] rounded-full"
        >
          <img
            className="absolute top-1/2 left-1/2 w-[126px] -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-white"
            src={image}
            alt="title"
          />
        </div>
      </div>

      <div className="border-gunmetal bg-cream mx-6 flex justify-between rounded-full border-1 px-2 py-1 text-sm">
        <span>Earnings:</span>
        <span className="text-sienna font-bold">{stats.earnings}</span>
      </div>
      <div className="border-gunmetal bg-cream mx-6 flex justify-between rounded-full border-x-1 px-2 py-1 text-sm">
        <span>Net APR:</span>
        <span className="text-sienna font-bold">{stats.newAPR}</span>
      </div>
      <div className="border-gunmetal bg-cream mx-6 flex justify-between rounded-full border-1 px-2 py-1 text-sm">
        <span>Locked-In Period:</span>
        <span className="text-sienna font-bold">{stats.lockedInPeriod}</span>
      </div>
      <VaultDialog />
    </div>
  );
}
