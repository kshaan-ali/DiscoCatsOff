import { NavLink } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Soon from '@/components/ui/soon';
import { LuEllipsis, LuMenu } from 'react-icons/lu';
import { DropdownMenuLabel } from '@radix-ui/react-dropdown-menu';

const navLinks = [
  { label: 'Time Vaults', to: '/' },
  { label: 'Liquid Launch', soon: true },
  { label: 'PreSale Vaults', soon: true },
  { label: 'Bribe Wars', soon: true },
];

const manualLinks = ['Docs', 'To Do', 'Twitter', 'Discord'];

const mobileNavItemClass =
  'bg-cream text-chocolate border-orange font-Bubblegum relative flex h-[42px] w-full items-center justify-center gap-1 rounded-xl border-2 px-3 hover:hue-rotate-280';

export default function NavBar() {
  const chains = ['Berachain', 'Ethereum', 'Binance'];

  return (
    <nav className="px-[3vw]">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-6">
        {/* Logo and Desktop Navigation */}
        <div className="flex gap-7 max-lg:gap-4">
          <NavLink
            to="/"
            className="font-Showcard text-center text-2xl leading-6 font-bold tracking-wider text-white uppercase duration-50 hover:scale-[1.01]"
          >
            Disco <br /> Cats
          </NavLink>
          <div className="[&>a]:bg-cream [&>a]:text-chocolate [&>a]:border-orange [&>a]:font-Bubblegum flex items-center gap-2 max-[870px]:hidden max-lg:gap-1 [&>a]:relative [&>a]:flex [&>a]:h-[42px] [&>a]:items-center [&>a]:rounded-xl [&>a]:border-2 [&>a]:px-3 [&>a]:hover:hue-rotate-280">
            {navLinks.map(({ label, to }) =>
              to ? (
                <NavLink key={label} to={to}>
                  {label}
                </NavLink>
              ) : (
                <a key={label}>
                  <Soon />
                  {label}
                </a>
              ),
            )}
          </div>
        </div>

        {/* Chain Select, Connect Wallet & Manual Dropdown */}
        <div className="max-[550px]:bg-cream bottom-0 left-0 z-30 flex items-center gap-2 max-[550px]:fixed max-[550px]:w-full max-[550px]:p-2 [&>button]:rounded-xl">
          <div className="[&>button]:bg-cream [&>button]:border-light-orange [&>button]:text-chocolate max-[550px]:order-2 [&>button]:h-10 [&>button]:rounded-xl [&>button]:border [&>button]:px-1 [&>button]:pl-0 max-[550px]:[&>button]:w-18">
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
              <SelectContent className="border-gunmetal border-1">
                <SelectGroup>
                  {chains.map((chain, index) => (
                    <SelectItem
                      className="[&>*]:font-Bubblegum [&>*]:text-chocolate"
                      key={index}
                      value={chain}
                    >
                      {chain}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <a className="font-Bubblegum hover:bg-orange shadow-inner-custom bg-light-orange flex h-[42px] items-center rounded-xl px-2 text-center leading-6 font-bold tracking-wider text-nowrap text-white max-[550px]:order-1">
            Connect Wallet
          </a>
          <div className="order-3 hidden flex-1 justify-end max-[550px]:flex">
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-cream aspect-squarejustify-center hidden h-10 items-center rounded-lg px-2 py-1 max-[870px]:flex">
                <LuEllipsis size="25px" className="text-light-orange" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-cream border-gunmetal relative mx-[3vw] flex flex-col gap-2 rounded-xl border-2 py-6 pt-10 [&>div]:px-8">
                <DropdownMenuLabel className="bg-yellow absolute top-0 left-0 w-full rounded-[0%_0%_46%_48%_/_0%_0%_15%_15%] p-1 text-center">
                  Manual
                </DropdownMenuLabel>
                {manualLinks.map((item) => (
                  <DropdownMenuItem key={item}>
                    <a>{item}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-cream aspect-squarejustify-center hidden h-10 items-center rounded-lg px-2 py-1 max-[870px]:flex">
            <LuMenu size="25px" className="text-light-orange" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-cream border-gunmetal mx-[3vw] flex flex-col gap-4 rounded-xl border-2 py-6 [&>div]:px-8">
            {navLinks.map(({ label, to }) => (
              <DropdownMenuItem key={label}>
                {to ? (
                  <NavLink className={mobileNavItemClass} to={to}>
                    {label}
                  </NavLink>
                ) : (
                  <a className={mobileNavItemClass}>
                    <Soon />
                    {label}
                  </a>
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
