import {
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LucideChevronLeft } from 'lucide-react';
import CaretDown from '@/components/svg/CaretDown';
import VaultYieldCard from '../VaultYieldCard';

interface VaultHeaderProps {
  vaultData: typeof import('@/lib/data').vaultData;
}

export function VaultHeader({ vaultData }: VaultHeaderProps) {
  return (
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
            <DropdownMenuTrigger className="font-Teko bg-amber flex items-center justify-center gap-1 rounded-full p-1 px-3">
              Yield BD <CaretDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex gap-2 rounded-xl border-none bg-black text-white">
              <VaultYieldCard />
            </DropdownMenuContent>
          </DropdownMenu>
          <a className="border-amber rounded-full border-2 p-2 max-sm:hidden">
            <img width="15px" src="/images/info.webp" alt="info" />
          </a>
          <a className="bg-amber rounded-full p-2 max-sm:hidden">
            <img width="15px" src="/images/gear.webp" alt="setting" />
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
  );
}
