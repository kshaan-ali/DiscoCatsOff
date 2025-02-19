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
import CaretDown from './svg/CaretDown';
import AirDrop from './svg/AirDrop';
import { LuCheck } from 'react-icons/lu';

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
                  Burger Math
                </DialogTitle>
                <DialogDescription className="max-md:hidden">
                  <span className="text-gunmetal/80 text-sm">
                    <strong>Type: </strong>Flexible
                  </span>
                  <span className="text-gunmetal/80 ml-2 text-sm">
                    <strong>Vault: </strong>TomotoLend
                  </span>
                </DialogDescription>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger className="bg-amber font-Teko flex items-center justify-center gap-1 rounded-full p-1 px-3">
                  Yeild BD <CaretDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="rounded-xl border-none bg-black p-4 text-white">
                  Vault Yeild last hour
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
          <DialogDescription className="md:hidden text-start">
            <span className="text-gunmetal/80 text-sm">
              <strong>Type: </strong>Flexible
            </span>
            <span className="text-gunmetal/80 ml-2 text-sm">
              <strong>Vault: </strong>TomotoLend
            </span>
          </DialogDescription>
        </DialogHeader>
        <section className="flex gap-4 max-sm:flex-col">
          <div className="to-crimson from-crimson/50 flex flex-1 items-center gap-2 rounded-xl bg-gradient-to-t p-2 text-white">
            <AirDrop />
            <div>
              <p>Points 5x</p>
              <h4 className="font-Teko font-semibold">Airdrop Incentivised</h4>
            </div>
            <LuCheck size="30px" />
          </div>
          <div className="flex-1"></div>
        </section>
      </DialogContent>
    </Dialog>
  );
}
