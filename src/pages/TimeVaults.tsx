import CatEar from '@/components/svg/CatEar';

export default function TimeVaults() {
  return (
    <section className="px-[5vw] py-10 pt-20">
      <div className="bg-cream border-saffron relative mx-auto max-w-7xl rounded-2xl border-4 p-6">
        <img
          width="100px"
          className="absolute -top-7 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 transform"
          src="https://obya3wwefi.ufs.sh/f/vL3P6gZND4ZgvVvOhpZND4Zg3JqVyuPAd16FmjCkSWzpT8R9"
          alt="Welcome Cat"
        />
        <div className="absolute -top-10 left-[10%] -z-10 scale-x-[-1] transform">
          <CatEar />
        </div>
        <div className="transform-z-10 absolute -top-10 right-[10%] -z-10">
          <CatEar />
        </div>
        <div className="flex justify-between">
          <h1 className="text-orange font-Showcard text-4xl uppercase">
            Time-Lock Vaults
          </h1>
          <div className="[&>span]:border-light-orange text-chocolate [&>span]:font-Bubblegum flex [&>span]:gap-1 [&>span]:flex items-center justify-center gap-4 [&>*]:rounded-lg [&>span]:border [&>*]:px-4 [&>*]:h-[30px] [&>*]:items-center">
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
                className='p-[1px]  shadow'
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
            <button className='bg-light-orange text-white border-b-sienna border-b-2 hover:bg-light-orange/90'>Manual</button>
          </div>
        </div>
        <p className='my-2'>Earn Multi-layered yield while staying Liquid with NFTs. </p>
      </div>
    </section>
  );
}
