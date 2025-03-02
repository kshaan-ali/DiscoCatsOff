import { useEffect, useState } from 'react';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { DialogContent } from '@/components/ui/dialogCustom';
import { VaultHeader } from './VaultHeader';
import { VaultMetrics } from './VaultMetrics';
import { VaultActions } from './VaultActions';
// import { vaultData } from '@/lib/data';
import { useAppKitAccount, useAppKitProvider } from '@reown/appkit/react';
import { BrowserProvider, Contract } from 'ethers';
import {  timeVaultV1Abi } from '@/lib/web3Config';
import { VaultData } from '../VaultGrid';

export default function VaultDialog({
  proxyaddress,
  tokenAddress,
}: {
  proxyaddress: string;
  tokenAddress: string;
}) {
  const vaultDataTemp: VaultData = {
    title: 'Burger Math',
    type: 'Flexible',
    vaultName: 'TomatoLend',
    points: 5,
    isAirdropIncentivised: true,
    yieldGenerated: 0,
    yieldUnit: 'USDC',
    timeLock: 60,
    backingRatio: 1.36,
    backingPercentage: 36,
    vaultClosesIn: '2d:15h:16m:30s',
    vaultInfo: {
      amount: 1400,
      pricePerUnit: 0,
      currency: 'USDC',
    },
    vaultSupply: {
      current: 1000,
      total: 1400,
    },
    balance: 0,
    depositAmount: 2,
    claimOpensIn: '59d:15h:16m:30s',
  };
  const [quantity, setQuantity] = useState(1);
  const [isDepositing, setIsDepositing] = useState(true);
  const { address, isConnected } = useAppKitAccount();
  const { walletProvider }: { walletProvider: any } =
    useAppKitProvider('eip155');
  const [vaultData, setVaultData] = useState<any>();

  useEffect(() => {
    const time=setInterval(code,1000)
    async function code() {
      if (isConnected) {
        const ethersProvider = new BrowserProvider(walletProvider);
        const signer = await ethersProvider.getSigner();

        const proxycontract = new Contract(
          proxyaddress,
          timeVaultV1Abi,
          signer
        );
        //joining time,claiming period tiotal nft limit , current nft count,price
        //withdraw &deposit, yeild generated
        const balance = await proxycontract.totalFunds();
        const nftAddress = await proxycontract.nftAddress();
        const nftCount = await proxycontract.getNftCount();
        const claimingPeriod = await proxycontract.claimingPeriod();
        const joiningPeriod = await proxycontract.joiningPeriod();
        const yieldGenerated = 0
        const nftPrice = await proxycontract.nftPrice();

        console.log('nft address', nftAddress);
        console.log('vault balance', balance);
        vaultDataTemp.balance = balance;
        vaultDataTemp.claimOpensIn = claimingPeriod.toString();
        vaultDataTemp.vaultClosesIn = joiningPeriod.toString();
        vaultDataTemp.vaultSupply.current = nftCount;
        vaultDataTemp.vaultSupply.total = 1000;
        vaultDataTemp.vaultInfo.amount = 1000;
        vaultDataTemp.vaultInfo.pricePerUnit = nftPrice;
        vaultDataTemp.yieldGenerated = yieldGenerated;
        console.log('nftCount', nftCount);
        setVaultData(vaultDataTemp);
      }
    }
    code();
    return clearInterval(time)
  }, [address, isConnected]);

  if (vaultData) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <div className="m-4">
            <button
              onClick={async () => {}}
              className="border-gunmetal bg-crimson shadow-inner-custom2 font-Bubblegum w-full rounded-xl border-1 p-2 text-center text-xl text-white uppercase hover:saturate-150"
            >
              Join the Vault
            </button>
          </div>
        </DialogTrigger>
        {vaultData ? (
          <DialogContent className="bg-cream max-[520px]:rounded-none max-[520px]:px-4 max-[520px]:py-12 md:p-10 [&>button]:hidden">
            <VaultHeader vaultData={vaultData} />
            <section className="flex gap-4 max-[520px]:flex-col-reverse">
              <VaultMetrics vaultData={vaultData} />
              <VaultActions
              proxyaddress={proxyaddress}
              tokenAddress={tokenAddress}
                vaultData={vaultData}
                quantity={quantity}
                setQuantity={setQuantity}
                isDepositing={isDepositing}
                setIsDepositing={setIsDepositing}
              />
            </section>
          </DialogContent>
        ) : (
          <>Loading</>
        )}
      </Dialog>
    );
  } else {
    return (
      <div className="border-gunmetal m-3 bg-crimson shadow-inner-custom2 font-Bubblegum  rounded-xl border-1 p-2 text-center text-xl text-white uppercase hover:saturate-150">
        Laoding
      </div>
    );
  }
}
