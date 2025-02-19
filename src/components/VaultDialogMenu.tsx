// components/VaultDialogMenu.tsx
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
import { LuCheck } from 'react-icons/lu';

import CaretDown from './svg/CaretDown';
import AirDrop from './svg/AirDrop';

import { vaultData } from '@/lib/data';

export default function VaultDialogMenu() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="m-4">
          <button className="font-Bubblegum bg-crimson shadow-inner-custom2 border-gunmetal w-full rounded-xl border-1 p-2 text-center text-xl text-white uppercase hover:saturate-150">
            Join the Vault
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="max-md:p-4 [&>button]:hidden">
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
                <DropdownMenuContent className="rounded-xl border-none bg-black p-4 text-white">
                  Vault Yield last hour
                </DropdownMenuContent>
              </DropdownMenu>
              <a className="border-amber rounded-full border-2 p-2 max-sm:hidden">
                <img
                  width="15px"
                  src="https://obya3wwefi.ufs.sh/f/vL3P6gZND4ZgsKjDQhubLcmiQNDCSaGvJPfHTonMlghOK9Fe"
                  alt=""
                />
              </a>
              <a className="bg-amber rounded-full p-2 max-sm:hidden">
                <img
                  width="15px"
                  src="https://obya3wwefi.ufs.sh/f/vL3P6gZND4ZgWN2CaDfzldacmjP36eC45HQKwZTMG9kNu2hX"
                  alt=""
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
        <section className="flex gap-4 max-sm:flex-col">
          <div className="flex-1">
            {vaultData.isAirdropIncentivised && (
              <div className="to-crimson from-crimson/50 flex flex-1 items-center gap-2 rounded-xl bg-gradient-to-t p-2 text-white">
                <AirDrop />
                <div>
                  <p>Points {vaultData.points}x</p>
                  <h4 className="font-Teko font-semibold">
                    Airdrop Incentivised
                  </h4>
                </div>
                <LuCheck size="30px" />
              </div>
            )}
            <div className="mt-4 flex h-64 w-full gap-3">
              <div className="flex flex-1 flex-col gap-3">
                <div className="bg-gunmetal flex-1 rounded-xl"></div>
                <div className="bg-gunmetal flex-1 rounded-xl"></div>
              </div>
              <div className="bg-gunmetal flex flex-1 flex-col rounded-xl p-3">
                <h5 className="text-center font-thin text-white">Backing</h5>
                <div className="mx-auto mb-1 h-4 w-10 rounded-full border border-white/12 bg-white/10"></div>
                <div className="relative w-full flex-1">
                  <div
                    className="bg-amber absolute bottom-2 left-2 w-[calc(100%-16px)] rounded-xl"
                    style={{ height: `${vaultData.backingPercentage}%` }}
                  ></div>

                  <div className="relative z-20 flex h-full flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-white/12 bg-white/10 backdrop-blur-sm">
                    <p className="font-Teko text-xl text-white">
                      Ratio: {vaultData.backingRatio}
                    </p>
                    <p className="font-Teko text-3xl font-bold text-white">
                      {vaultData.backingPercentage}%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1"></div>
        </section>
      </DialogContent>
    </Dialog>
  );
}
