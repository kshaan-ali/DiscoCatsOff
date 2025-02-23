import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { VaultHeader } from './VaultHeader';
import { VaultMetrics } from './VaultMetrics';
import { VaultActions } from './VaultActions';
import { vaultData } from '@/lib/data';

export default function VaultDialog() {
  const [quantity, setQuantity] = useState(1);
  const [isDepositing, setIsDepositing] = useState(true);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="m-4">
          <button className="border-gunmetal bg-crimson shadow-inner-custom2 font-Bubblegum w-full rounded-xl border-1 p-2 text-center text-xl text-white uppercase hover:saturate-150">
            Join the Vault
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-cream max-[520px]:rounded-none max-[520px]:px-4 max-[520px]:py-12 md:p-10 [&>button]:hidden">
        <VaultHeader vaultData={vaultData} />
        <section className="flex gap-4 max-[520px]:flex-col-reverse">
          <VaultMetrics vaultData={vaultData} />
          <VaultActions
            vaultData={vaultData}
            quantity={quantity}
            setQuantity={setQuantity}
            isDepositing={isDepositing}
            setIsDepositing={setIsDepositing}
          />
        </section>
      </DialogContent>
    </Dialog>
  );
}
