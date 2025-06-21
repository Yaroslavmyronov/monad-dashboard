import { useMetricsStore } from '@/services/store/useMetricsStore';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import BurgerMenu from './BurgerMenu/BurgerMenu';

function Header() {
  const location = useLocation();

  const latestBlock = useMetricsStore(state => state.metrics?.LatestBlock);
  const totalTransaction = useMetricsStore(state => state.metrics?.TotalTransaction);

  const links = [
    {
      to: '/transactions',
      label: 'Transactions',
      value: isNaN(Number(totalTransaction)) ? null : Number(totalTransaction).toLocaleString('de-DE'),
      align: 'start',
    },
    {
      to: '/blocks',
      label: 'Blocks',
      value: isNaN(Number(latestBlock)) ? null : Number(latestBlock).toLocaleString('de-DE'),
      align: 'center',
    },
    { to: '/tokens', label: 'Tokens', value: '0.000.000', align: 'center' },
    { to: '/nfts', label: 'NFTs', value: '00.000.000', align: 'center' },
  ];

  return (
    <header className="container py-[30px] flex px-4">
      <div className="flex w-full">
        <Link to="/" className="flex items-center cursor-pointer">
          <div className="w-[30px] h-[30px] grid grid-cols-3 grid-rows-3 gap-2">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="bg-sand" />
            ))}
          </div>
        </Link>
        <div className="border-r mx-[40px] border-gray md:block hidden"></div>
        <div className="gap-[24px] items-center shrink md:flex hidden">
          {links.map(({ to, label, value, align }, index) => {
            const isActive = location.pathname === to;
            return (
              <Link key={index} to={to} className={`flex flex-col items-${align || 'center'} text-[12px] group`}>
                <div
                  className={`${isActive ? 'text-[#8884d8]' : 'text-gray'} whitespace-nowrap ${`group-hover:text-[#8884d8]`} transition-colors duration-300`}
                >
                  {label}
                </div>
                {!value ? (
                  <div className="skeleton bg-inherit h-[18px] w-full !rounded-none mt-auto"></div>
                ) : (
                  <div>{value}</div>
                )}
              </Link>
            );
          })}
        </div>
        <div className="border-r mx-[40px] border-gray md:block hidden"></div>
        <BurgerMenu links={links}></BurgerMenu>
      </div>
    </header>
  );
}

export default Header;
