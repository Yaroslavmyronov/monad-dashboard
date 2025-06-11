import { PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';

function NetworkLoadIndex() {
  const value = 7.89;
  const data = [
    {
      name: 'Progress',
      value: value,
      fill: '#8884d8',
    },
  ];
  return (
    <div className="bg-[#1f1f21] w-full h-full flex items-center justify-center relative p-4">
      <div className="absolute flex flex-col items-center justify-center text-white">
        <span className="text-[64px] tracking-[-6px] leading-none">{value}</span>
        <span className="">work-life balance</span>
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
