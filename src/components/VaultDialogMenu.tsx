import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LucideChevronLeft } from 'lucide-react';
import { LuCheck, LuZap } from 'react-icons/lu';

import CaretDown from './svg/CaretDown';
import AirDrop from './svg/AirDrop';
import VaultYieldCard from './VaultYieldCard';

import { vaultData } from '@/lib/data';
import HourGlass from './svg/HourGlass';
import { useState } from 'react';
import Scale from './svg/Scale';

export default function VaultDialogMenu() {
  const [quantity, setQuantity] = useState(1);
  const [toggleDeposit, setToggleDeposit] = useState(true);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="m-4">
          <button className="font-Bubblegum bg-crimson shadow-inner-custom2 border-gunmetal w-full rounded-xl border-1 p-2 text-center text-xl text-white uppercase hover:saturate-150">
            Join the Vault
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-cream max-[520px]:rounded-none max-[520px]:px-4 max-[520px]:py-12 md:p-10 [&>button]:hidden">
        <DialogHeader>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <DialogClose className="bg-amber rounded-full p-2">
                <LucideChevronLeft />
              </DialogClose>
              <div>
                <DialogTitle className="font-Teko text-gunmetal text-start text-2xl leading-4 font-semibold">
                  {vaultData.title}
                </DialogTitle>
                <DialogDescription className="max-md:hidden">
                  <span className="text-gunmetal/80 text-sm">
                    <strong>Type: </strong>
                    {vaultData.type}
                  </span>
                  <span className="text-gunmetal/80 ml-2 text-sm">
                    <strong>Vault: </strong>
                    {vaultData.vaultName}
                  </span>
                </DialogDescription>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger className="bg-amber font-Teko flex items-center justify-center gap-1 rounded-full p-1 px-3">
                  Yield BD <CaretDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="flex gap-2 rounded-xl border-none bg-black text-white">
                  <VaultYieldCard />
                </DropdownMenuContent>
              </DropdownMenu>
              <a className="border-amber rounded-full border-2 p-2 max-sm:hidden">
                <img
                  width="15px"
                  src="/images/info.webp"
                  alt="info"
                />
              </a>
              <a className="bg-amber rounded-full p-2 max-sm:hidden">
                <img
                  width="15px"
                  src="/images/gear.webp"
                  alt="setting"
                />
              </a>
            </div>
          </div>
          <DialogDescription className="text-start md:hidden">
            <span className="text-gunmetal/80 text-sm">
              <strong>Type: </strong>
              {vaultData.type}
            </span>
            <span className="text-gunmetal/80 ml-2 text-sm">
              <strong>Vault: </strong>
              {vaultData.vaultName}
            </span>
          </DialogDescription>
        </DialogHeader>
        <section className="flex gap-4 max-[520px]:flex-col-reverse">
          <div className="mt-9 flex flex-1 flex-col justify-end">
            {vaultData.isAirdropIncentivised && (
              <div className="to-crimson from-crimson/50 mx-4 flex items-center gap-2 rounded-xl bg-gradient-to-t p-2 text-white">
                <AirDrop />
                <div>
                  <p>Points {vaultData.points}x</p>
                  <h4 className="font-Teko font-semibold">
                    Airdrop Incentivised
                  </h4>
                </div>
                <LuCheck size="30px" className="ml-auto" />
              </div>
            )}
            <div className="mt-4 flex min-h-72 w-full flex-1 gap-3">
              <div className="flex flex-1 flex-col gap-3">
                <div className="bg-gunmetal relative flex flex-1 flex-col items-center justify-end gap-2 rounded-xl p-4 text-white">
                  <div className="absolute top-4 left-0 h-full w-full">
                    <Scale />
                  </div>
                  <p className="font-Teko font-semibold">
                    <span className="text-2xl">
                      $ {vaultData.yieldGenerated}{' '}
                    </span>
                    {vaultData.yieldUnit}
                  </p>
                  <p className="text-center text-sm font-semibold">
                    Yeild Generated
                  </p>
                </div>
                <div className="bg-gunmetal flex flex-1 items-center justify-center rounded-xl p-4">
                  <div className="flex items-center justify-center gap-2 text-white">
                    <HourGlass />
                    <div>
                      <p className="font-Teko text-3xl font-semibold">
                        {vaultData.timeLock}D
                      </p>
                      <p>Time-Lock</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gunmetal flex flex-1 flex-col rounded-xl p-3">
                <h5 className="text-center font-thin text-white">Backing</h5>
                <div className="mx-auto mt-4 mb-1 h-4 w-10 rounded-full border border-white/12 bg-white/10"></div>
                <div className="relative w-full flex-1">
                  <div
                    className="bg-amber absolute bottom-2 left-2 w-[calc(100%-16px)] rounded-xl"
                    style={{ height: `${vaultData.backingPercentage}%` }}
                  ></div>

                  <div className="relative z-20 flex h-full flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-white/12 bg-white/10 backdrop-blur-sm">
                    <p className="font-Teko flex items-center gap-2 text-xl text-white">
                      <LuZap /> Ratio: {vaultData.backingRatio}
                    </p>
                    <p className="font-Teko text-3xl font-bold text-white">
                      {vaultData.backingPercentage}%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <p className="text-center font-semibold">
              Vault Closes In: {vaultData.vaultClosesIn}
            </p>
            <div className="border-gunmetal flex items-center justify-between gap-2 rounded-xl border bg-white p-2">
              <div className="flex items-center gap-2">
                <img
                  width="30px"
                  className="p-[1px] shadow"
                  src="/images/danceCat.webp"
                  alt="NFTs"
                />
                <div>
                  <p>Vault Info</p>
                  <p className="font-Teko text-xl font-semibold tracking-wider">
                    {vaultData.vaultInfo.amount}@ $
                    {vaultData.vaultInfo.pricePerUnit}in{' '}
                    {vaultData.vaultInfo.currency}
                  </p>
                </div>
              </div>
              <img
                width="30px"
                src="/images/lightingBolt.webp"
                alt="points"
              />
            </div>
            <div className="border-gunmetal bg-yellow flex justify-between rounded-lg border p-2 font-semibold">
              <span>Vault Supply:</span>
              <span className="font-Teko tracking-wider">
                {vaultData.vaultSupply.current}/{vaultData.vaultSupply.total}
              </span>
            </div>
            <div className="border-gunmetal flex justify-between rounded-lg border bg-white p-1">
              <a
                onClick={() => {
                  setQuantity(quantity - 1);
                }}
                className="px-2"
              >
                -
              </a>
              <div>{quantity}</div>
              <a
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
                className="px-2"
              >
                +
              </a>
            </div>
            <p className="-my-3 text-end text-sm">
              Balance: {vaultData.balance}
            </p>
            <div className="border-gunmetal flex gap-2 rounded-lg border p-1">
              <button
                onClick={() => setToggleDeposit(true)}
                className={`flex-1 rounded-lg p-1 text-center font-semibold ${toggleDeposit ? 'bg-amber border-gunmetal border' : 'bg-white'}`}
              >
                Deposit
              </button>
              <button
                onClick={() => setToggleDeposit(false)}
                className={`flex-1 rounded-lg p-1 text-center font-semibold ${toggleDeposit ? 'bg-white' : 'bg-amber border-gunmetal border'}`}
              >
                Withdraw
              </button>
            </div>
            <div className="border-gunmetal flex flex-col overflow-hidden rounded-lg border">
              <div className="flex">
                <div className="border-gunmetal flex-1 border-r border-b p-1 text-center">
                  Positon
                </div>
                <div className="border-gunmetal flex-1 border-b p-1 text-center">
                  Amount
                </div>
              </div>
              <div className="flex">
                <div className="border-gunmetal flex-1 border-r border-b p-1 text-center">
                  Name of NFT
                </div>
                <div className="border-gunmetal flex-1 border-b p-1 text-center">
                  no. of NFTs
                </div>
              </div>
              <div className="bg-cream flex items-center justify-center gap-2 p-2 text-xs">
                <img
                  width="20px"
                  height="20px"
                  src="/images/info.webp"
                />
                You will be able to claim your initial funds along with the
                yield generated after the lock-up period.
              </div>
              <button className="bg-amber p-1">
                Claim Opens in:{vaultData.claimOpensIn}
              </button>
            </div>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
}
