import { useFetch } from '@/hooks/useFetch';
import { convertToDays } from '@/utils/convertToDays';
import { formatNumber } from '@/utils/formatNumber';
import { useState } from 'react';
import BarCharts from '../BarCharts';

export type TransactionCountItem = {
  transactionCount: string;
  unixTimeStamp: number;
  utcDate: string;
};

function TransactionCount() {
  const [active, setActive] = useState(0);

  const timePeriods = ['7d', '30d', '3m', 'all'];
  const period = timePeriods[active];

  const { data, loading } = useFetch<TransactionCountItem[]>(
    `charts/daily-transaction-count?range=${convertToDays(period)}`,
  );

  const totalTransactionCount = data?.reduce((acc, item) => acc + Number(item.transactionCount), 0) ?? 0;

  return (
    <div className="bg-[#1f1f21] p-4 select-none">
      <div className="h-full grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col mb-3 md:mb-0">
          transaction count
          {loading ? (
            <div className="skeleton bg-inherit h-16 w-full !rounded-none mt-auto"></div>
          ) : (
            <div className="text-[64px] tracking-[-6px] leading-none mt-auto">
              {formatNumber(totalTransactionCount)}
            </div>
          )}
        </div>
        <div className="flex flex-col h-full">
          <ul className="flex mr-auto md:ml-auto">
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

          {data && <BarCharts data={data} loading={loading} />}
        </div>
      </div>
    </div>
  );
}

export default TransactionCount;
