import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, TooltipProps, XAxis, YAxis } from 'recharts';

interface ChartCardProps {
  title: string;
  data: any[];
  dataKey: string;
}

interface CustomTooltipProps extends TooltipProps<number, string> {
  title: string;
}

function CustomTooltip({ active, payload, label, title }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: '#1f1f21',
          padding: '10px',
          borderRadius: '5px',
          color: 'white',
          fontSize: '14px',
          border: '1px solid #8884d8',
        }}
      >
        <p className="text-[10px]">{label}</p>
        <div className="flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-[#8884d8] mr-1.5 "></div>
          <p className="mr-3 text-[10px]">{title}</p>
          <p className="text-[10px]">{`${payload[0].value}`}</p>
        </div>
      </div>
    );
  }
  return null;
}

function ChartCard({ title, data, dataKey }: ChartCardProps) {
  return (
    <div className="bg-[#1f1f21]">
      <div className="p-3">
        <div className="mb-3 h-12 px-4 py-2 bg-[#3f3f46] flex items-center">{title}</div>
        <div className="border border-[#343434]">
          <div className="h-[288px] w-full">
            <ResponsiveContainer>
              <AreaChart data={data} margin={{ top: 30, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid horizontal={true} vertical={false} strokeWidth={0.1} />
                <XAxis strokeWidth={0} dataKey="name" />
                <YAxis strokeWidth={0} />
                <Tooltip content={<CustomTooltip title={title} />} />
                <Area type="monotone" dataKey={dataKey} stroke="#8884d8" fill="url(#colorUv)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartCard;
