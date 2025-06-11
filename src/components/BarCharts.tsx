import { useState } from 'react';
import { Bar, BarChart, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
];

export default function Example() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (_data, index) => {
    setActiveIndex(index);
  };

  const renderCustomizedLabel = props => {
    const { x, y, width, index } = props;
    if (index !== activeIndex) return null;

    return (
      <>
        <text
          x={x + width / 2}
          y={y - 20}
          fill="white"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontWeight: 'bold' }}
        >
          {data[index].name}
        </text>
        <text
          x={x + width / 2}
          y={y - 5}
          fill="white"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize: 12 }}
        >
          {data[index].uv}
        </text>
      </>
    );
  };

  return (
    <div style={{ width: '100%' }}>
      <ResponsiveContainer width="100%" height={180}>
        <BarChart width={20} height={200} data={data} margin={{ top: 30, right: 0, left: 0, bottom: 0 }}>
          <Bar dataKey="uv" onClick={handleClick} label={renderCustomizedLabel}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} cursor="pointer" fill={index === activeIndex ? '#8884d8' : 'var(--sand)'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
