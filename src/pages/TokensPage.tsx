import CautionTape from '@/components/CautionTape';
import ChartCard from '@/components/ChartCard';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const stats = [
  { label: 'Total Collections', value: '708,207' },
  { label: 'Unique Holders', value: '35,000' },
  { label: 'Total Sales', value: '512,903' },
  { label: 'Volume Traded', value: '$12.4M' },
];
function TokensPage() {
  const text =
    ' in development • in development • in development • in development • in development • in development • in development • in development • in development •';
  return (
    <div className="relative w-full">
      <div className="h-full">
        <CautionTape text={text}></CautionTape>
      </div>

      <div className="container flex-1">
        <div className="py-12">
          <h1 className="text-3xl max-sm:text-2xl">Tokens Dashboard</h1>

          <ul className="mt-6 grid grid-cols-4 gap-4 max-sm:grid-cols-2">
            {stats.map(stat => (
              <li key={stat.label} className="border border-[#343434] bg-[#1f1f21] p-3">
                <div className="text-sm">{stat.label}</div>
                <div>{stat.value}</div>
              </li>
            ))}
          </ul>

          <div className="mt-4 grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            <ChartCard title="Daily Active Addresses" data={data} dataKey="uv" />
            <ChartCard title="Daily Token Transfers" data={data} dataKey="uv" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TokensPage;
