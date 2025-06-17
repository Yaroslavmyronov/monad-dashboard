import { useMetricsStore } from '@/services/store/useMetricsStore';

function Erc20TransferEvents() {
  const erc20TransferEvents = useMetricsStore(state => state.metrics?.Erc20TransferEvents);
  return (
    <div className="bg-[#1f1f21] p-4 min-h-[288px] select-none">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center">
          <div>Erc20 Transfer Events</div>
          <div className="flex gap-[3px] flex-col opacity-70">
            <div className="w-[3px] h-[3px] rounded-full bg-white"></div>
            <div className="w-[3px] h-[3px] rounded-full bg-white"></div>
          </div>
        </div>
        <div className="flex justify-between items-end mt-auto">
          <div className="text-[64px] tracking-[-6px] leading-none">{erc20TransferEvents}</div>
          <div className="flex items-center gap-1">
            <div className="text-[20px]">/</div>
            <div className="text-[14px]">1000 blocks</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Erc20TransferEvents;
