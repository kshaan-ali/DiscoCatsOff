export default function VaultHeader() {
  return (
    <>
      <div className="flex gap-4 justify-between">
        <h1 className="text-orange  font-Showcard text-4xl uppercase text-wrap">
          Time-Lock <br className="  md:hidden"/> Vaults
        </h1>
        <div className="[&>span]:border-light-orange max-[518px]:hidden flex-1 w-full text-chocolate [&>span]:font-Bubblegum flex items-center justify-end gap-4 [&>*]:h-[30px] [&>*]:shrink-0 flex-wrap [&>*]:items-center [&>*]:rounded-lg [&>*]:px-4 [&>span]:flex [&>span]:gap-1 [&>span]:border [&>span]:bg-[#FFF2EA]">
          <span>
            <img
              width="30px"
              src="https://obya3wwefi.ufs.sh/f/vL3P6gZND4ZgURprkr8IL2B0g8xfsXybVJ47aqFWNprcn1oO"
              alt="token"
            />
            Token
          </span>
          <span>
            <img
              width="18px"
              className="p-[1px] shadow"
              src="https://obya3wwefi.ufs.sh/f/vL3P6gZND4ZgnCSyQpwrZbIPCng039uaFWQYG8AyrMzoeqsf"
              alt="NFTs"
            />
            NFTs
          </span>
          <span>
            <img
              width="30px"
              src="https://obya3wwefi.ufs.sh/f/vL3P6gZND4ZgnCGtZazrZbIPCng039uaFWQYG8AyrMzoeqsf"
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
