function AvgBlockTime() {
  return (
    <div className="p-4 bg-steel">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center">
          <div>Avg Block Time</div>
          <div className="flex gap-[3px] flex-col opacity-70">
            <div className="w-[3px] h-[3px] rounded-full bg-white"></div>
            <div className="w-[3px] h-[3px] rounded-full bg-white"></div>
          </div>
        </div>
        <div className="flex justify-between items-end mt-auto">
          <div className="text-[64px] tracking-[-10px] leading-none">1.8</div>
          <div className="flex items-center gap-1">
            <div className="text-[20px]">/</div>
            <div className="text-[14px]">6h</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvgBlockTime;
