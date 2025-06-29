import { useMetricsStore } from '@/services/store/useMetricsStore';
import { memo } from 'react';

function AvgBlockTime() {
  const avgBlockTime = useMetricsStore(state => state.metrics?.AvgBlockTime.replace(',', '.'));
  return (
    <div className="p-4 bg-[#8884d854] min-h-[136px] select-none">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center">
          <div>Avg Block Time</div>
          <div className="flex gap-[3px] flex-col opacity-70">
            <div className="w-[3px] h-[3px] rounded-full bg-white"></div>
            <div className="w-[3px] h-[3px] rounded-full bg-white"></div>
          </div>
        </div>
        <div className="flex justify-between items-end mt-auto">
          {avgBlockTime ? (
            <div className="text-[64px] tracking-[-10px] leading-none">{avgBlockTime}</div>
          ) : (
            <div className="skeleton bg-inherit h-[64px] w-full !rounded-none mt-auto"></div>
          )}
          <div className="flex items-center gap-1">
            <div className="text-[20px]">/</div>
            <div className="text-[14px]">block</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(AvgBlockTime);
