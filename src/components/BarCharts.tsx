import { formatNumber } from '@/utils/formatNumber';
import { useState } from 'react';
import { Bar, BarChart, Cell, ResponsiveContainer } from 'recharts';
import { TransactionCountItem } from './Home/TransactionCount';

const barHeights = [20, 35, 70, 50, 45];

export default function BarCharts({ data, loading }: { data: TransactionCountItem[]; loading: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const limitedData = data.slice(0, 5);

  const handleClick = (_data, index) => {
    setActiveIndex(index);
  };

  const renderCustomizedLabel = props => {
    const { x, y, width, index } = props;
    if (index !== activeIndex) return null;

    const date = new Date(limitedData[index].utcDate);
    const monthYear = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    return (
      <>
        <text x={x} y={y - 30} fill="white" textAnchor="start" dominantBaseline="middle" className="text-[10px]">
          {formatNumber(Number(limitedData[index].transactionCount))}
        </text>
        <text x={x} y={y - 15} fill="#636366" textAnchor="start" dominantBaseline="middle" className="text-[10px]">
          {monthYear}
        </text>
      </>
    );
  };

  return (
    <div className="mt-auto w-full">
      {loading ? (
        <div className="w-full h-[180px] animate-pulse flex items-end gap-2 px-4">
          {barHeights.map((height, i) => (
            <div key={i} className="bg-gray w-full" style={{ height: `${height}%` }} />
          ))}
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={180}>
          <BarChart width={20} height={200} data={limitedData} margin={{ top: 70, right: 10, left: 0, bottom: 0 }}>
            <Bar dataKey="transactionCount" onClick={handleClick} label={renderCustomizedLabel}>
              {limitedData.map((entry, index) => (
                <Cell key={`cell-${index}`} cursor="pointer" fill={index === activeIndex ? '#8884d8' : 'var(--sand)'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
