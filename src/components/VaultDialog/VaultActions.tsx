interface VaultActionsProps {
  vaultData: typeof import('@/lib/data').vaultData;
  quantity: number;
  setQuantity: (value: number) => void;
  isDepositing: boolean;
  setIsDepositing: (value: boolean) => void;
}

export function VaultActions({
  vaultData,
  quantity,
  setQuantity,
  isDepositing,
  setIsDepositing,
}: VaultActionsProps) {
  return (
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
              {vaultData.vaultInfo.amount}@ ${vaultData.vaultInfo.pricePerUnit}{' '}
              in {vaultData.vaultInfo.currency}
            </p>
          </div>
        </div>
        <img width="30px" src="/images/lightingBolt.webp" alt="points" />
      </div>
      <div className="border-gunmetal bg-yellow flex justify-between rounded-lg border p-2 font-semibold">
        <span>Vault Supply:</span>
        <span className="font-Teko tracking-wider">
          {vaultData.vaultSupply.current}/{vaultData.vaultSupply.total}
        </span>
      </div>
      <div className="border-gunmetal flex justify-between rounded-lg border bg-white p-1">
        <button onClick={() => setQuantity(quantity - 1)} className="px-2">
          -
        </button>
        <div>{quantity}</div>
        <button onClick={() => setQuantity(quantity + 1)} className="px-2">
          +
        </button>
      </div>
      <p className="-my-3 text-end text-sm">Balance: {vaultData.balance}</p>
      <div className="border-gunmetal flex gap-2 rounded-lg border p-1">
        <button
          onClick={() => setIsDepositing(true)}
          className={`flex-1 rounded-lg p-1 text-center font-semibold ${
            isDepositing ? 'border-gunmetal bg-amber border' : 'bg-white'
          }`}
        >
          Deposit
        </button>
        <button
          onClick={() => setIsDepositing(false)}
          className={`flex-1 rounded-lg p-1 text-center font-semibold ${
            isDepositing ? 'bg-white' : 'border-gunmetal bg-amber border'
          }`}
        >
          Withdraw
        </button>
      </div>
      <div className="border-gunmetal flex flex-col overflow-hidden rounded-lg border">
        <div className="flex">
          <div className="border-gunmetal flex-1 border-r border-b p-1 text-center">
            Position
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
          <img width="20px" height="20px" src="/images/info.webp" />
          You will be able to claim your initial funds along with the yield
          generated after the lock-up period.
        </div>
        <button className="bg-amber p-1">
          Claim Opens in: {vaultData.claimOpensIn}
        </button>
      </div>
    </div>
  );
}
