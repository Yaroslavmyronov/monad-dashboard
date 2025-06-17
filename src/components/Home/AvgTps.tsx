import { useMetricsStore } from '@/services/store/useMetricsStore';

function AvgTps() {
  const avgTps = useMetricsStore(state => state.metrics?.AvgTps.replace(',', '.'));
  return (
    <div className="bg-[#1f1f21] p-4 select-none">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center">
          <div>Avg Tps</div>
          <div className="flex gap-[3px] flex-col opacity-70">
            <div className="w-[3px] h-[3px] rounded-full bg-white"></div>
            <div className="w-[3px] h-[3px] rounded-full bg-white"></div>
          </div>
        </div>
        <div className="flex justify-between items-end mt-auto">
          {avgTps ? (
            <div className="text-[64px] tracking-[-10px] leading-none">{avgTps}</div>
          ) : (
            <div className="skeleton bg-inherit h-[64px] w-full !rounded-none mt-auto"></div>
          )}

          <div className="flex items-center gap-1">
            <div className="text-[20px]">/</div>
            <div className="text-[14px]">s</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvgTps;
