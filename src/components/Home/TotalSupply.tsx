import { useState } from 'react';
import BarCharts from '../BarCharts';

function TotalSupply() {
  const [active, setActive] = useState(0);

  const timePeriods = ['7d', '30d', '5m', '12m'];
  return (
    <div className="bg-[#1f1f21] p-4">
      <div className="flex h-full flex-col">
        <div className="flex">
          Total Supply
          <ul className="flex ml-auto">
            {timePeriods.map((item, index) => (
              <li
                onClick={() => setActive(index)}
                key={index}
                className={`h-7 w-12 text-center cursor-pointer leading-[1.75rem] ${active === index && 'bg-[#343434]'}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-auto">
          <div className="text-[64px] tracking-[-6px] leading-none mt-auto">1.592</div>
          <BarCharts />
        </div>
      </div>
    </div>
  );
}

export default TotalSupply;
