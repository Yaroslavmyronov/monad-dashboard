import { useMetricsStore } from '@/services/store/useMetricsStore';
import { PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';

function NetworkLoadIndex() {
  const successPct = useMetricsStore(state => state.metrics?.SuccessPct);

  const data = [
    {
      name: 'Progress',
      value: successPct,
      fill: '#8884d8',
    },
  ];
  return (
    <div className="bg-[#1f1f21] w-full h-full flex items-center justify-center relative p-4 select-none min-h-[288px]">
      <div className="absolute z-[1] flex flex-col items-center justify-center text-white">
        <span className="text-[64px] tracking-[-6px] leading-none">{successPct}</span>
        <span className="">
          successful
          <br />
          transactions
        </span>
      </div>
      <div className="h-full absolute flex items-center justify-center text-white opacity-70">
        <img src="/images/Tak.png" alt="" className="w-full h-full object-contain" />
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart innerRadius="95%" outerRadius="100%" data={data} startAngle={90} endAngle={-270}>
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar background={{ fill: '#3f3f46' }} dataKey="value" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default NetworkLoadIndex;
