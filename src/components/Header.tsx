import { Link } from 'react-router-dom';
import { useTxCount } from '../hooks/useTxCount';

function Header() {
  const { count, loading, error } = useTxCount();
  return (
    <header className="container py-[30px] flex px-4">
      <Link to="/" className="flex items-center cursor-pointer">
        <div className="w-[30px] h-[30px] grid grid-cols-3 grid-rows-3 gap-2">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="bg-sand" />
          ))}
        </div>
      </Link>
      <div className="border-r mx-[40px] border-gray"></div>
      <div className="flex gap-[24px] items-center shrink">
        <Link to="/transactions" className="flex flex-col items-start text-[12px]">
          <div className="text-gray whitespace-nowrap">Transactions</div>
          <div>$28.240.08</div>
        </Link>
        <Link to="/blocks" className="flex flex-col items-center text-[12px]">
          <div className="text-gray whitespace-nowrap">Blocks</div>
          <div>47.76</div>
        </Link>
        <Link to="/tokens" className="flex flex-col items-center text-[12px]">
          <div className="text-gray whitespace-nowrap">Tokens</div>
          <div>4,103.51</div>
        </Link>
        <Link to="/nfts" className="flex flex-col items-center text-[12px]">
          <div className="text-gray whitespace-nowrap">NFTs</div>
          <div>10079.28</div>
        </Link>
      </div>
      <div className="border-r mx-[40px] border-gray"></div>
    </header>
  );
}

export default Header;
