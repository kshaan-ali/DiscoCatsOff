import { AiFillInfoCircle } from 'react-icons/ai';
import VaultDialog from './VaultDialog';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { VaultData } from '@/lib/data';

import { useAppKitAccount, useAppKitProvider } from '@reown/appkit/react';
import { BrowserProvider, Contract } from 'ethers';
import {  timeVaultV1Abi } from '@/lib/web3Config';
import { useEffect, useState } from 'react';

export default function VaultCard(
  vaultData
: VaultData) {


  const { address, isConnected } = useAppKitAccount();
  const { walletProvider }: { walletProvider: any } =
    useAppKitProvider('eip155');
  const [vaultDataTemp, setvaultDataTemp] = useState<any>(vaultData);

  useEffect(() => {
   
    async function code() {
      if (isConnected) {
        const ethersProvider = new BrowserProvider(walletProvider);
        const signer = await ethersProvider.getSigner();

        const proxycontract = new Contract(
          vaultData.proxyaddress,
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
        
        setvaultDataTemp((prevVaultData:VaultData) => ({
          ...prevVaultData, // Copy previous state
          balance:balance,
          claimOpensIn: claimingPeriod.toString(),
          vaultClosesIn: joiningPeriod.toString(),
          vaultSupply: {
            ...prevVaultData?.vaultSupply,
            current: nftCount,
            
            
          },
          vaultInfo: {
            ...prevVaultData?.vaultInfo,
            
            pricePerUnit: nftPrice,
          },
          yieldGenerated:yieldGenerated,
          nftAddress:nftAddress
        }));

        if(vaultDataTemp){
          console.log(vaultDataTemp)
        }
      }
    }
    code();
    
  }, [address, isConnected]);
  return (
    <div className="border-gunmetal relative w-full max-w-[300px] overflow-hidden rounded-xl border-1 bg-white shadow max-md:max-w-[250px] max-sm:max-w-[400px]">
      <h2 className="bg-yellow mb-2 flex w-full items-center justify-center gap-2 rounded-[0%_0%_50%_50%_/_0%_0%_30%_30%] py-2 text-center font-semibold text-black">
        {vaultData.title}
        <HoverCard>
          <HoverCardTrigger asChild>
            <a>
              <AiFillInfoCircle className="text-white" />
            </a>
          </HoverCardTrigger>
          <HoverCardContent className="bg-yellow border-gunmetal w-[250px] rounded-xl border">
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
          {vaultData.vaultInfo.pricePerUnit}
        </div>
        <div className="border-gunmetal text-sienna bg-cream flex items-center gap-2 rounded-xl border-1 px-3 py-1 font-bold max-sm:rounded-full">
          <img
            width="17px"
            className="p-[1px] shadow"
            src="/images/danceCat.webp"
            alt="total"
          />
          {vaultData.vaultInfo.amount}
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
            src={vaultData.image}
            alt="title"
          />
        </div>
      </div>

      <div className="border-gunmetal bg-cream mx-6 flex justify-between rounded-full border-1 px-2 py-1 text-sm">
        <span>Earnings:</span>
        <span className="text-sienna font-bold">{vaultData.stats.earnings}</span>
      </div>
      <div className="border-gunmetal bg-cream mx-6 flex justify-between rounded-full border-x-1 px-2 py-1 text-sm">
        <span>Net APR:</span>
        <span className="text-sienna font-bold">{vaultData.stats.newAPR}</span>
      </div>
      <div className="border-gunmetal bg-cream mx-6 flex justify-between rounded-full border-1 px-2 py-1 text-sm">
        <span>Locked-In Period:</span>
        <span className="text-sienna font-bold">{vaultData.stats.lockedInPeriod}</span>
      </div>
      <div className="border-gunmetal bg-cream mx-6 flex justify-between rounded-full border-1 py-1 text-xs">
        {/* <span>Contract Address:</span> */}
        <span className="text-sienna ">{vaultData.proxyaddress}</span>
      </div>
      <VaultDialog  vaultData={vaultDataTemp}/>
    </div>
  );
}
