import { Link } from 'react-router-dom';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function NavBar() {
  const chains = ['Berachain', 'Ethereum', 'Binance']

  return (
    <nav>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-[5vw] py-4">
        <div className="flex gap-7">
          <Link
            to="/"
            className="font-Showcard text-center text-2xl leading-6 font-bold tracking-wider text-white uppercase duration-50 hover:scale-[1.01]"
          >
            Disco <br />
            Cats
          </Link>
          <div className="[&>a]:bg-cream [&>a]:text-chocolate [&>a]:border-orange [&>a]:font-Bubblegum flex items-center gap-2 [&>a]:flex [&>a]:h-[42px] [&>a]:items-center [&>a]:rounded-xl [&>a]:border-2 [&>a]:px-3 [&>a]:hover:hue-rotate-280">
            <Link to="/">Time Vaults</Link>
            <Link to="/">Liquid Launch</Link>
            <Link to="/">PreSale Vaults</Link>
            <Link to="/">Bribe Wars</Link>
          </div>
        </div>
        <div className="[&>button]:bg-cream flex items-center gap-2">
          <Select>
            <SelectTrigger>
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
          <a className="font-Bubblegum hover:bg-orange shadow-inner-custom bg-light-orange flex h-[42px] items-center rounded-xl px-2 text-center leading-6 font-bold tracking-wider text-nowrap text-white">
            Connect Wallet
          </a>
        </div>
      </div>
    </nav>
  );
}
