export default function VaultHeader() {
  return (
    <>
      <div className="flex justify-between gap-4">
        <h1 className="text-orange max-md:text-3xl max-sm:text-2xl text-nowrap font-Showcard text-4xl uppercase">
          Time-Lock Vaults
        </h1>
        <div className="[&>span]:border-light-orange text-chocolate [&>span]:font-Bubblegum flex w-full flex-1 flex-wrap items-center justify-end gap-4 max-[518px]:hidden [&>*]:h-[30px] [&>*]:shrink-0 [&>*]:items-center [&>*]:rounded-lg [&>*]:px-4 [&>span]:flex [&>span]:gap-1 [&>span]:border [&>span]:bg-[#FFF2EA]">
          <span>
            <img
              width="30px"
              src="/images/shibaCoin.webp"
              alt="token"
            />
            Token
          </span>
          <span>
            <img
              width="18px"
              className="p-[1px] shadow"
              src="/images/danceCat.webp"
              alt="NFTs"
            />
            NFTs
          </span>
          <span>
            <img
              width="30px"
              src="/images/lightingBolt.webp"
              alt="points"
            />
            Points
          </span>
          <button className="bg-light-orange border-b-sienna hover:bg-light-orange/90 border-b-2 text-white">
            Manual
          </button>
        </div>
      </div>
      <p className="text-gunmetal my-4 mb-8 font-thin">
        Earn Multi-layered yield while staying Liquid with NFTs.{' '}
      </p>
    </>
  );
}
