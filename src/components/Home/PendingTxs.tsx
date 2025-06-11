function PendingTxs() {
  return (
    <div className="bg-[#1f1f21] p-4">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center">
          <div>Pending Txs</div>
          <div className="flex gap-[3px] flex-col opacity-70">
            <div className="w-[3px] h-[3px] rounded-full bg-white"></div>
            <div className="w-[3px] h-[3px] rounded-full bg-white"></div>
          </div>
        </div>
        <div className="flex justify-between items-end mt-auto">
          <div className="text-[64px] tracking-[-6px] leading-none">24</div>
          <div className="flex items-center gap-1">
            <div className="text-[20px]">/</div>
            <div className="text-[14px]">32</div>
          </div>
        </div>
        <div className="w-full h-[2px] bg-white my-3 opacity-10"></div>
        <div className="flex justify-between items-end">
          <div>total</div>
          <div className="flex items-center gap-1">
            <div className="text-[14px]">$6.000</div>
            <div className="text-[20px]">/</div>
            <div className="text-[14px]">12.000</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PendingTxs;
