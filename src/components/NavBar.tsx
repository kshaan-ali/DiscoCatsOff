import { NavLink } from 'react-router-dom';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Soon from '@/components/ui/soon';
import { LuMenu } from 'react-icons/lu';

export default function NavBar() {
  const chains = ['Berachain', 'Ethereum', 'Binance'];

  return (
    <nav className="px-[5vw]">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-6">
        <div className="flex gap-7 max-lg:gap-4">
          <NavLink
            to="/"
            className="font-Showcard text-center text-2xl leading-6 font-bold tracking-wider text-white uppercase duration-50 hover:scale-[1.01]"
          >
            Disco <br />
            Cats
          </NavLink>
          <div className="[&>a]:bg-cream [&>a]:text-chocolate [&>a]:border-orange [&>a]:font-Bubblegum flex items-center gap-2 max-[870px]:hidden max-lg:gap-1 [&>a]:relative [&>a]:flex [&>a]:h-[42px] [&>a]:items-center [&>a]:rounded-xl [&>a]:border-2 [&>a]:px-3 [&>a]:hover:hue-rotate-280">
            <NavLink to="/">Time Vaults</NavLink>
            <NavLink to="soon">
              <Soon />
              Liquid Launch
            </NavLink>
            <NavLink to="soon">
              <Soon />
              PreSale Vaults
            </NavLink>
            <NavLink to="soon">
              <Soon />
              Bribe Wars
            </NavLink>
          </div>
        </div>
        <div className="flex items-center gap-2 [&>button]:rounded-xl">
          <div className="[&>button]:bg-cream [&>button]:border-light-orange [&>button]:text-chocolate max-[420px]:hidden [&>button]:border">
            <Select>
              <SelectTrigger>
                <img
                  width="20px"
                  className="mx-2"
                  src="https://obya3wwefi.ufs.sh/f/vL3P6gZND4Zg2NwStXzI2X0sAlkHeonWU1ufcmjTZCFEQrBO"
                  alt="blockchain"
                />
                <SelectValue placeholder="Berachain" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select Chain</SelectLabel>
                  {chains.map((chain, index) => (
                    <SelectItem key={index} value={chain}>
                      {chain}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <a className="font-Bubblegum hover:bg-orange shadow-inner-custom bg-light-orange flex h-[42px] items-center rounded-xl px-2 text-center leading-6 font-bold tracking-wider text-nowrap text-white max-[420px]:hidden">
            Connect Wallet
          </a>
          <a className="bg-cream hidden rounded-lg px-2 py-1 max-[870px]:block">
            <LuMenu size="25px" className="text-light-orange" />
          </a>
        </div>
      </div>
    </nav>
  );
}
